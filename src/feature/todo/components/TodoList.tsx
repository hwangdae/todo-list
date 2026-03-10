"use client";
import Image from "next/image";
import { toggleTodo } from "../api/todoApi";

interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

interface PropsType {
  todos: Todo[];
  isCompleted: boolean;
}

const TodoList = ({ todos, isCompleted }: PropsType) => {
  const isTodoTitle = isCompleted
    ? "/images/etc/done-title.png"
    : "/images/etc/todo-title.png";
  const isCheckbox = isCompleted
    ? "/images/icons/completedCheckboxIcon.svg"
    : "/images/icons/checkboxIcon.svg";
  const itemCss = isCompleted ? "bg-violet-100  line-through" : "bg-white";
  const handleToggle = async (id: number, isCompleted: boolean) => {
    await toggleTodo(id, !isCompleted);
  };
  return (
    <ul className="flex-1">
      <h1 className="mb-4">
        <Image
          src={isTodoTitle}
          width={101}
          height={36}
          alt="todo 타이틀 이미지"
        />
      </h1>
      {todos
        .filter((todo) => todo.isCompleted === isCompleted)
        .map((todo) => (
          <li
            key={todo.id}
            className={`flex gap-4 items-center border-2 border-slate-900 rounded-[27px] px-3 py-2.25 mb-4 last:mb-0 ${itemCss}`}
          >
            <button onClick={() => handleToggle(todo.id, todo.isCompleted)}>
              <Image
                src={isCheckbox}
                width={32}
                height={32}
                alt="todo 체크박스 이미지"
              />
            </button>
            <p>{todo.name}</p>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
