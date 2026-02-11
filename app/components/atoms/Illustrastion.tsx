interface IllustrationProps {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
}

/**
 * Illustration atom.
 * - Si `src` est fourni → affiche l'image.
 * - Sinon → SVG placeholder d'un développeur à son bureau,
 *   fidèle à la maquette (tons chauds, lampe, bureau).
 */
export function Illustration({
    src,
    alt = "Developer illustration",
    width = 280,
    height = 260,
    className = "",
}: IllustrationProps) {
    if (src) {
        return (
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`object-contain ${className}`}
            />
        );
    }

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 280 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label={alt}
            role="img"
            className={className}
        >
            {/* Wall background */}
            <rect width="280" height="260" fill="#FDF6F0" rx="16" />

            {/* Desk */}
            <rect x="30" y="180" width="220" height="14" rx="4" fill="#C9A882" />
            <rect x="50" y="194" width="12" height="40" rx="3" fill="#B8956E" />
            <rect x="218" y="194" width="12" height="40" rx="3" fill="#B8956E" />

            {/* Monitor */}
            <rect x="90" y="110" width="100" height="68" rx="6" fill="#1F2937" />
            <rect x="96" y="116" width="88" height="56" rx="4" fill="#111827" />
            {/* Code lines on screen */}
            <rect x="102" y="124" width="40" height="4" rx="2" fill="#F97316" />
            <rect x="102" y="133" width="60" height="4" rx="2" fill="#6EE7B7" />
            <rect x="102" y="142" width="50" height="4" rx="2" fill="#93C5FD" />
            <rect x="102" y="151" width="35" height="4" rx="2" fill="#6EE7B7" />
            <rect x="102" y="160" width="55" height="4" rx="2" fill="#F97316" />
            {/* Monitor stand */}
            <rect x="133" y="178" width="14" height="10" rx="2" fill="#374151" />
            <rect x="122" y="186" width="36" height="5" rx="2" fill="#374151" />

            {/* Lamp */}
            <rect x="195" y="120" width="5" height="60" rx="2" fill="#9CA3AF" />
            <rect x="185" y="115" width="30" height="5" rx="2" fill="#9CA3AF"
                transform="rotate(-20 185 115)" />
            <ellipse cx="208" cy="108" rx="18" ry="10"
                fill="#FDE68A" opacity="0.9" />
            <ellipse cx="208" cy="110" rx="12" ry="6" fill="#FCD34D" />

            {/* Chair back */}
            <rect x="118" y="195" width="44" height="36" rx="8" fill="#E5793B" />

            {/* Person body */}
            <rect x="122" y="155" width="36" height="42" rx="8" fill="#F97316" />

            {/* Person head */}
            <circle cx="140" cy="138" r="18" fill="#FBBF7A" />
            {/* Hair */}
            <path d="M122 132 Q130 118 140 116 Q150 118 158 132 Q154 120 140 118 Q126 120 122 132Z"
                fill="#1F2937" />
            {/* Eyes */}
            <circle cx="134" cy="136" r="2.5" fill="#1F2937" />
            <circle cx="146" cy="136" r="2.5" fill="#1F2937" />
            {/* Slight smile */}
            <path d="M135 143 Q140 147 145 143"
                stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            {/* Left arm reaching to keyboard */}
            <path d="M122 168 Q100 175 88 182"
                stroke="#F97316" strokeWidth="10" strokeLinecap="round" fill="none" />
            {/* Right arm */}
            <path d="M158 168 Q175 175 186 182"
                stroke="#F97316" strokeWidth="10" strokeLinecap="round" fill="none" />

            {/* Keyboard */}
            <rect x="78" y="179" width="60" height="10" rx="3" fill="#D1D5DB" />
            <rect x="82" y="182" width="8" height="4" rx="1" fill="#9CA3AF" />
            <rect x="93" y="182" width="8" height="4" rx="1" fill="#9CA3AF" />
            <rect x="104" y="182" width="8" height="4" rx="1" fill="#9CA3AF" />
            <rect x="115" y="182" width="8" height="4" rx="1" fill="#9CA3AF" />

            {/* Small plant pot */}
            <rect x="36" y="160" width="24" height="20" rx="4" fill="#FB923C" />
            <path d="M42 160 Q48 140 56 148 Q48 148 48 158"
                fill="#4ADE80" />
            <path d="M54 160 Q44 138 38 146 Q46 148 48 158"
                fill="#22C55E" />

            {/* Books on desk corner */}
            <rect x="220" y="162" width="30" height="18" rx="2" fill="#60A5FA" />
            <rect x="222" y="156" width="26" height="18" rx="2" fill="#F472B6" />
            <rect x="224" y="150" width="22" height="18" rx="2" fill="#A78BFA" />
        </svg>
    );
}