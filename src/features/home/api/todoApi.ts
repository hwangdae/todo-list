import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_API}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// 항목 목록 조회
export const getTodos = async () => {
  const res = await api.get("/items");
  return res.data;
};

// 항목 등록
export const addTodo = async (name: string) => {
  const res = await api.post("/items", { name });
  return res.data;
};

// 항목 완료 상태 변경
export const toggleTodo = async (id: number, isCompleted: boolean) => {
  const res = await api.patch(`/items/${id}`, { isCompleted });
  return res.data;
};
