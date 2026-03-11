import Image from "next/image";

// 상세 조회 응답 타입
interface Todo {
  id: number;
  name: string;
  memo: string | null;
  imageUrl: string | null;
  isCompleted: boolean;
  tenantId: string;
}
const DetailHeader = ({ todo }: { todo: Todo }) => {
  return (
    <div className="flex items-center justify-center gap-4 border-2 border-slate-900 rounded-3xl py-4 mb-6">
      <Image
        src="/images/icons/checkboxIcon.svg"
        width={32}
        height={32}
        alt="checkbox"
      />
      <h1 className="underline font-bold">{todo.name}</h1>
    </div>
  );
};

export default DetailHeader;
