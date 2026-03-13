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

  // 항목 업데이트 버튼
  const handleUpdate = async () => {
    let finalImageUrl = imageUrl;
    // 새로운 이미지가 있을 경우 먼저 업로드 진행
    if (file) {
      const res = await uploadImage(file);
      finalImageUrl = res.url;
    }
    try {
      await updateTodo(id, {
        name,
        memo: memo ?? "",
        imageUrl: finalImageUrl ?? "",
        isCompleted,
      });

      alert("수정이 완료되었습니다.");
      router.push("/");
    } catch (error) {
      console.log(error);
      alert("수정 실패. 다시 시도해 주세요.");
    }
  };

  // 항목 삭제 버튼
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
        isActive={isCompleted}
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
