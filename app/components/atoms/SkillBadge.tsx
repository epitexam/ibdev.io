interface SkillBadgeProps {
    name: string;
    className?: string;
}

export function SkillBadge({ name, className = "" }: SkillBadgeProps) {
    return (
        <span
            className={`
                inline-flex items-center justify-center
                rounded-md border-t border-white/50 bg-white
                px-3 py-1 text-[11px] font-black uppercase tracking-wider text-gray-700
                /* Relief Vertical 3D */
                shadow-[0_3px_0_0_#D1D5DB]
                
                transition-all duration-100 ease-in-out
                hover:translate-y-px hover:shadow-[0_2px_0_0_#D1D5DB]
                hover:text-[#E15A3E]
                
                cursor-default select-none
                ${className}
            `}
        >
            <span className="mr-2 h-1 w-1 rounded-full bg-[#E15A3E]/30" />
            {name}
        </span>
    );
}