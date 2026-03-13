// 디테일 항목 응답 타입
export interface DetailTodo {
  id: number;
  name: string;
  memo: string | null;
  imageUrl: string | null;
  isCompleted: boolean;
  tenantId: string;
}
