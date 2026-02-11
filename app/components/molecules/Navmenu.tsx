import { NavLink } from "../atoms/NavLink";

export interface NavItem {
    label: string;
    href: string;
}

interface NavMenuProps {
    items: NavItem[];
    onItemClick?: () => void;
    className?: string;
}

/**
 * Horizontal list of NavLink atoms.
 * `onItemClick` is forwarded to each link (useful for closing a mobile menu).
 */
export function NavMenu({ items, onItemClick, className = "" }: NavMenuProps) {
    return (
        <nav className={`flex items-center gap-6 ${className}`} aria-label="Main navigation">
            {items.map((item) => (
                <NavLink
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    onClick={onItemClick}
                />
            ))}
        </nav>
    );
}