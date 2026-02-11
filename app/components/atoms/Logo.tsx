import { Link } from "react-router";

interface LogoProps {
    className?: string;
}

export function Logo({ className = "" }: LogoProps) {
    return (
        <Link
            to="/"
            className={`inline-flex items-center justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-bold text-white tracking-wide transition-opacity hover:opacity-90 ${className}`}
            aria-label="Go to homepage"
        >
            Jeremy
        </Link>
    );
}