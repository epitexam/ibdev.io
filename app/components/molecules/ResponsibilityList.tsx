interface ResponsibilityListProps {
    items: string[];
}

export function ResponsibilityList({ items }: ResponsibilityListProps) {
    return (
        <ul className="flex flex-col gap-3">
            {items.map((item, index) => (
                <li key={index} className="group/item flex gap-4 text-sm leading-relaxed text-gray-500 font-medium">
                    {/* Bullet technique : Petit carré orange */}
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#E15A3E]/30 rounded-[2px] transition-transform group-hover/item:scale-125 group-hover/item:bg-[#E15A3E]" />
                    <span className="group-hover/item:text-gray-800 transition-colors">
                        {item}
                    </span>
                </li>
            ))}
        </ul>
    );
}