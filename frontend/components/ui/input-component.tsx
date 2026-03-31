import React from "react";
import { CiSearch } from "react-icons/ci";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  showIcon?: boolean;
  containerClassName?: string;
};
export const InputComponent = ({
  showIcon = false,
  className = "",
  containerClassName = "",
  ...rest
}: InputProps) => {
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
