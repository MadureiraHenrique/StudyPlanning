import { StatCard } from "@/components/ui/stat-card";
import { TaskList } from "@/components/layout/taskList";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-3xl font-bold text-[#1e293b] tracking-tight">
          Bem-Vindo de volta, John Doe!
        </h1>
        <p className="text-slate-400 font-medium first-letter:uppercase">
          {new Date().toLocaleDateString("pt-BR", {
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
          })}
        </p>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        <StatCard
          title="Tarefas concluídas"
          value={1}
          change="+100% vs última semana"
          colorClass="bg-green-100"
          changeColorClass="text-green-500"
        />
        <StatCard
          title="Horas de estudo"
          value="3h"
          change="Meta mensal: 40h"
          colorClass="bg-blue-100"
          changeColorClass="text-slate-400"
          invertLabel
        />
        <StatCard
          title="Ofensiva de dias"
          value="1 Dia"
          change="Novo recorde!"
          colorClass="bg-orange-100"
          changeColorClass="text-orange-500"
          invertLabel
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4 flex-1">
        <TaskList />
        <div className="flex flex-col gap-4 h-full">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex-[2]">
            <h2 className="text-base font-bold text-[#1e293b]">Pomodoro?</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex-1">
            <h2 className="text-base font-bold text-[#1e293b]">card 3</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
