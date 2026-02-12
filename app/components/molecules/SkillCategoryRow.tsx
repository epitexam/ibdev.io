import { SkillBadge } from "../atoms/SkillBadge";

interface SkillCategoryRowProps {
    category: string;
    tools: string[];
}

export function SkillCategoryRow({ category, tools }: SkillCategoryRowProps) {
    return (
        <div className="group grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 border-b border-gray-200/60 py-6 last:border-b-0 transition-colors hover:bg-white/30">

            <div className="flex items-start">
                <div className="relative">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-[#E15A3E] transition-colors">
                        {category}
                    </span>

                    <div className="absolute -left-4 top-1/2 h-0 w-1 -translate-y-1/2 bg-[#E15A3E] transition-all group-hover:h-full" />
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
                {tools.map((tool, index) => (
                    <div
                        key={tool}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <SkillBadge
                            name={tool}
                            className="hover:scale-105 transition-transform"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}