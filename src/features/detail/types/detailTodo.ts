export interface DetailTodo {
  id: number;
  name: string;
  memo: string | null;
  imageUrl: string | null;
  isCompleted: boolean;
  tenantId: string;
}
