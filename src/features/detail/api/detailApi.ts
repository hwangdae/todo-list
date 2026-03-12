import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_API}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// 상세 정보 조회
export const getTodo = async (id: number) => {
  const res = await api.get(`/items/${id}`);
  return res.data;
};

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

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/images/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};
