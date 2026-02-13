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
  const isDefault = label === "System: Online";

  return (
    <div className={`
      relative z-30 /* z-index élevé pour passer devant tout */
      inline-flex items-center gap-1.5 md:gap-2
      text-[9px] md:text-[10px] font-black uppercase tracking-tighter md:tracking-widest text-white
      px-2 py-1 md:px-3 md:py-1.5 rounded-lg border-t border-white/20
      shadow-[0_3px_0_0] transition-all
      ${colorStyles[color]}
      ${className}
    `}>
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span className="animate-ping absolute h-full w-full rounded-full opacity-75 bg-white"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
      </span>

      <span className="whitespace-nowrap">
        {isDefault ? (
          <>
            <span className="hidden sm:inline">System: </span>
            <span>Online</span>
          </>
        ) : (
          label
        )}
      </span>
    </div>
  );
}