import { TextHeaderComponent } from "@/components/ui/text-header-component";

export default function Home() {
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <main className="w-full h-full p-10 flex flex-col gap-4 items-start">
      <TextHeaderComponent
        title="Bem-Vindo de volta, User!"
        subtitle={currentDate}
      />
    </main>
  );
}
