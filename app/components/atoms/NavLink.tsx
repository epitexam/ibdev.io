interface NavLinkProps {
    label: string;
    href: string;
    onClick?: () => void;
}

/**
 * NavLink amélioré avec un indicateur visuel animé (soulignement discret).
 */
export function NavLink({ label, href, onClick }: NavLinkProps) {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`
                relative group py-1
                text-sm font-semibold text-gray-500 
                transition-all duration-300 
                hover:text-black
            `}
        >
            {label}
            <span
                className={`
                    absolute bottom-0 left-0 h-0.5 w-0 bg-[#E15A3E]
                    transition-all duration-300 ease-out
                    group-hover:w-full
                `}
            />
            <span className="sr-only">(current)</span>
        </a>
    );
}