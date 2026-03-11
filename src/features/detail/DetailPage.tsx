import React from "react";
import { getTodo } from "./api/detailApi";
import DetailHeader from "./components/DetailHeader";
import ImageUploadBox from "./components/ImageUploadBox";
import MemoSection from "./components/MemoSection";
import ActionButton from "./components/ActionButton";

const DetailPage = async ({ id }: { id: number }) => {
  const todo = await getTodo(id);
  return (
    <div className="h-full bg-white py-6 px-25.5">
      <DetailHeader todo={todo} />
      <div className="flex gap-6 mb-6">
        <ImageUploadBox />
        <MemoSection />
      </div>
      <ActionButton id={id} />
    </div>
  );
};

export default DetailPage;
