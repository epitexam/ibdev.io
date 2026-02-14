import { SkillBadge } from "../atoms/SkillBadge";

interface TechStackProps {
    technologies: string[];
}

export function TechStack({ technologies }: TechStackProps) {
    if (technologies.length === 0) return null;

    return (
        <div className="pt-6 border-t-2 border-dashed border-gray-100">
            <div className="flex flex-col gap-3">
                <span className="text-[9px] font-black text-gray-300 uppercase tracking-[0.2em]">
                    // stack_deployment
                </span>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <SkillBadge key={tech} name={tech} />
                    ))}
                </div>
            </div>
        </div>
    );
}