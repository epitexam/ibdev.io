import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import type { ContactInfo, SocialLink } from "~/types/contact";

export const SOCIAL_LINKS: SocialLink[] = [
    {
        id: "github",
        platform: "GitHub",
        url: "https://github.com/epitexam",
        icon: Github,
        color: "hover:text-gray-900",
    },
    {
        id: "linkedin",
        platform: "LinkedIn",
        url: "https://linkedin.com/in/epitexam",
        icon: Linkedin,
        color: "hover:text-blue-600",
    },
    {
        id: "email",
        platform: "Email",
        url: "mailto:mamun@example.com",
        icon: Mail,
        color: "hover:text-orange-600",
    },
];

export const CONTACT_INFO: ContactInfo = {
    email: "mamun@example.com",
    location: "Paris, France",
    availability: "Available for freelance projects",
};