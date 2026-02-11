import { type LucideIcon } from "lucide-react";

interface ContactLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    className?: string;
}

/**
 * Small inline link with a Lucide icon — used for "Send me an email"
 * and "Text me on WhatsApp" in the Hero section.
 */
export function ContactLink({ href, icon: Icon, label, className = "" }: ContactLinkProps) {
    return (
        <a
            href={href}
            className={`inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-900 ${className}`}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
            <Icon size={14} strokeWidth={2} />
            {label}
        </a>
    );
}