import React from "react";

type CardProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};
export const Card = ({ title, children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-sm ${className}`}
    >
      <h2 className="text-base font-bold text-[#1e293b]">{title}</h2>
      {children}
    </div>
  );
};
