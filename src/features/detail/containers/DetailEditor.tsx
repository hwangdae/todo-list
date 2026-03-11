"use client";
import React, { useState } from "react";
import DetailHeader from "../components/DetailHeader";
import ImageUploadBox from "../components/ImageUploadBox";
import MemoSection from "../components/MemoSection";
import ActionButton from "../components/ActionButton";

interface Todo {
  id: number;
  name: string;
  memo: string | null;
  imageUrl: string | null;
  isCompleted: boolean;
  tenantId: string;
}

const DetailEditor = ({ todo }: { todo: Todo }) => {
  const [name, setName] = useState(todo.name);
  return (
    <div className="h-full bg-white py-6 px-25.5">
      <DetailHeader
        name={name}
        setName={setName}
        id={todo.id}
        isCompleted={todo.isCompleted}
      />
      <div className="flex gap-6 mb-6">
        <ImageUploadBox />
        <MemoSection />
      </div>
      <ActionButton id={todo.id} isCompleted={todo.isCompleted} />
    </div>
  );
};

export default DetailEditor;
