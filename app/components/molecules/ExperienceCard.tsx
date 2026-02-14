import type { ExperienceItem } from "~/types/experiences";
import { ExperienceHeader } from "./ExperienceHeader";
import { ResponsibilityList } from "./ResponsibilityList";
import { TechStack } from "./TechStack";

interface ExperienceCardProps {
    experience: ExperienceItem;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <div className="
            group relative flex flex-col gap-6 rounded-[2rem] 
            border-2 border-gray-100 bg-white p-6 md:p-8 
            shadow-[0_8px_0_0_#F3F4F6] transition-all duration-300
            hover:-translate-y-1 hover:shadow-[0_12px_0_0_#F3F4F6]
        ">
            {/* Indicateur de statut visuel */}
            <div className="absolute top-8 right-8 h-2 w-2 rounded-full bg-[#E15A3E] opacity-20 group-hover:opacity-100 transition-opacity" />

            <ExperienceHeader
                period={experience.period}
                company={experience.company}
                role={experience.role}
                logo={experience.logo}
                location={experience.location}
            />

            <div className="flex flex-col gap-6">
                <ResponsibilityList items={experience.responsibilities} />

                {experience.technologies && experience.technologies.length > 0 && (
                    <TechStack technologies={experience.technologies} />
                )}
            </div>
        </div>
    );
}