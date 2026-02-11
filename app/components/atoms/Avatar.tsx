interface AvatarProps {
    src?: string;
    alt?: string;
    size?: number;
    className?: string;
}

/**
 * Avatar atom.
 * - Si `src` est fourni → affiche l'image réelle.
 * - Sinon → affiche un placeholder SVG.
 * Remplacer simplement src={"/avatar.png"} quand l'image est prête.
 */
export function Avatar({ src, alt = "Profile picture", size = 128, className = "" }: AvatarProps) {
    return (
        <div
            className={`overflow-hidden rounded-2xl border-2 border-gray-100 bg-gray-50 ${className}`}
            style={{ width: size, height: size }}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    width={size}
                    height={size}
                    className="h-full w-full object-cover"
                />
            ) : (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Avatar placeholder"
                    role="img"
                >
                    <rect width="128" height="128" fill="#F3F4F6" />

                    {/* Body */}
                    <ellipse cx="64" cy="148" rx="44" ry="36" fill="#E5E7EB" />

                    {/* Head */}
                    <circle cx="64" cy="54" r="26" fill="#E5E7EB" />

                    {/* Eyes */}
                    <circle cx="55" cy="51" r="3.5" fill="#9CA3AF" />
                    <circle cx="73" cy="51" r="3.5" fill="#9CA3AF" />

                    {/* Smile */}
                    <path
                        d="M55 64 Q64 72 73 64"
                        stroke="#9CA3AF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                    />
                </svg>
            )}
        </div>
    );
}