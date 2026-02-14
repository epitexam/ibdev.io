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
        bg-[#1F2937] text-white 
        border-[#374151]
        shadow-[0_3px_0_0_#111827] 
        hover:shadow-[0_2px_0_0_#111827]
        hover:translate-y-[1px]
        active:shadow-none
        active:translate-y-[3px]
    `,
    outline: `
        bg-white text-[#1F2937] 
        border-gray-200
        shadow-[0_3px_0_0_#E5E7EB] 
        hover:shadow-[0_2px_0_0_#E5E7EB]
        hover:translate-y-[1px]
        active:shadow-none
        active:translate-y-[3px]
    `,
    accent: `
        bg-[#E15A3E] text-white 
        border-[#f37e66]
        shadow-[0_3px_0_0_#b3432d] 
        hover:shadow-[0_2px_0_0_#b3432d]
        hover:translate-y-[1px]
        active:shadow-none
        active:translate-y-[3px]
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
        px-4 py-2 md:px-6 md:py-2.5 rounded-lg
        text-[11px] md:text-sm font-[1000] uppercase tracking-tighter md:tracking-tight
        transition-all duration-75 
        select-none cursor-pointer
        border-t-2 /* L'effet de relief brillant sur le dessus */
        
        /* État désactivé */
        disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none disabled:translate-y-0
    `;

    const classes = `${base} ${variantStyles[variant]} ${className}`;

    const content = (
        <>
            <span className="relative -top-px">{children}</span>
            {showChevron && (
                <ChevronRight
                    size={14}
                    strokeWidth={3}
                    className="transition-transform group-hover:translate-x-0.5 md:w-4 md:h-4"
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