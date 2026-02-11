import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    variant?: Variant;
    href?: string;
    external?: boolean;
}

const variantStyles: Record<Variant, string> = {
    primary:
        "bg-[#1A1A1A] text-white shadow-[0_4px_0_0_rgba(0,0,0,1)] hover:shadow-[0_2px_0_0_rgba(0,0,0,1)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] border border-white/10",
    outline:
        "border-2 border-[#1A1A1A] text-[#1A1A1A] bg-white shadow-[0_4px_0_0_rgba(26,26,26,1)] hover:shadow-[0_2px_0_0_rgba(26,26,26,1)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]",
};

/**
 * Button avec profondeur et effet "tactile" 3D
 */
export function Button({
    variant = "primary",
    href,
    external = false,
    children,
    className = "",
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 select-none";

    const classes = `${base} ${variantStyles[variant]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(props as any)}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...(props as any)}>
            {children}
        </button>
    );
}