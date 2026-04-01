import React from "react";
import { ButtonComponent } from "../ui/button-component";
import { IoFilter } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { BsGrid } from "react-icons/bs";

import { RiMenu2Line } from "react-icons/ri";

type DisplayType = "grid" | "list";

type TaskCategoriesProps = {
  display: "grid" | "list";
  setDisplay: React.Dispatch<React.SetStateAction<DisplayType>>;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TaskCategories = ({
  display,
  setDisplay,
  setShowForm,
}: TaskCategoriesProps) => {
  const categories = [
    { id: 0, category_name: "Programação" },
    { id: 1, category_name: "Faculdade" },
    { id: 2, category_name: "Leitura" },
  ];

  return (
    <div className="w-full items-center flex justify-between flex-wrap gap-5">
      <div className="flex gap-5 flex-wrap items-center justify-center">
        <ButtonComponent customize="primary">Todas</ButtonComponent>
        {categories.map((categorie) => (
          <ButtonComponent customize="tertiary" key={categorie.id}>
            {categorie.category_name}
          </ButtonComponent>
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <ButtonComponent customize="default">
          <IoFilter /> Filtro
        </ButtonComponent>
        <ButtonComponent
          customize="primary"
          onClick={() => setShowForm((prev) => !prev)}
        >
          <LuPlus />
          Nova tarefa
        </ButtonComponent>
        <button
          className="text-(--color-text-secondary) cursor-pointer text-2xl hover:text-(--text-primary)"
          onClick={() =>
            setDisplay((prev) => (prev === "list" ? "grid" : "list"))
          }
        >
          {display === "list" ? (
            <BsGrid title="grid" />
          ) : (
            <RiMenu2Line title="list" />
          )}
        </button>
      </div>
    </div>
  );
};
