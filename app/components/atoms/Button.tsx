import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    variant?: Variant;
    href?: string;
    external?: boolean;
}

const variantStyles: Record<Variant, string> = {
    primary: `
        bg-[#1A1A1A] text-white 
        border-t border-white/20
        shadow-[0_4px_0_0_#000] 
        hover:shadow-[0_2px_0_0_#000] 
        active:shadow-none
    `,
    outline: `
        bg-white text-[#1A1A1A] 
        border-2 border-[#1A1A1A]
        shadow-[0_4px_0_0_#1A1A1A] 
        hover:shadow-[0_2px_0_0_#1A1A1A] 
        active:shadow-none
    `,
};

export function Button({
    variant = "primary",
    href,
    external = false,
    children,
    className = "",
    disabled,
    ...props
}: ButtonProps) {
    const base = `
        inline-flex items-center justify-center 
        rounded-xl px-6 py-2.5 
        text-sm font-[800] uppercase tracking-tight
        transition-all duration-100 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900 
        select-none
        /* Gestion du mouvement 3D */
        hover:translate-y-[2px] 
        active:translate-y-[4px]
        /* État désactivé */
        disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none disabled:translate-y-0
    `;

    const classes = `${base} ${variantStyles[variant]} ${className}`;

    // Contenu commun (pour gérer les icônes par exemple)
    const content = (
        <span className="flex items-center gap-2">
            {children}
        </span>
    );

    if (href && !disabled) {
        return (
            <a
                href={href}
                className={classes}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(props as any)}
            >
                {content}
            </a>
        );
    }

    return (
        <button className={classes} disabled={disabled} {...(props as any)}>
            {content}
        </button>
    );
}