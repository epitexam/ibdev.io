interface TechBadgeProps {
    name: string;
    className?: string;
}

export function TechBadge({ name, className = "" }: TechBadgeProps) {
    return (
        <span
            className={`
                inline-block rounded-lg
                bg-white border-2 border-gray-100
                px-3 py-1
                text-[9px] font-[1000] uppercase tracking-widest text-gray-400
                shadow-[0_3px_0_0_#F3F4F6]
                cursor-default transition-all duration-200
                hover:border-[#E15A3E]/20 hover:text-[#E15A3E] 
                hover:shadow-[0_3px_0_0_#E15A3E]/10 hover:-translate-y-0.5
                active:translate-y-0.5 active:shadow-none
                ${className}
            `}
        >
            <span className="opacity-50 mr-1 text-[#E15A3E]">#</span>
            {name}
        </span>
    );
}