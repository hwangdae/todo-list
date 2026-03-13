"use client";
import Button from "@/src/components/ui/Button";
import { deleteTodo, updateTodo, uploadImage } from "../api/detailApi";
import { useRouter } from "next/navigation";
import EditCompletedIcon from "@/public/images/icons/editCompletedIcon.svg";

import DeleteIcon from "@/public/images/icons/deleteIcon.svg";

interface ActionButtonProps {
  id: number;
  isCompleted: boolean;
  name: string;
  memo: string | null;
  imageUrl: string | null;
  file: File | null;
}

const ActionButton = ({
  id,
  isCompleted,
  name,
  memo,
  imageUrl,
  file,
}: ActionButtonProps) => {
  const router = useRouter();
  const handleUpdate = async () => {
    let finalImageUrl = imageUrl;

    if (file) {
      const res = await uploadImage(file);
      finalImageUrl = res.url;
    }
    try {
      const res = await updateTodo(id, {
        name,
        memo: memo ?? "",
        imageUrl: finalImageUrl ?? "",
        isCompleted,
      });
      console.log(res);
      alert("수정이 완료되었습니다.");
      router.push("/");
    } catch (error) {
      console.log(error);
      alert("수정 실패. 다시 시도해 주세요.");
    }
  };

  const handleDelete = async () => {
    await deleteTodo(id);
    alert("삭제 되었습니다.");
    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex gap-4 justify-center desktop:justify-end">
      <Button
        variant="secondary"
        icon={<EditCompletedIcon />}
        onClick={handleUpdate}
        isCompleted={isCompleted}
      >
        수정완료
      </Button>
      <Button variant="danger" icon={<DeleteIcon />} onClick={handleDelete}>
        삭제하기
      </Button>
    </div>
  );
};

export default ActionButton;
