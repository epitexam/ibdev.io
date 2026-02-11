interface SkillBadgeProps {
    name: string;
    className?: string;
}

/**
 * Badge pour une technologie individuelle.
 * Design : fond gris clair, texte petit, arrondi léger.
 *
 * Respecte SOLID :
 * - S : affiche uniquement un badge
 * - O : extensible via className
 * - L : comportement prévisible
 * - I : interface minimale (juste name)
 * - D : ne dépend que du string passé
 */
export function SkillBadge({ name, className = "" }: SkillBadgeProps) {
    return (
        <span
            className={`inline-block rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 ${className}`}
        >
            {name}
        </span>
    );
}