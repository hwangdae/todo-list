import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../../home/api/todoApi";
import { deleteTodo, updateTodo, uploadImage } from "../api/detailApi";
import { useRouter } from "next/navigation";

interface UpdateTodoInput {
  id: number;
  name: string;
  memo: string | null;
  imageUrl: string | null;
  isCompleted: boolean;
  file: File | null;
}

const useTodoActions = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  // 항목 추가 뮤테이션
  const addMutation = useMutation({
    mutationFn: async (name: string) => addTodo(name),
    onSuccess: () => {
      alert("할 일 등록이 완료되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => {
      alert("할 일 등록 실패. 다시 시도해주세요.");
    },
  });
  // 업데이트 뮤테이션
  const updateMutation = useMutation({
    mutationFn: async ({
      id,
      name,
      memo,
      imageUrl,
      isCompleted,
      file,
    }: UpdateTodoInput) => {
      let finalImageUrl = imageUrl;

      if (file) {
        const res = await uploadImage(file);
        finalImageUrl = res.url;
      }

      return await updateTodo(id, {
        name,
        memo: memo ?? "",
        imageUrl: finalImageUrl ?? "",
        isCompleted,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      alert("수정이 완료되었습니다.");
      router.push("/");
    },
    onError: () => {
      alert("수정 실패. 다시 시도해 주세요.");
    },
  });

  // 삭제 뮤테이션
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      alert("삭제 되었습니다.");
      router.push("/");
    },
    onError: () => {
      alert("삭제 실패. 다시 시도해 주세요.");
    },
  });
  const add = (name: string) => addMutation.mutate(name);
  const update = (data: UpdateTodoInput) => updateMutation.mutate(data);
  const remove = (id: number) => deleteMutation.mutate(id);

  return {
    add,
    update,
    remove,
  };
};

export default useTodoActions;
