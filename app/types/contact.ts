import type { LucideIcon } from "lucide-react";

export interface SocialLink {
    id: string;
    platform: string;
    url: string;
    icon: LucideIcon;
    color: string;
}

export interface ContactInfo {
    email: string;
    phone?: string;
    location?: string;
    availability: string;
}