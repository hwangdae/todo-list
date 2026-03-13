"use client";

import Image from "next/image";
import { toggleTodo } from "../../home/api/todoApi";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PropsType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  isCompleted: boolean;
}

const DetailHeader = ({ name, setName, id, isCompleted }: PropsType) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const isCheckbox = isCompleted
    ? "/images/icons/completedCheckboxIcon.svg"
    : "/images/icons/checkboxIcon.svg";

  const HeaderCss = isCompleted ? "bg-violet-100" : "bg-white";

  const handleToggle = async () => {
    await toggleTodo(id, !isCompleted);
    router.refresh();
  };

  return (
    <div
      className={`w-full flex justify-center border-2 border-slate-900 rounded-3xl py-4 mb-6 ${HeaderCss}`}
    >
      <div className="flex justify-center items-center gap-4 w-full px-6">
        <button onClick={handleToggle} className="shrink-0">
          <Image src={isCheckbox} width={32} height={32} alt="checkbox" />
        </button>

        {isEditing ? (
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setIsEditing(false);
            }}
            autoFocus
            className="bg-transparent outline-none underline font-bold"
          />
        ) : (
          <p
            onClick={() => setIsEditing(true)}
            className="font-bold cursor-pointer"
          >
            {name}
          </p>
        )}
      </div>
    </div>
  );
};

export default DetailHeader;
