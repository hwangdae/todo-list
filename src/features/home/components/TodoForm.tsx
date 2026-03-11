"use client";
import React, { useState } from "react";
import { addTodo } from "../api/todoApi";
import AddTodoIcon from "@/public/images/icons/addTodoIcon.svg";
import Button from "@/src/components/ui/Button";

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  // 항목 등록
  const todoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.trim()) {
      alert("할 일을 입력해주세요.");
      return;
    }

    try {
      await addTodo(todo);
      setTodo("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="flex gap-4 mb-10" onSubmit={todoSubmit}>
      <div className="flex-1 bg-[url('/images/etc/search.png')] bg-no-repeat bg-contain p-4">
        <input
          placeholder="할 일을 입력해주세요"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="bg-transparent outline-none w-full px-2"
        />
      </div>
      <Button type="submit" icon={<AddTodoIcon fill="#0F172A" />}>
        추가하기
      </Button>
    </form>
  );
};

export default TodoForm;
