import React from "react";
import { CiSearch } from "react-icons/ci";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  showIcon?: boolean;
  containerClassName?: string;
  variant?: "default" | "subtask";
  children?: React.ReactNode;
};

export const InputComponent = ({
  showIcon = false,
  className = "",
  containerClassName = "",
  variant = "default",
  children,
  ...rest
}: InputProps) => {
  const isSubtask = variant === "subtask";

  if (isSubtask) {
    return (
      <div className="w-full  flex items-center justify-between gap-2">
        <input
          className={`
          w-full border-b border-(--color-border)
          bg-transparent outline-none
          py-2 px-0
          text-(--color-text-primary)
          placeholder-(--color-text-secondary)
          focus:border-(--color-primary)
          ${className}
        `}
          {...rest}
        />
        {children}
      </div>
    );
  }

  return (
    <div
      className={`
        flex items-center px-4 py-2 gap-2 
        rounded-xl border border-(--color-border)
        bg-(--color-surface) shadow-sm
        transition focus-within:ring-2 focus-within:ring-(--color-primary)
        ${containerClassName}
      `}
    >
      {showIcon && (
        <span className="text-(--color-text-secondary) text-xl">
          <CiSearch />
        </span>
      )}

      <input
        className={`
          w-full bg-transparent outline-none
          text-(--color-text-primary)
          placeholder-(--color-text-secondary)
          ${className}
        `}
        {...rest}
      />
    </div>
  );
};
