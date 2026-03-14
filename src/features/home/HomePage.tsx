"use client";
import { getTodos } from "./api/todoApi";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { data: todos = [] } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => await getTodos(),
  });

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
