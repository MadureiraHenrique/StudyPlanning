"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export const Profile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <div
        onClick={() => setShowMenu((prev) => !prev)}
        className="flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-(--color-hover) transition"
      >
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-(--color-surface) border border-(--color-border)">
          <Image
            src="https://static.thenounproject.com/png/638636-200.png"
            width={20}
            height={20}
            alt="Profile"
          />
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-sm font-medium text-(--color-text-primary)">
            User
          </span>
          <span className="text-xs text-(--color-text-secondary)">
            @usuario
          </span>
        </div>

        <FaCaretDown
          className={`transition-transform ${showMenu ? "rotate-180" : ""} text-(--color-text-primary)`}
        />
      </div>

      {showMenu && (
        <div
          className="
    absolute left-0 w-full
    bg-white border border-(--color-border)
    shadow-sm overflow-hidden z-50
    transition-all duration-200 ease-in-out

    bottom-full mb-2
    md:top-full md:bottom-auto md:mt-2
  "
        >
          <Link
            href="#"
            className="block px-4 py-2  hover:bg-(--color-hover) transition"
          >
            Perfil
          </Link>

          <Link
            href="#"
            className="block px-4 py-2  hover:bg-(--color-hover) transition"
          >
            Configurações
          </Link>

          <Link
            href="#"
            className="block px-4 py-2  text-red-500 hover:bg-red-100 transition"
          >
            Sair
          </Link>
        </div>
      )}
    </div>
  );
};
