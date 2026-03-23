"use client";

import { FaBook } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiTask } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const navigationItems = [
    { id: 0, icon: <LuLayoutDashboard />, text: "Dashboard", href: "/" },
    { id: 1, icon: <BiTask />, text: "Tarefas", href: "/tasks" },
  ];
  const pathname = usePathname();
  return (
    <aside className="h-full w-62.5 bg-white flex flex-col border-r border-r-(--color-border) gap-12.5 p-5">
      <Link
        href="/"
        className="flex gap-5 h-12.5 w-52.5 items-center justify-center font-bold text-[24px]"
      >
        <i className="bg-(--color-primary) w-12.5 h-12.5 flex items-center justify-center text-white rounded-lg">
          <FaBook />
        </i>
        <p className="">StudyFlow</p>
      </Link>
      <nav className="w-full flex flex-col items-center font-medium text-2xl">
        <ul className="flex flex-col gap-10">
          {navigationItems.map((items) => {
            const isActive =
              items.href === "/"
                ? pathname === "/"
                : pathname.startsWith(items.href);

            return (
              <li key={items.id} className="rounded-[10px]">
                <Link
                  href={items.href}
                  className={`flex items-center gap-12.5 p-4 cursor-pointer rounded-[10px] transition-colors
                  ${
                    isActive
                      ? "bg-[#33ddff41] text-(--color-primary)"
                      : "hover:bg-[#33ddff41]"
                  }`}
                >
                  {items.icon}
                  {items.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
