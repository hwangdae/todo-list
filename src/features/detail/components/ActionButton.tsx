"use client";
import Button from "@/src/components/ui/Button";
import EditCompletedIcon from "@/public/images/icons/editCompletedIcon.svg";

import DeleteIcon from "@/public/images/icons/deleteIcon.svg";
import useTodoActions from "../hooks/useTodoActions";

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

  const { update, remove } = useTodoActions();

  return (
    <div className="flex gap-4 justify-center desktop:justify-end">
      <Button
        variant="secondary"
        icon={<EditCompletedIcon />}
        onClick={() => update({ id, name, memo, imageUrl, isCompleted, file })}
        isActive={isCompleted}
      >
        수정완료
      </Button>
      <Button variant="danger" icon={<DeleteIcon />} onClick={() => remove(id)}>
        삭제하기
      </Button>
    </div>
  );
};

export default ActionButton;
