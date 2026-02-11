import { Link } from "react-router";

interface LogoProps {
    className?: string;
    text: String
}

/**
 * Logo Atome avec effet de relief (3D)
 * Reprend la logique de profondeur du bouton pour une cohérence visuelle.
 */
export function Logo({ className = "", text }: LogoProps) {
    return (
        <Link
            to="/"
            className={`
                inline-flex items-center justify-center 
                rounded-lg bg-[#E15A3E] 
                px-3 py-1 text-sm font-black text-white uppercase tracking-tighter
                /* Effet de profondeur (ombre solide) */
                shadow-[0_3px_0_0_#b3432d] 
                /* Interaction */
                transition-all duration-100 
                hover:translate-y-px hover:shadow-[0_2px_0_0_#b3432d]
                active:translate-y-0.75 active:shadow-none
                /* Bordure supérieure pour l'effet de lumière */
                border-t border-white/20
                ${className}
            `}
            aria-label="Go to homepage"
        >
            {text}
        </Link>
    );
}