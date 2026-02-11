import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    href?: string;
    external?: boolean;
}

const variantStyles: Record<Variant, string> = {
    primary:
        "bg-gray-900 text-white hover:bg-gray-700",
    outline:
        "border border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white",
};

/**
 * Polymorphic button: renders as <a> when `href` is provided, else <button>.
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
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2";

    const classes = `${base} ${variantStyles[variant]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}