interface SkillBadgeProps {
    name: string;
    className?: string;
}

export function SkillBadge({ name, className = "" }: SkillBadgeProps) {
    return (
        <span
            className={`
                inline-flex items-center justify-center
                rounded-lg border border-gray-100 bg-gray-50/50
                px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-gray-700
                /* Relief 3D plus marqué pour le contraste */
                shadow-[0_4px_0_0_#E5E7EB]
                
                transition-all duration-100 ease-in-out
                hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#E5E7EB]
                hover:bg-white hover:text-gray-950
                
                cursor-default select-none
                ${className}
            `}
        >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#E15A3E]" />
            {name}
        </span>
    );
}