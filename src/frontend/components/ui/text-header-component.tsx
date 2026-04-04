type TextHeaderComponent = {
  title: string | undefined;
  subtitle?: string;
};

export const TextHeaderComponent = ({
  title,
  subtitle,
}: TextHeaderComponent) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2 className="text-(--color-text-secondary) text-xl">{subtitle}</h2>
    </div>
  );
};
