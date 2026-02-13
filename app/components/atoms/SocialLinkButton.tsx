import type { LucideIcon } from "lucide-react";

interface SocialLinkButtonProps {
    platform: string;
    url: string;
    icon: LucideIcon;
    colorClass: string;
}

export function SocialLinkButton({ platform, url, icon: Icon, colorClass }: SocialLinkButtonProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                group flex items-center justify-center sm:justify-between 
                gap-3 sm:gap-4 rounded-xl border-2 border-gray-100 
                bg-white px-4 py-3 sm:px-5 sm:py-4 
                text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-500 
                shadow-[0_4px_0_0_#F3F4F6] transition-all 
                hover:translate-y-px hover:shadow-[0_2px_0_0_#F3F4F6]
                active:translate-y-0.75 active:shadow-none
                w-full
                ${colorClass}
            `}
            aria-label={`Visit ${platform} profile`}
        >
            <div className="flex items-center gap-3 sm:gap-4">
                <Icon
                    size={16}
                    strokeWidth={2.5}
                    className="shrink-0 group-hover:text-[#E15A3E] transition-colors sm:w-4.5 sm:h-4.5"
                />
                <span className="truncate">{platform}</span>
            </div>

            <div className="hidden sm:block h-1.5 w-1.5 rounded-full bg-gray-200 group-hover:bg-[#E15A3E] transition-colors" />
        </a>
    );
}