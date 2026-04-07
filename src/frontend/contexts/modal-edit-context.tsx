"use client";
import React, { createContext, useState } from "react";

type Task = {
  id: number;
  title: string;
  category: string;
  status: string;
  description?: string;
};
type Props = {
  children: React.ReactNode;
};

type OpenModalContextType = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModal: (task: Task) => void;
  taskData: Task | null;
};

export const OpenModal = createContext<OpenModalContextType | null>(null);

export const ModalEditContext = ({ children }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [taskData, setTaskData] = useState<Task | null>(null);

  function toggleModal(task: Task) {
    setTaskData(task);
    setOpenModal(true);
  }

  return (
    <OpenModal.Provider
      value={{ openModal, setOpenModal, toggleModal, taskData }}
    >
      {children}
    </OpenModal.Provider>
  );
};
