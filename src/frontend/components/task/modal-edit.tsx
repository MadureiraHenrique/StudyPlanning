"use client";
import { FaX } from "react-icons/fa6";
import { ButtonComponent } from "../ui/button-component";
import { TextHeaderComponent } from "../ui/text-header-component";
import { useContext, useEffect, useState } from "react";
import { OpenModal } from "@/contexts/modal-edit-context";
import { InputComponent } from "../ui/input-component";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { title } from "process";

type Subtask = {
  id: number;
  title: string;
  done: boolean;
};

export const ModalEdit = () => {
  const context = useContext(OpenModal);
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);

  if (!context) return null;

  const { openModal, setOpenModal, taskData } = context;

  if (!openModal) return null;
  console.log(taskData);

  useEffect(() => {
    if (taskData?.subtasks) {
      setSubtasks(taskData.subtasks);
    }
  }, [taskData]);

  function handleSubtaskChange(value: string, index: number) {
    setSubtasks((prev) =>
      prev.map((item, i) => (i === index ? { ...item, title: value } : item)),
    );
  }
  //alterar forma do id
  function addSubtask() {
    setSubtasks((prev) => [
      ...prev,
      { id: Date.now(), title: "", done: false },
    ]);
  }

  function removeSubtask(index: number) {
    setSubtasks((prev) => prev.filter((_, i) => i !== index));
  }

  function toggleDone(index: number) {
    setSubtasks((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item,
      ),
    );
  }

  //criar funcao para dar update no back
  //limitar numero de caracteres do description

  return (
    <div className="z-50 bg-black/50 inset-0 fixed flex items-center justify-center">
      <div className="flex flex-col w-[90%] h-[95%] bg-white p-10 rounded gap-2 ">
        <div className="flex items-center justify-between w-full">
          <p className="text-(--color-hover) font-bold">Atualizar tarefa:</p>
          <button
            className="flex text-xl hover:bg-(--color-hover) transition p-2 rounded-3xl cursor-pointer hover:text-white"
            onClick={() => setOpenModal(false)}
          >
            <FaX />
          </button>
        </div>
        <div className="flex justify-between items-center w-full h-20">
          <div className="flex flex-col items-start gap-2">
            <TextHeaderComponent title={taskData?.title} />
            <div className="flex items-center gap-10">
              <p className="bg-yellow-50 p-1 rounded-xl font-bold text-yellow-300">
                {taskData?.category}
              </p>

              <p className="font-medium text-(--color-text-secondary)">
                Status: <span>{taskData?.status}</span>
              </p>
            </div>
          </div>

          <div className="flex gap-10">
            <ButtonComponent customize="default">Arquivar</ButtonComponent>

            <ButtonComponent customize="primary" className="w-40">
              Salvar
            </ButtonComponent>
          </div>
        </div>

        <div className="flex flex-col w-full h-full min-h-0 p-2 rounded border border-(--color-border)">
          <p className="text-(--color-text-secondary) text-xl">
            {taskData?.subtasks && taskData.subtasks.length > 0
              ? "SubTasks:"
              : "Descrição:"}
          </p>
          {taskData?.subtasks && taskData.subtasks.length > 0 ? (
            <div className="w-full flex flex-col gap-2">
              {subtasks.map((subtask, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 cursor-pointer ${
                      subtask.done
                        ? "bg-sky-500 border-sky-500"
                        : "border-slate-200"
                    }`}
                    onClick={() => toggleDone(index)}
                  >
                    {subtask.done && <FaCheck className="text-white text-sm" />}
                  </div>
                  <InputComponent
                    variant="subtask"
                    placeholder={`Sub-task ${index + 1}`}
                    value={subtask.title}
                    onChange={(e) => handleSubtaskChange(e.target.value, index)}
                    required
                  >
                    <IoMdRemoveCircleOutline
                      className="cursor-pointer text-2xl text-(--color-primary) hover:text-(--text-primary) transition"
                      onClick={() => removeSubtask(index)}
                    />
                  </InputComponent>
                </div>
              ))}
              <button
                type="button"
                onClick={addSubtask}
                className="text-sm text-(--color-primary) hover:underline cursor-pointer p-1"
              >
                + Adicionar sub-tarefa
              </button>
            </div>
          ) : (
            <div
              className="
              w-full flex-1 min-h-0
              overflow-y-auto
              outline-none
              wrap-break-word
              whitespace-pre-wrap
              p-2
            "
              contentEditable="true"
              dangerouslySetInnerHTML={{
                __html: taskData?.description || "",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
