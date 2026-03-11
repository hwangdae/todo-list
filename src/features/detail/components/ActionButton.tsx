"use client";
import Button from "@/src/components/ui/Button";
import { deleteTodo } from "../api/detailApi";
import { useRouter } from "next/navigation";
import EditCompletedIcon from "@/public/images/icons/editCompletedIcon.svg";

import DeleteIcon from "@/public/images/icons/deleteIcon.svg";

const ActionButton = ({ id }: { id: number }) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteTodo(id);
    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex gap-4 justify-end">
      <Button variant="secondary" icon={<EditCompletedIcon />} onClick={handleDelete}>
        수정완료
      </Button>
      <Button variant="danger" icon={<DeleteIcon />} onClick={handleDelete}>
        삭제하기
      </Button>
    </div>
  );
};

export default ActionButton;
