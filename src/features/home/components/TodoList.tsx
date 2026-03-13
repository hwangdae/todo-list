"use client";
import Image from "next/image";
import EmptyState from "./EmptyState";
import TodoItem from "./TodoItem";
import { Todo } from "../types/todo";

interface PropsType {
  todos: Todo[];
  isCompleted: boolean;
}

const TodoList = ({ todos, isCompleted }: PropsType) => {
  const isTodoTitle = isCompleted
    ? "/images/etc/done-title.png"
    : "/images/etc/todo-title.png";

  const filtered = todos.filter((todo) => todo.isCompleted === isCompleted);

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

      {filtered.length === 0 && (
        <>
          {!isCompleted && (
            <EmptyState
              width={240}
              height={240}
              image="/images/etc/todo-empty-large.svg"
              alt="done empty"
            >
              할 일이 없어요.
              <br />
              TODO를 새롭게 추가해주세요!
            </EmptyState>
          )}
          {isCompleted && (
            <EmptyState
              width={240}
              height={220}
              image="/images/etc/done-empty-large.svg"
              alt="todo empty"
            >
              아직 다 한 일이 없어요.
              <br />
              해야 할 일을 체크해보세요!
            </EmptyState>
          )}
        </>
      )}

      {filtered.length > 0 &&
        filtered.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  );
};

export default TodoList;
