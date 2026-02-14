import { EXPERIENCE_DATA } from "~/data/experiences";
import { SectionTitle } from "../atoms/SectionTitle";
import { ExperienceCard } from "../molecules/ExperienceCard";

export function Experience() {
    return (
        <section id="experience" className="relative bg-[#F8F9FA] py-20 md:py-32 overflow-hidden">
            <div className="absolute left-0 top-1/4 h-64 w-px bg-linear-to-b from-transparent via-[#E15A3E]/10 to-transparent" />

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 md:mb-24 flex flex-col items-center gap-3">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                            // archive_logs_v1
                        </span>
                    </div>
                    <SectionTitle title="Where I've Worked" align="center" />
                </div>

                <div className="flex flex-col gap-8 md:gap-12">
                    {EXPERIENCE_DATA.items.map((experience, index) => (
                        <div
                            key={experience.id}
                            className="relative"
                        >
                            <div className="hidden lg:block absolute -left-16 top-8 text-[10px] font-mono font-bold text-gray-300 rotate-90 origin-left">
                                REF_00{index + 1}
                            </div>

                            <ExperienceCard experience={experience} />
                        </div>
                    ))}
                </div>
                <div className="mt-16 flex justify-center">
                    <div className="h-1 w-12 rounded-full bg-gray-200" />
                </div>
            </div>
        </section>
    );
}