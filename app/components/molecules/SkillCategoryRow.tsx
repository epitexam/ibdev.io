import { SkillBadge } from "../atoms/SkillBadge";

interface SkillCategoryRowProps {
    category: string;
    tools: string[];
}

export function SkillCategoryRow({ category, tools }: SkillCategoryRowProps) {
    return (
        <div className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 border-b border-gray-50 py-10 last:border-b-0 px-4 md:px-0">
            <div className="flex items-start md:pt-1">
                <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-200 group-hover:bg-[#E15A3E] transition-colors shadow-inner" />
                    <span className="text-[11px] font-[1000] uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-900 transition-colors">
                        {category}
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-6">
                {tools.map((tool, index) => (
                    <div
                        key={tool}
                        className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <SkillBadge name={tool} />
                    </div>
                ))}
            </div>
        </div>
    );
}