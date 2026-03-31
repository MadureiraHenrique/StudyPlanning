type StatCardProps = {
  title: string;
  value: string | number;
  change?: string;
  colorClass: string;
  changeColorClass?: string;
  invertLabel?: boolean;
};

export function StatCard({ title, value, change, colorClass = "bg-green-100", changeColorClass = "text-green-500", invertLabel = false }: StatCardProps) {
  return (
    <div className="bg-white px-5 py-4 rounded-2xl border border-slate-100 flex items-center gap-4 flex-1 shadow-sm min-w-[220px]">
      <div className={`w-12 h-12 rounded-xl ${colorClass} shrink-0`} />

      <div className="flex flex-col gap-0.5">
        {invertLabel ? (
          <>
            {change && <p className={`text-[11px] font-semibold ${changeColorClass} leading-none`}>{change}</p>}
            <p className="text-2xl font-bold text-[#1e293b] leading-tight">{value}</p>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none">{title}</p>
          </>
        ) : (
          <>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none">{title}</p>
            <p className="text-2xl font-bold text-[#1e293b] leading-tight">{value}</p>
            {change && <p className={`text-[11px] font-semibold ${changeColorClass} leading-none`}>{change}</p>}
          </>
        )}
      </div>
    </div>
  );
}
