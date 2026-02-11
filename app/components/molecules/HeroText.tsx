import { Badge } from "../atoms/Badge";

interface HeroTextProps {
    name: string;
    title: string;
    subtitle: string;
}

/**
 * Badge + heading + subtitle grouped as a molecule.
 * Kept separate from the CTA so each part can evolve independently.
 */
export function HeroText({ name, title, subtitle }: HeroTextProps) {
    return (
        <div className="flex flex-col items-center gap-3 text-center py-5">
            <Badge>
                <span>👋</span>
                <span>Hey I'm {name}</span>
            </Badge>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl py-5">
                {title}
            </h1>

            <p className="max-w-sm text-base text-gray-500">{subtitle}</p>
        </div>
    );
}