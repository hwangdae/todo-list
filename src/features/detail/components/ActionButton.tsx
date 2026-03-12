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
  const handleSave = async () => {
    let finalImageUrl = imageUrl;

    if (file) {
      const res = await uploadImage(file); // 여기서 file은 File로 좁혀짐
      finalImageUrl = res.url;
    }
    console.log(finalImageUrl,"<======이미지 URL")
    await updateTodo(id, {
      name,
      memo,
      imageUrl: finalImageUrl,
    });
    router.push("/");
    router.refresh();
  };

  const handleDelete = async () => {
    await deleteTodo(id);
    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex gap-4 justify-end">
      <Button
        variant="secondary"
        icon={<EditCompletedIcon />}
        onClick={handleSave}
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
