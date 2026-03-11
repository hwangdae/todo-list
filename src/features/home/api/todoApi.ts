import axios from "axios";

const api = axios.create({
  baseURL: "https://assignment-todolist-api.vercel.app/api/gnawh/items",
  headers: {
    "Content-Type": "application/json",
  },
});

// 항목 목록 조회
export const getTodos = async () => {
  const res = await api.get("/");
  return res.data;
};

// 항목 등록
export const addTodo = async (name: string) => {
  const res = await api.post("/", { name });
  return res.data;
};

// 항목 완료 상태 변경
export const toggleTodo = async (id: number, isCompleted: boolean) => {
  const res = await api.patch(`/${id}`, { isCompleted });
  return res.data;
};

