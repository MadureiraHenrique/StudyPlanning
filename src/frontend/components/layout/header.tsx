"use client";

import { useContext } from "react";
import { InputComponent } from "../ui/input-component";
import { Profile } from "./profile/profile";
import { IoMenu } from "react-icons/io5";
import { SidebarContext } from "@/contexts/sidebar-context";

export const Header = () => {
  const context = useContext(SidebarContext);

  if (!context) return null;

  const { isOpen, setIsOpen } = context;

  return (
    <header className="w-full bg-white border-b border-(--color-border)">
      <div className="flex items-center justify-between h-20 px-4 md:px-10 gap-2">
        <div className="flex-1 max-w-md ">
          <InputComponent
            containerClassName="w-full"
            showIcon={true}
            placeholder="Buscar..."
          />
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Profile />
        </div>

        <IoMenu
          className="text-3xl cursor-pointer md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
    </header>
  );
};
