"use client";
import { useEffect, useState } from "react";
import { getTodos } from "./api/todoApi";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Todo } from "./types/todo";

const HomePage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (err) {
        console.error(err);
        setTodos([]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pt-6 px-4 container-padding">
      {/* 항목 추가 form */}
      <TodoForm todosLength={todos.length} />
      {/* todo + done 리스트 */}
      <div className="flex gap-12 flex-col lg:flex-row lg:gap-6">
        <TodoList todos={todos} isCompleted={false} />
        <TodoList todos={todos} isCompleted={true} />
      </div>
    </div>
  );
};

export default HomePage;
