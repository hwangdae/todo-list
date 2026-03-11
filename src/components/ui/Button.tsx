import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  isCompleted?: boolean;
  onClick?: () => void;
}

const Button = ({
  type = "button",
  children,
  icon,
  variant = "primary",
  isCompleted,
  onClick,
}: ButtonProps) => {
  const variantStyle = {
    primary: isCompleted ? "text-white bg-violet-600" : "bg-slate-200",
    secondary: isCompleted ? "text-white bg-lime-300" : "bg-slate-200",
    danger: "text-white bg-rose-500",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 btn-primary cursor-pointer font-bold w-42 h-14 border-2 border-slate-900 rounded-3xl shadow-[4px_3px_0px_#0F172A] ${variantStyle[variant]}`}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
