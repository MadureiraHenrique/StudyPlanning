"use client";
import { useState } from "react";
import { ButtonComponent } from "../ui/button-component";
import { InputComponent } from "../ui/input-component";
import { IoMdRemoveCircleOutline } from "react-icons/io";

type TaskFormsProps = {
  formType: "New" | "Edit";
  handleSubmit?: (data: FormData) => void;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormData = {
  title: string;
  description: string;
};

export const TaskForms = ({
  formType,
  handleSubmit,
  setShowForm,
}: TaskFormsProps) => {
  const [isTodoMode, setIsTodoMode] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtasks, setSubtasks] = useState<string[]>([""]);
  const [showMessage, setShowMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      setShowMessage("Insira um titulo");
      setTimeout(() => {
        setShowMessage("");
      }, 2000);
      return;
    }
    if (!description) {
      setShowMessage("Insira uma descrição");
      setTimeout(() => {
        setShowMessage("");
      }, 2000);
      return;
    }

    const data = {
      title,
      description,
    };
    if (handleSubmit) {
      handleSubmit(data);
    }
    setDescription("");
    setTitle("");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-2">
      {showMessage.length > 0 && (
        <div
          className={`bg-white rounded border border-(--color-border) border-l-6 border-l-red-300 z-50 top-1 right-2 absolute w-60 h-20 p-2 flex items-center flex-col transition`}
        >
          <p className="font-bold">Atenção</p>
          <p>{showMessage}</p>
        </div>
      )}
      <form
        onSubmit={onSubmit}
        className="bg-white rounded shadow border border-(--color-border) flex flex-col p-7 gap-4 w-lg h-140"
      >
        <div>
          <h1 className="text-3xl font-bold text-[#1e293b] tracking-tight">
            {formType === "New" ? "Nova Tarefa" : "Editar Tarefa"}
          </h1>
          <p className="text-(--color-text-secondary)">
            Organize sua rotina preenchendo os detalhes abaixo.
          </p>
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto w-full p-2 flex-1">
          <div className="">
            <label className="font-semibold text-sm">Tarefa</label>
            <InputComponent
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Estudar React Context API"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="font-semibold text-sm">
              {isTodoMode ? "To-do" : "Descrição"}
            </label>

            <button
              type="button"
              onClick={() => setIsTodoMode((prev) => !prev)}
              className="flex items-center gap-2 text-sm hover:font-semibold cursor-pointer"
            >
              <span>{isTodoMode ? "Modo to-do" : "Modo de descrição"}</span>
              <div
                className={`h-5 w-5 rounded-full ${
                  isTodoMode ? "bg-(--color-highlight)" : "bg-(--color-border)"
                }`}
              />
            </button>
          </div>
          {isTodoMode ? (
            <div className="flex flex-col gap-2 items-center">
              {subtasks.map((task, index) => (
                <InputComponent
                  key={index}
                  variant="subtask"
                  placeholder={`Sub-task ${index + 1}`}
                  value={task}
                  required
                  readOnly
                  className="focus:border-gray-200 focus:ring-0 cursor-default"
                >
                  <IoMdRemoveCircleOutline className="text-2xl text-gray-300  transition" />
                </InputComponent>
              ))}

              <button type="button" className="text-sm text-gray-300   p-1">
                + Adicionar sub-tarefa
              </button>

              <p className="bg-gray-300 p-2 rounded-2xl text-gray-400">
                Funcionalidade em progresso
              </p>
            </div>
          ) : (
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-(--color-border) p-2 rounded h-70 resize-none outline-none transition focus-within:ring-2 focus-within:ring-(--color-primary)"
              placeholder="Descreva o que precisa ser feito..."
            />
          )}
        </div>

        <div className="flex gap-4 mt-auto">
          <ButtonComponent customize="primary" className="w-full" type="submit">
            Salvar
          </ButtonComponent>

          <ButtonComponent
            customize="tertiary"
            type="button"
            className="w-40"
            onClick={() => setShowForm((prev) => !prev)}
          >
            Cancelar
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};
