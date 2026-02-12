interface StatusBadgeProps {
  label?: string;
  color?: "green" | "orange" | "blue";
  className?: string;
}

const colorStyles = {
  green: "bg-[#22C55E] shadow-[#1a8a42]",
  orange: "bg-[#E15A3E] shadow-[#b3432d]",
  blue: "bg-[#3B82F6] shadow-[#2563eb]",
};

export function StatusBadge({ 
  label = "System: Online", 
  color = "green", 
  className = "" 
}: StatusBadgeProps) {
  return (
    <div className={`
      inline-flex items-center gap-2
      text-[10px] font-black uppercase tracking-widest text-white
      px-3 py-1 rounded-lg border-t border-white/20
      /* Relief vertical constant */
      shadow-[0_3px_0_0]
      ${colorStyles[color]}
      ${className}
    `}>
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute h-full w-full rounded-full opacity-75 bg-white"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
      </span>
      {label}
    </div>
  );
}