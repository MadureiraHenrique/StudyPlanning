import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  customize?: "default" | "primary" | "tertiary";
};

export const ButtonComponent = ({
  children,
  customize = "default",
  className = "",
  ...rest
}: ButtonProps) => {
  const variants = {
    default: "bg-(--color-border)",
    primary: "bg-(--color-primary) text-white",
    tertiary: "bg-white",
  };
  return (
    <button
      className={`hover:opacity-85 min-w-18 min-h-10 p-2 capitalize font-medium rounded-[10px] flex justify-center items-center gap-5 border border-(--color-border) flex-wrap cursor-pointer ${variants[customize]}
        ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
