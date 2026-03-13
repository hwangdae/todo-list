import Image from "next/image";
import { toggleTodo } from "../../home/api/todoApi";
import { useRouter } from "next/navigation";

interface PropsType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  isCompleted: boolean;
}

const DetailHeader = ({ name, setName, id, isCompleted }: PropsType) => {
  const router = useRouter();
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
      className={`flex items-center justify-center gap-4 border-2 border-slate-900 rounded-3xl py-4 mb-6 ${HeaderCss}`}
    >
      <button onClick={handleToggle}>
        <Image src={isCheckbox} width={32} height={32} alt="checkbox" />
      </button>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        size={name.length+2 || 1}
        className="bg-transparent outline-none border-none underline font-bold"
      ></input>
    </div>
  );
};

export default DetailHeader;
