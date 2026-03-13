"use client";
import Image from "next/image";
import { toggleTodo } from "../api/todoApi";
import { useRouter } from "next/navigation";
import { Todo } from "../types/todo";

interface PropsType {
  todo: Todo;
}

const TodoItem = ({ todo }: PropsType) => {
  const router = useRouter();

  // 완료 여부에 따라 체크박스 아이콘 변경
  const isCheckbox = todo.isCompleted
    ? "/images/icons/completedCheckboxIcon.svg"
    : "/images/icons/checkboxIcon.svg";

  // 완료된 할 일일 경우 배경 색상 변경
  const itemCss = todo.isCompleted ? "bg-violet-100 line-through" : "bg-white";
  
  // 체크박스 클릭 시 항목 상태 변경 토글
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
