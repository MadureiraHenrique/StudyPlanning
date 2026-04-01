"use client";
import { useState } from "react";
import { ButtonComponent } from "../ui/button-component";
import { todo } from "node:test";

type TaksFormsProps = {
  formType: "New" | "Edit";
  handleSubmit?: () => void;
};

export const TaksForms = ({ formType, handleSubmit }: TaksFormsProps) => {
  const [toDo, setToDo] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 inset-0 bg-black/50 h-full flex items-center justify-center">
      <form
        className="bg-white rounded shadow border border-(--color-border) flex flex-col p-7.5 gap-3 w-lg min-h-157"
        onSubmit={handleSubmit}
      >
        {formType === "New" ? (
          <h1 className="text-3xl font-bold text-[#1e293b] tracking-tight">
            Nova Tarefa
          </h1>
        ) : (
          <h1>Editando Tarefa</h1>
        )}
        <h2 className="text-(--color-text-secondary)">
          Organize sua rotina preenchendo os detalhes abaixo.
        </h2>
        <div className="h-[50vh] flex flex-col justify-between gap-3">
          <div className="h-full flex flex-col gap-3">
            <label className="font-semibold text-[14px]">Tarefa</label>
            <input
              className="border border-(--color-border) p-2 rounded"
              placeholder="Ex: Estudar React Context API"
            />
            <div className="flex justify-between items-center">
              <label className="font-semibold text-[14px]">
                {toDo ? "To-do" : "Descrição"}
              </label>
              <div
                className="flex gap-2 items-center text-sm cursor-pointer hover:font-bold"
                onClick={() => setToDo((prev) => !prev)}
              >
                <p>{toDo ? "Modo to-do" : "Modo de descrição"}</p>
                <div
                  className={`h-5 w-5  rounded-2xl cursor-pointer ${toDo ? "bg-(--color-highlight)" : "bg-(--color-border)"}`}
                />
              </div>
            </div>
            {toDo ? (
              <input type="checkbox" />
            ) : (
              <textarea
                className="border border-(--color-border) p-2 rounded h-50 resize-none"
                placeholder="Descreva o que precisa ser feito..."
              />
            )}
          </div>
          {/*Buttons*/}
          <div className="flex gap-5">
            <ButtonComponent customize="primary" className="w-full">
              Salvar
            </ButtonComponent>
            <ButtonComponent
              customize="tertiary"
              type="button"
              className="w-50"
            >
              Cancelar
            </ButtonComponent>
          </div>
        </div>
      </form>
    </div>
  );
};
