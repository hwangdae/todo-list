"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AddImageIcon from "@/public/images/icons/addImageIcon.svg";
import ImageEditIcon from "@/public/images/icons/imageEditIcon.svg";

interface PropsType {
  imageUrl: string | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const ENGLISH_FILE_NAME = /^[A-Za-z0-9._-]+$/; // 영어 정규식

const ImageUploadBox = ({ imageUrl, setFile }: PropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // 기존 이미지가 없는지 여부
  const hasNoImage = imageUrl === null || imageUrl === "";

  // 이미지 존재 여부에 따라 업로드 버튼 스타일 변경
  const imageUpdateCss = hasNoImage
    ? "bg-slate-200"
    : "bg-slate-900/50 border-2 border-slate-900";

  // 메모리 누수 방지
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  // 업로드 버튼 클릭 시 hidden input 클릭
  const handleClickUpload = () => {
    inputRef.current?.click();
  };

  // 업로드 이미지 선택
  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 파일명 영어 체크
    if (!ENGLISH_FILE_NAME.test(file.name)) {
      alert("이미지 파일 이름은 영어로만 이루어져야 합니다.");
      return;
    }

    // 용량 체크
    if (file.size > MAX_SIZE) {
      alert("이미지 파일은 5MB 이하만 업로드 가능합니다.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
    setFile(file);
  };

  return (
    <div className="relative right-0 bottom-0">
      <div className="flex items-center justify-center w-full desktop:w-[384px] h-[311px] border-dashed border-2 border-slate-300 rounded-3xl bg-slate-50 overflow-hidden">
        {/* 새로 업로드한 이미지 미리보기 */}
        {preview && (
          <Image
            src={preview}
            alt="업로드 미리보기 이미지"
            width={384}
            height={311}
            className="object-cover w-full h-full"
          />
        )}
        {/* 기존 저장된 이미지 표시 */}
        {!preview && imageUrl && (
          <Image
            src={imageUrl}
            alt="Todo 업로드 이미지"
            width={384}
            height={311}
            className="object-cover w-full h-full"
          />
        )}
        {!preview && !imageUrl && (
          <Image
            src="/images/etc/noImage.svg"
            width={54}
            height={54}
            alt="업로드 이미지 없을 때"
          />
        )}
        {/* 이미지가 없을 경우 기본 placeholder 이미지 */}
      </div>
      {/* 이미지 업로드 버튼 */}
      <div className="absolute right-4 bottom-4">
        <button
          type="button"
          onClick={handleClickUpload}
          className={`cursor-pointer flex items-center justify-center w-16 h-16 rounded-full ${imageUpdateCss}`}
        >
          {hasNoImage ? <AddImageIcon /> : <ImageEditIcon />}
        </button>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleChangeImage}
        className="hidden"
      />
    </div>
  );
};

export default ImageUploadBox;
