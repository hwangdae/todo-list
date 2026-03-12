import { getTodos } from "./api/todoApi";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const HomePage = async () => {
  const todos = await getTodos();
  return (
    <div className="mt-6">
      <TodoForm />
      <div className="flex gap-6">
        <TodoList todos={todos} isCompleted={false} />
        <TodoList todos={todos} isCompleted={true} />
      </div>
    </div>
  );
};

export default HomePage;
