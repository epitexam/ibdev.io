import { Mail, MessageCircle } from "lucide-react";
import { ContactLink } from "../atoms/Contact";

interface HeroContactsProps {
    email: string;
    whatsapp?: string;
}

/**
 * The two contact shortcuts shown below the CTA button in the Hero.
 */
export function HeroContacts({ email, whatsapp }: HeroContactsProps) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <ContactLink
                href={`mailto:${email}`}
                icon={Mail}
                label="Send me an email"
            />
            {whatsapp && <ContactLink
                href={whatsapp}
                icon={MessageCircle}
                label="Text me on WhatsApp"
                className="text-green-600 hover:text-green-800"
            />}
        </div>
    );
}