import Image from "next/image";
import AddImageIcon from "@/public/images/icons/addImageIcon.svg";

const ImageUploadBox = () => {
  return (
    <div className="relative right-0 bottom-0">
      <div className="flex items-center justify-center w-[384px] h-[311px] border-dashed border-2 border-slate-300 rounded-3xl bg-slate-50">
        <Image
          src={"/images/etc/image-upload.png"}
          width={54}
          height={54}
          alt="업로드 이미지 없을 때"
        />
      </div>
      <div className="absolute right-4 bottom-4">
        <button className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-200">
          <AddImageIcon />
        </button>
      </div>
    </div>
  );
};

export default ImageUploadBox;
