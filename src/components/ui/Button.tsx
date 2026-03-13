import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  isActive?: boolean;
  hideTextOnMobile?: boolean;
  onClick?: () => void;
}

const Button = ({
  type = "button",
  children,
  icon,
  variant = "primary",
  isActive,
  hideTextOnMobile = false,
  onClick,
}: ButtonProps) => {
  // 모바일에서 텍스트를 숨기지 않을 경우 버튼이 부모 너비를 채우도록 flex-1 적용
  const flexClass = !hideTextOnMobile ? "flex-1" : "";
  // 버튼 variant에 따라 스타일을 분기
  const variantStyles = {
    primary: isActive ? "text-white bg-violet-600" : "bg-slate-200",
    secondary: isActive ? "bg-lime-300" : "bg-slate-200",
    danger: "text-white bg-rose-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex ${flexClass} tablet:flex-none items-center justify-center gap-2 cursor-pointer font-bold
      h-14 px-6
      border-2 border-slate-900 rounded-3xl
      shadow-[4px_3px_0px_#0F172A]
      ${variantStyles[variant]}`}
    >
      {icon}
      {/* 모바일에서는 텍스트를 숨기고 태블릿 이상에서만 표시 */}
      {hideTextOnMobile ? (
        <span className="hidden md:inline">{children}</span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
