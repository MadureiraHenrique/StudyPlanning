import { CiSearch } from "react-icons/ci";

export const InputComponent = () => {
  return (
    <div className="flex items-center w-full max-w-md bg-(--color-surface) px-4 py-2 gap-1 rounded-xl border border-(--color-border) shadow-sm transition ">
      <CiSearch className="text-(--color-text-secondary) text-xl mr-2" />

      <input
        type="text"
        placeholder="Buscar..."
        className="w-full bg-transparent outline-none text-(--color-text-primary) placeholder-(--color-text-secondary)"
      />
    </div>
  );
};
