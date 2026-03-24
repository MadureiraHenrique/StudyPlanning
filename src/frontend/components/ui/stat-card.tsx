type StatCardProps = {
  title: string;
  value: string | number;
  change?: string;
  positive?: boolean;
};

export function StatCard({ title, value, change, positive = true }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl flex items-center gap-4 flex-1">
      <div className="w-14 h-14 rounded-xl bg-green-100"/>
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        {change && (
          <p className={`text-xs font-medium ${positive ? "text-green-500" : "text-red-500"}`}>
            {change}
          </p>
        )}
        <p>{}</p>
      </div>
    </div>
  );
}
