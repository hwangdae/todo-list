"use client";
import React, { useState } from "react";
import DetailHeader from "../components/DetailHeader";
import ImageUploadBox from "../components/ImageUploadBox";
import MemoSection from "../components/MemoSection";
import ActionButton from "../components/ActionButton";
import { DetailTodo } from "../types/detailTodo";

const DetailEditor = ({ todo }: { todo: DetailTodo }) => {
  const [name, setName] = useState(todo.name);
  const [memo, setMemo] = useState(todo.memo);
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="h-full bg-white py-6 detail-container-padding">
      <DetailHeader
        name={name}
        setName={setName}
        id={todo.id}
        isCompleted={todo.isCompleted}
      />
      <div className="flex flex-col mb-6 gap-6 desktop:flex-row">
        <ImageUploadBox imageUrl={todo.imageUrl} setFile={setFile} />
        <MemoSection memo={memo} setMemo={setMemo} />
      </div>
      <ActionButton
        id={todo.id}
        isCompleted={todo.isCompleted}
        name={name}
        memo={memo}
        imageUrl={todo.imageUrl}
        file={file}
      />
    </div>
  );
};

export default DetailEditor;
