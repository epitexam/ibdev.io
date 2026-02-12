import { SkillBadge } from "../atoms/SkillBadge";

interface SkillCategoryRowProps {
    category: string;
    tools: string[];
}

export function SkillCategoryRow({ category, tools }: SkillCategoryRowProps) {
    return (
        <div className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 border-b border-gray-100 py-8 last:border-b-0 transition-colors hover:bg-gray-50/50 px-4 md:px-0">
            <div className="flex items-start">
                <div className="relative flex items-center gap-3">
                    <div className="h-4 w-0.5 bg-transparent group-hover:bg-[#E15A3E] transition-all" />
                    <span className="text-[11px] font-[1000] uppercase tracking-widest text-gray-400 group-hover:text-gray-950 transition-colors">
                        {category}
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
                {tools.map((tool, index) => (
                    <div
                        key={tool}
                        className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both"
                        style={{ animationDelay: `${index * 40}ms` }}
                    >
                        <SkillBadge name={tool} />
                    </div>
                ))}
            </div>
        </div>
    );
}