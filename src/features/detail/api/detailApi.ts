import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_API}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// 상세 정보 조회
export const getTodo = async (id: number) => {
  const res = await api.get(`/${id}`);
  return res.data;
};

export const deleteTodo = async (id: number) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};
