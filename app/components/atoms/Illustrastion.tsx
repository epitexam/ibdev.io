interface IllustrationProps {
    src?: string;
    alt?: string;
    className?: string;
}

export function Illustration({
    src,
    alt = "Developer illustration",
    className = "",
}: IllustrationProps) {
    if (src) {
        return (
            <img
                src={src}
                alt={alt}
                className={`h-auto w-full object-contain ${className}`}
            />
        );
    }

    return (
        <svg
            viewBox="0 0 280 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label={alt}
            role="img"
            /* On utilise h-full w-full pour que le SVG remplisse son parent.
               Le parent (dans About.tsx) gère la taille réelle.
            */
            className={`h-full w-full transition-transform duration-500 ${className}`}
        >
            <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f8fafc" />
                </linearGradient>

                <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F1F5F9" />
                    <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>

                <filter id="softShadow" x="-20%" y="-20%" width="150%" height="150%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.08" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Terminal / Écran */}
            <g filter="url(#softShadow)">
                <rect x="40" y="40" width="200" height="130" rx="12" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />

                {/* Barre de titre */}
                <path d="M40 52C40 45.3726 45.3726 40 52 40H228C234.627 40 240 45.3726 240 52V64H40V52Z" fill="#F8FAFC" />

                {/* Boutons style rétro-futuriste */}
                <circle cx="58" cy="52" r="3" fill="#E15A3E" />
                <circle cx="70" cy="52" r="3" fill="#cbd5e1" />
                <circle cx="82" cy="52" r="3" fill="#cbd5e1" />

                {/* Écran interne */}
                <rect x="50" y="74" width="180" height="86" rx="6" fill="url(#screenGradient)" />

                {/* Lignes de code simplifiées avec ton orange */}
                <g opacity="0.8">
                    <rect x="62" y="88" width="40" height="3" rx="1.5" fill="#E15A3E" />
                    <rect x="106" y="88" width="60" height="3" rx="1.5" fill="#cbd5e1" />
                    <rect x="62" y="98" width="80" height="3" rx="1.5" fill="#cbd5e1" />
                    <rect x="62" y="108" width="30" height="3" rx="1.5" fill="#E15A3E" />
                    <rect x="96" y="108" width="50" height="3" rx="1.5" fill="#cbd5e1" />
                    <rect x="62" y="118" width="70" height="3" rx="1.5" fill="#cbd5e1" />

                    {/* Curseur clignotant orange */}
                    <rect x="62" y="128" width="12" height="3" rx="1.5" fill="#E15A3E">
                        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
                    </rect>
                </g>
            </g>

            {/* Clavier "Blocky" en perspective simplifiée */}
            <g transform="translate(0, 10)">
                <rect x="70" y="185" width="140" height="45" rx="10" fill="white" filter="url(#softShadow)" />
                <rect x="95" y="215" width="90" height="4" rx="2" fill="#f1f5f9" />

                {/* Touches décoratives */}
                <g opacity="0.4">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <rect key={i} x={85 + i * 23} y="195" width="15" height="10" rx="3" fill="#e2e8f0" />
                    ))}
                </g>
            </g>
        </svg>
    );
}