import { StatCard } from "@/components/ui/stat-card";
import { TaskList } from "@/components/layout/taskList";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Bem-Vindo de volta, John Doe!</h1>
        <p className="text-gray-400 capitalize">
          {new Date().toLocaleDateString("pt-BR", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Tarefas concluídas" value={1} change="+100% vs última semana" />
        <StatCard title="Horas de estudo" value="3h" change="Meta mensal: 40h" />
        <StatCard title="Ofensiva de dias" value="1 Dia" change="Novo recorde!" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TaskList />
        
        <div className="flex flex-col gap-6">
           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-72">
             <h2 className="font-bold text-slate-800">Pomodoro?</h2>
           </div>
           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-48">
             <h2 className="font-bold text-slate-800">card 3</h2>
           </div>
        </div>
      </div>
    </div>
  );
}