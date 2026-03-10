"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const todoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("test");
  };

  return (
    <div>
      <form className="flex gap-4 mb-10" onSubmit={todoSubmit}>
        <div className="flex-1 bg-[url('/images/etc/search.png')] bg-no-repeat bg-contain p-4">
          <input
            placeholder="할 일을 입력해주세요"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="bg-transparent outline-none w-full px-2"
          />
        </div>
        <button
          type="submit"
          className="btn-primary cursor-pointer font-bold w-[168px] h-[56px] border-2 border-slate-900 rounded-[24px] bg-slate-200 shadow-[4px_3px_0px_#0F172A]"
        >
          + 추가하기
        </button>
      </form>
      <div className="flex gap-6">
        <ul className="flex-1">
          <h1 className="mb-4">
            <Image
              src={"/images/etc/todo-title.png"}
              width={101}
              height={36}
              alt="todo 타이틀 이미지"
            />
          </h1>
          <li className="flex gap-4 items-center border-2 border-slate-900 rounded-[27px] px-3 py-2.25 mb-4 last:mb-0">
            <button>
              <Image
                src={"/images/icons/checkboxIcon.svg"}
                width={32}
                height={32}
                alt="todo 체크박스 이미지"
              />
            </button>
            <p>비타민 챙겨 먹기</p>
          </li>
          <li className="flex gap-4 items-center border-2 border-slate-900 rounded-[27px] px-3 py-2.25 mb-4 last:mb-0">
            <button>
              <Image
                src={"/images/icons/checkboxIcon.svg"}
                width={32}
                height={32}
                alt="todo 체크박스 이미지"
              />
            </button>
            <p>비타민 챙겨 먹기</p>
          </li>
        </ul>
        <ul className="flex-1">
          <h1 className="mb-4">
            <Image
              src={"/images/etc/todo-title.png"}
              width={101}
              height={36}
              alt="todo 타이틀 이미지"
            />
          </h1>
          <li className="flex gap-4 items-center border-2 border-slate-900 rounded-[27px] px-3 py-2.25 mb-4 last:mb-0">
            <button>
              <Image
                src={"/images/icons/checkboxIcon.svg"}
                width={32}
                height={32}
                alt="todo 체크박스 이미지"
              />
            </button>
            <p>비타민 챙겨 먹기</p>
          </li>
          <li className="flex gap-4 items-center border-2 border-slate-900 rounded-[27px] px-3 py-2.25 mb-4 last:mb-0">
            <button>
              <Image
                src={"/images/icons/checkboxIcon.svg"}
                width={32}
                height={32}
                alt="todo 체크박스 이미지"
              />
            </button>
            <p>비타민 챙겨 먹기</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
