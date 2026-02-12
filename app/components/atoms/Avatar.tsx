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
                relative overflow-hidden rounded-2xl border-4 border-gray-900 bg-white
                shadow-[8px_8px_0_0_#1A1A1A] 
                ${className}
            `}
            style={{ width: size, height: size }}
        >
            {src ? (
                <img src={src} alt={alt} className="h-full w-full object-cover" />
            ) : (
                <svg width="100%" height="100%" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="128" height="128" fill="#FDF6F0" />
                    <circle cx="64" cy="54" r="26" fill="#1A1A1A" />
                    <ellipse cx="64" cy="140" rx="44" ry="30" fill="#1A1A1A" />
                    <circle cx="56" cy="52" r="3" fill="white" />
                    <circle cx="72" cy="52" r="3" fill="white" />
                </svg>
            )}
        </div>
    );
}