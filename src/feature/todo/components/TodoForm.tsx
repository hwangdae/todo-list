"use client";
import React, { useState } from "react";
import { addTodo } from "../api/todoApi";
import AddTodoIcon from "@/public/images/icons/addTodoIcon.svg";

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  // 항목 등록
  const todoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.trim()) return;

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
      <button
        type="submit"
        className="flex items-center justify-center gap-2 btn-primary cursor-pointer font-bold w-42 h-14 border-2 border-slate-900 rounded-3xl bg-slate-200 shadow-[4px_3px_0px_#0F172A]"
      >
        <AddTodoIcon fill="#0F172A" />
        추가하기
      </button>
    </form>
  );
};

export default TodoForm;
