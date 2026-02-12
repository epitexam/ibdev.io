interface IllustrationProps {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
}

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
            className={`${className} drop-shadow-sm`}
        >

            {/* Mur / Fond de l'illustration */}
            <rect x="5" y="5" width="270" height="250" rx="20" fill="#FDF6F0" stroke="#1A1A1A" strokeWidth="3" />

            {/* Bureau (Épais et solide) */}
            <rect x="25" y="185" width="230" height="12" rx="4" fill="#C9A882" stroke="#1A1A1A" strokeWidth="2.5" />
            <rect x="45" y="197" width="10" height="30" rx="2" fill="#B8956E" stroke="#1A1A1A" strokeWidth="2" />
            <rect x="225" y="197" width="10" height="30" rx="2" fill="#B8956E" stroke="#1A1A1A" strokeWidth="2" />

            {/* Moniteur (Style Cyberpunk / Retro) */}
            <rect x="85" y="105" width="110" height="75" rx="8" fill="#1F2937" stroke="#1A1A1A" strokeWidth="3" />
            <rect x="92" y="112" width="96" height="61" rx="4" fill="#111827" />

            {/* Lignes de Code (Glow effect) */}
            <rect x="100" y="122" width="45" height="4" rx="2" fill="#E15A3E" />
            <rect x="100" y="132" width="65" height="4" rx="2" fill="#22C55E" />
            <rect x="100" y="142" width="55" height="4" rx="2" fill="#3B82F6" />
            <rect x="100" y="152" width="40" height="4" rx="2" fill="#22C55E" />

            {/* Le Développeur (Style Avatar Blocky) */}
            {/* Corps */}
            <rect x="115" y="165" width="50" height="45" rx="10" fill="#E15A3E" stroke="#1A1A1A" strokeWidth="2.5" />
            {/* Tête */}
            <circle cx="140" cy="135" r="22" fill="#FBBF7A" stroke="#1A1A1A" strokeWidth="2.5" />
            {/* Cheveux / Casque */}
            <path d="M118 135 C118 110 162 110 162 135" stroke="#1A1A1A" strokeWidth="6" fill="none" />
            {/* Yeux focus */}
            <rect x="130" y="132" width="4" height="4" rx="1" fill="#1A1A1A" />
            <rect x="146" y="132" width="4" height="4" rx="1" fill="#1A1A1A" />

            {/* Lampe de bureau (L'accent de couleur) */}
            <path d="M210 185 L210 130" stroke="#1A1A1A" strokeWidth="3" />
            <path d="M210 130 L190 120" stroke="#1A1A1A" strokeWidth="3" />
            <circle cx="185" cy="115" r="12" fill="#FDE68A" stroke="#1A1A1A" strokeWidth="2" />

            {/* Accessoires (Plante & Livres) */}
            <rect x="40" y="165" width="20" height="20" rx="3" fill="#FB923C" stroke="#1A1A1A" strokeWidth="2" />
            <path d="M50 165 C50 145 35 145 40 165" fill="#22C55E" stroke="#1A1A1A" strokeWidth="1.5" />

            <rect x="220" y="165" width="25" height="20" rx="2" fill="#3B82F6" stroke="#1A1A1A" strokeWidth="2" />
        </svg>
    );
}