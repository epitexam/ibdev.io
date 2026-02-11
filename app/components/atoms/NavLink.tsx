interface NavLinkProps {
    label: string;
    href: string;
    onClick?: () => void;
}

/**
 * A single navigation anchor.
 * Uses a plain <a> for hash-based in-page navigation.
 * Swap to React Router <Link> when pages are added.
 */
export function NavLink({ label, href, onClick }: NavLinkProps) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
            {label}
        </a>
    );
}