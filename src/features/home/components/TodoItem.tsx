"use client";

import Image from "next/image";
import { toggleTodo } from "../api/todoApi";
import { useRouter } from "next/navigation";

interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const router = useRouter();

  const isCheckbox = todo.isCompleted
    ? "/images/icons/completedCheckboxIcon.svg"
    : "/images/icons/checkboxIcon.svg";

  const itemCss = todo.isCompleted ? "bg-violet-100 line-through" : "bg-white";

  const handleToggle = async () => {
    await toggleTodo(todo.id, !todo.isCompleted);
    router.refresh();
  };

  return (
    <li
      style={{ position: "relative", isolation: "isolate" }}
      role="listitem"
      aria-label={todo.name}
      className={`flex gap-4 items-center border-2 border-slate-900 rounded-[27px] px-3 py-2.25 mb-4 last:mb-0 ${itemCss}`}
    >
      <div style={{ position: "relative", zIndex: 2 }}>
        <button
          className="flex items-center"
          aria-label="할 일 체크"
          onClick={handleToggle}
        >
          <Image
            src={isCheckbox}
            width={32}
            height={32}
            alt="todo 체크박스 이미지"
          />
        </button>
      </div>

      <button
        style={{ position: "absolute", inset: "0", opacity: "0" }}
        onClick={() => router.push(`/detail/${todo.id}`)}
      >
        상세보기
      </button>

      {todo.name}
    </li>
  );
};

export default TodoItem;
