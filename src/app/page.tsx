import TodoForm from "../feature/todo/components/TodoForm";
import TodoList from "../feature/todo/components/TodoList";
import { getTodos } from "../feature/todo/api/todoApi";

export default async function Home() {
  const todos = await getTodos();
  console.log(todos);
  return (
    <div>
      <TodoForm />
      <div className="flex gap-6">
        <TodoList todos={todos} isCompleted={false} />
        <TodoList todos={todos} isCompleted={true} />
      </div>
    </div>
  );
}
