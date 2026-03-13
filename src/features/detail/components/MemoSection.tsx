import React from "react";

interface PropsType {
  memo: string | null;
  setMemo: React.Dispatch<React.SetStateAction<string | null>>;
}

const MemoSection = ({ memo, setMemo }: PropsType) => {
  return (
    <div className="relative left-0 top-0 w-full desktop:w-[588px] h-[311px] bg-[url('/images/etc/memo.png')] bg-cover bg-center rounded-3xl overflow-hidden">
      <span className="absolute left-1/2 top-6 -translate-1/2 font-extrabold text-amber-800">
        Memo
      </span>
      <textarea
        value={memo || ""}
        onChange={(e) => setMemo(e.target.value)}
        className="custom-scrollbar absolute left-6 top-16 w-[calc(100%-48px)] h-[calc(100%-80px)] bg-transparent resize-none outline-none"
        placeholder="메모를 입력하세요"
      />
    </div>
  );
};

export default MemoSection;
