"use client";
import { FaX } from "react-icons/fa6";
import { ButtonComponent } from "../ui/button-component";
import { TextHeaderComponent } from "../ui/text-header-component";
import { useContext, useEffect, useRef, useState } from "react";
import { OpenModal } from "@/contexts/modal-edit-context";

export const ModalEdit = () => {
  const context = useContext(OpenModal);

  const [showMessage, setShowMessage] = useState("");
  const [description, setDescription] = useState("");
  const descriptionRef = useRef<HTMLDivElement>(null);

  if (!context) return null;

  const { openModal, setOpenModal, taskData } = context;

  if (!openModal || !taskData) return null;

  const url = process.env.NEXT_PUBLIC_API_URL;
  const MAX_LENGTH = 500;

  useEffect(() => {
    setDescription(taskData.description || "");
    if (descriptionRef.current) {
      descriptionRef.current.innerText = taskData.description || "";
    }
  }, [taskData]);

  const handleSave = async () => {
    if (!description || description) {
      //alterar
      alert("DISPARANDO");
      return;
    }
    if (description.length > MAX_LENGTH) {
      alert(`Descrição deve ter no máximo ${MAX_LENGTH} caracteres.`);
      return;
    }

    const updatedTask = {
      ...taskData,
      description,
    };

    try {
      const res = await fetch(`${url}/tasks/${taskData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Erro ao atualizar a tarefa");
      }
      setShowMessage(`Tarefa ${taskData.title} atualizada com sucesso`);
      setTimeout(() => setShowMessage(""), 2000);

      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };

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

            <ButtonComponent
              customize="primary"
              className="w-40"
              onClick={handleSave}
            >
              Salvar
            </ButtonComponent>
          </div>
        </div>

        <div className="flex flex-col w-full h-full min-h-0 p-2 rounded border border-(--color-border)">
          <p className="text-(--color-text-secondary) text-xl">Descrição:</p>

          <div
            className="
              w-full flex-1 min-h-0
              overflow-y-auto
              outline-none
              wrap-break-word
              whitespace-pre-wrap
              p-2
            "
            ref={descriptionRef}
            contentEditable={true}
            onInput={() => {
              if (descriptionRef.current) {
                setDescription(descriptionRef.current.innerText);
              }
            }}
            suppressContentEditableWarning={true}
          />
        </div>
      </div>
    </div>
  );
};
