import { type ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    className?: string;
}

/**
 * Small inline label used in the Hero to introduce the developer's name.
 */
export function Badge({ children, className = "" }: BadgeProps) {
    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 text-xs font-medium text-gray-600 shadow-sm  py-3 ${className}`}
        >
            {children}
        </span>
    );
}