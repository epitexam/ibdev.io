interface AvatarProps {
    src?: string;
    alt?: string;
    size?: number;
    className?: string;
}

export function Avatar({ src, alt = "Profile picture", size = 120, className = "" }: AvatarProps) {
    return (
        <div
            className={`
                relative overflow-hidden rounded-[2rem] 
                /* Cadre blanc épais pour le relief */
                border-[6px] border-white bg-white
                /* Ombre Soft-3D verticale */
                shadow-[0_12px_25px_-10px_rgba(0,0,0,0.15),0_8px_0_0_#F3F4F6]
                ${className}
            `}
            style={{ width: size, height: size }}
        >
            <div className="h-full w-full overflow-hidden rounded-[1.4rem] bg-gray-50">
                {src ? (
                    <img src={src} alt={alt} className="h-full w-full object-cover" />
                ) : (
                    /* SVG simplifié et plus doux (gris foncé au lieu de noir pur) */
                    <svg width="100%" height="100%" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="128" height="128" fill="#F8FAFC" />
                        <circle cx="64" cy="54" r="26" fill="#334155" />
                        <ellipse cx="64" cy="140" rx="44" ry="34" fill="#334155" />
                        <circle cx="56" cy="52" r="2.5" fill="white" />
                        <circle cx="72" cy="52" r="2.5" fill="white" />
                    </svg>
                )}
            </div>
            
            {/* Petit reflet de lumière sur le bord supérieur */}
            <div className="absolute inset-0 pointer-events-none rounded-[1.4rem] border-t border-white/40" />
        </div>
    );
}