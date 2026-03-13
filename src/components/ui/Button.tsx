import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  isCompleted?: boolean;
  hideTextOnMobile?: boolean;
  onClick?: () => void;
}

const Button = ({
  type = "button",
  children,
  icon,
  variant = "primary",
  isCompleted,
  hideTextOnMobile = false,
  onClick,
}: ButtonProps) => {
  const isFlex = !hideTextOnMobile && "flex-1";
  const variantStyle = {
    primary: isCompleted ? "text-white bg-violet-600" : "bg-slate-200",
    secondary: isCompleted ? "bg-lime-300" : "bg-slate-200",
    danger: "text-white bg-rose-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex ${isFlex} tablet:flex-none items-center justify-center gap-2 cursor-pointer font-bold
      h-14 px-6
      border-2 border-slate-900 rounded-3xl
      shadow-[4px_3px_0px_#0F172A]
      ${variantStyle[variant]}`}
    >
      {icon}
      {hideTextOnMobile ? (
        <span className="hidden md:inline">{children}</span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
