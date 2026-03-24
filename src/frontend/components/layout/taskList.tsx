export function TaskList() {
  const tasks = [
    { id: 1, title: "Clean Architecture", sub: "Separação de responsabilidades", done: false },
    { id: 2, title: "Blockchain", sub: "Estrutura de blocos", done: false },
    { id: 3, title: "Código Limpo - Cap 3", sub: "Assistir aulas 4 e 5...", done: true },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-slate-800">Tarefas do dia</h2>
        <span className="text-sm text-gray-400 font-medium">1/3</span>
      </div>
      
      <div className="space-y-3">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center gap-3 p-4 border rounded-xl hover:bg-slate-50 transition-colors">
            <input type="checkbox" checked={task.done} className="w-5 h-5 rounded border-gray-300 text-blue-600" />
            <div>
              <p className={`font-semibold ${task.done ? 'line-through text-gray-400' : 'text-slate-700'}`}>{task.title}</p>
              <p className="text-xs text-gray-400">{task.sub}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-3 border-2 border-dashed border-sky-200 text-sky-500 rounded-xl font-medium hover:bg-sky-50 transition-all">
        + Adicionar tarefa
      </button>
    </div>
  );
}