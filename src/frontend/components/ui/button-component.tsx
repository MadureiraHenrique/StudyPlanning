import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  customize?: "default" | "primary" | "tertiary" | "dashed";
};

export const ButtonComponent = ({
  children,
  customize = "default",
  className = "",
  ...rest
}: ButtonProps) => {
  const variants = {
    default: "bg-(--color-border)",
    primary: "bg-(--color-primary) text-white hover:text-(--text-primary)",
    tertiary: "bg-white",
    dashed:
      "bg-white border-2 border-dashed border-(--color-primary) text-(--color-primary) hover:bg-sky-50 ",
  };
  return (
    <button
      className={`min-w-18 h-10 p-2 capitalize hover:bg-(--color-border) font-medium rounded-[10px] flex justify-center items-center gap-5 border border-(--color-border) flex-wrap cursor-pointer ${variants[customize]}
        ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
