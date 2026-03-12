"use client";

import Image from "next/image";
import { useRef, useState } from "react";
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

  const urlIsNull = imageUrl === null;
  const imageUpdateCss = urlIsNull
    ? "bg-slate-200"
    : "bg-slate-900/50 border-2 border-slate-900";

  const handleClickUpload = () => {
    inputRef.current?.click();
  };

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
      <div className="flex items-center justify-center w-[384px] h-[311px] border-dashed border-2 border-slate-300 rounded-3xl bg-slate-50 overflow-hidden">
        {preview ? (
          <Image
            src={preview}
            alt="업로드 미리보기 이미지"
            width={384}
            height={311}
            className="object-cover w-full h-full"
          />
        ) : imageUrl ? (
          <Image
            src={imageUrl}
            alt="기존 이미지"
            width={384}
            height={311}
            className="object-cover w-full h-full"
          />
        ) : (
          <Image
            src="/images/etc/image-upload.png"
            width={54}
            height={54}
            alt="업로드 이미지 없을 때"
          />
        )}
      </div>

      <div className="absolute right-4 bottom-4">
        <button
          type="button"
          onClick={handleClickUpload}
          className={`flex items-center justify-center w-16 h-16 rounded-full ${imageUpdateCss}`}
        >
          {urlIsNull ? <AddImageIcon /> : <ImageEditIcon />}
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
