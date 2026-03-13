import { api } from "@/src/lib/api";
import axios from "axios";
import { DetailTodo } from "../types/detailTodo";

// 상세 정보 조회
export const getTodo = async (id: number): Promise<DetailTodo> => {
  const res = await api.get<DetailTodo>(`/items/${id}`);
  return res.data;
};

// 항목 삭제
export const deleteTodo = async (id: number) => {
  const res = await api.delete(`/items/${id}`);
  return res.data;
};

// Todo 업데이트
export const updateTodo = async (
  id: number,
  data: { name: string; memo: string | null; imageUrl: string | null },
) => {
  try {
    const res = await api.patch(`/items/${id}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 이미지 업로드
export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_API}/images/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return res.data;
};
