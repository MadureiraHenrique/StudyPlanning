import { InputComponent } from "../ui/input-component";

export const Header = () => {
  return (
    <div className="w-full bg-white border-b border-b-(--color-border) h-20 flex items-center p-10">
      <InputComponent />
    </div>
  );
};
