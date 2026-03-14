"use client";
import React, { useState } from "react";
import AddTodoIcon from "@/public/images/icons/addTodoIcon.svg";
import Button from "@/src/components/ui/Button";
import useTodoActions from "../../detail/hooks/useTodoActions";

const TodoForm = ({ todosLength }: { todosLength: number }) => {
  const [todo, setTodo] = useState("");
  const { add } = useTodoActions();
  
  // 추가하기 클릭 시 실행되는 함수
  const todoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.trim()) {
      alert("할 일을 입력해주세요.");
      return;
    }

    try {
      add(todo);
      setTodo("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="flex gap-4 mb-10" onSubmit={todoSubmit}>
      <div className="flex items-center min-h-14 flex-1 p-4 border-2 border-slate-900 bg-slate-100 rounded-3xl shadow-[4px_3px_0px_#0F172A]">
        <input
          placeholder="할 일을 입력해주세요"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="bg-transparent outline-none w-full px-2"
        />
      </div>
      <Button
        type="submit"
        icon={<AddTodoIcon fill="#0F172A" />}
        hideTextOnMobile={true}
        isActive={todosLength === 0}
      >
        추가하기
      </Button>
    </form>
  );
};

export default TodoForm;
