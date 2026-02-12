interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
}

/**
 * Titre de section réutilisable.
 * - `title`    → affiché en gros et gras
 * - `subtitle` → affiché en italique sous le titre, entre parenthèses
 *                ex : "(& My Code)"
 * - `align`    → left (défaut) ou center selon la section
 */
export function SectionTitle({
    title,
    subtitle,
    align = "left",
    className = "",
}: SectionTitleProps) {
    const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

    return (
        <div className={`flex flex-col gap-1 ${alignClass} ${className}`}>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl">
                {title}
            </h2>
            {subtitle && (
                <span className="text-base font-medium italic text-gray-400">
                    {subtitle}
                </span>
            )}
        </div>
    );
}