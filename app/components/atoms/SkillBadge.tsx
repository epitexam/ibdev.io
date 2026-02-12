interface SkillBadgeProps {
    name: string;
    className?: string;
}

/**
 * SkillBadge — Style "Micro-chip"
 * - Bordure contrastée pour l'aspect technique
 * - Effet de relief discret au survol
 * - Typographie typée "Data"
 */
export function SkillBadge({ name, className = "" }: SkillBadgeProps) {
    return (
        <span
            className={`
                inline-flex items-center justify-center
                rounded-md border border-gray-300 bg-white/50
                px-3 py-1 text-[11px] font-black uppercase tracking-wider text-gray-800
                backdrop-blur-[2px]
                /* Animation & Hover */
                transition-all duration-200 ease-in-out
                hover:border-gray-900 hover:bg-white hover:text-black
                hover:shadow-[2px_2px_0_0_#1A1A1A]
                hover:-translate-x-px hover:-translate-y-px
                cursor-default select-none
                ${className}
            `}
        >
            <span className="mr-1.5 h-1 w-1 rounded-full bg-gray-400 group-hover:bg-[#E15A3E]" />
            {name}
        </span>
    );
}