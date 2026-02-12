import { type ButtonHTMLAttributes } from "react";
import { ChevronRight } from "lucide-react";

type Variant = "primary" | "outline" | "accent";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    variant?: Variant;
    href?: string;
    external?: boolean;
    showChevron?: boolean;
}

const variantStyles: Record<Variant, string> = {
    primary: `
        bg-[#1A1A1A] text-white 
        border-t border-white/10
        shadow-[0_4px_0_0_#000000] 
        hover:shadow-[0_2px_0_0_#000000]
        hover:translate-y-[2px]
        active:shadow-none
        active:translate-y-[4px]
    `,
    outline: `
        bg-white text-[#1A1A1A] 
        border-t border-gray-100
        shadow-[0_4px_0_0_#D1D5DB] 
        hover:shadow-[0_2px_0_0_#D1D5DB]
        hover:translate-y-[2px]
        active:shadow-none
        active:translate-y-[4px]
    `,
    accent: `
        bg-[#E15A3E] text-white 
        border-t border-white/20
        shadow-[0_4px_0_0_#b3432d] 
        hover:shadow-[0_2px_0_0_#b3432d]
        hover:translate-y-[2px]
        active:shadow-none
        active:translate-y-[4px]
    `
};

export function Button({
    variant = "primary",
    href,
    external = false,
    showChevron = false,
    children,
    className = "",
    disabled,
    ...props
}: ButtonProps) {
    const base = `
        relative inline-flex items-center justify-center gap-2
        px-6 py-2.5 rounded-lg
        text-sm font-black uppercase tracking-tight
        transition-all duration-100 
        select-none cursor-pointer
        
        /* État désactivé */
        disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none disabled:translate-y-0
    `;

    const classes = `${base} ${variantStyles[variant]} ${className}`;

    const content = (
        <>
            {children}
            {showChevron && (
                <ChevronRight
                    size={16}
                    strokeWidth={3}
                    className="transition-transform group-hover:translate-x-0.5"
                />
            )}
        </>
    );

    if (href && !disabled) {
        return (
            <a
                href={href}
                className={`group ${classes}`}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(props as any)}
            >
                {content}
            </a>
        );
    }

    return (
        <button className={`group ${classes}`} disabled={disabled} {...(props as any)}>
            {content}
        </button>
    );
}