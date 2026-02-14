import type { SocialLink } from "~/types/contact";
import { SocialLinkButton } from "../atoms/SocialLinkButton";

interface SocialLinksProps {
    links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 w-full">
            {links.map((link) => (
                <SocialLinkButton
                    key={link.id}
                    platform={link.platform}
                    url={link.url}
                    icon={link.icon}
                    colorClass={link.color}
                />
            ))}
        </div>
    );
}