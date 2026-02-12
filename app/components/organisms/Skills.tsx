import { SKILLS_DATA } from "~/data/skills";
import { SectionTitle } from "../atoms/SectionTitle";
import { SkillCategoryRow } from "../molecules/SkillCategoryRow";
import { StatusBadge } from "../atoms/StatusBadge";

export function Skills() {
    return (
        <section id="skills" className="relative">
            <div className="mx-auto max-w-5xl px-5 py-20">

                {/* Header de section élégant */}
                <div className="mb-16 flex flex-col items-center text-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E15A3E] mb-4">
                        // Stack_Capabilities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
                        Technical Stack
                    </h2>
                    <StatusBadge label="v1.0.26 Production Ready" color="blue"/>
                </div>

                {/* La "Data Sheet" 3D */}
                <div className="
                    relative overflow-hidden rounded-2xl border-t border-white/20 bg-white
                    /* Ombre verticale massive pour la cohérence */
                    shadow-[0_16px_0_0_#1A1A1A]
                ">
                    {/* Header interne technique */}
                    <div className="hidden md:grid grid-cols-[200px_1fr] gap-8 border-b border-gray-100 bg-gray-50/50 px-8 py-5">
                        <div className="text-[10px] font-[1000] uppercase tracking-[0.2em] text-gray-400">
                            System / Category
                        </div>
                        <div className="text-[10px] font-[1000] uppercase tracking-[0.2em] text-gray-400">
                            Available_Tools.log
                        </div>
                    </div>

                    {/* Lignes de compétences */}
                    <div className="px-8 bg-white">
                        {SKILLS_DATA.categories.map((cat) => (
                            <SkillCategoryRow
                                key={cat.category}
                                category={cat.category}
                                tools={cat.tools}
                            />
                        ))}
                    </div>

                    {/* Footer de la fiche (Style Blueprint) */}
                    <div className="bg-gray-50/80 px-8 py-3 border-t border-gray-100 flex justify-between items-center italic">
                        <div className="text-[9px] font-mono text-gray-400 uppercase tracking-tight">
                            Status: Integrated_Core // User: Jeremy
                        </div>
                        <div className="flex gap-1.5">
                            <div className="h-1.5 w-1.5 rounded-sm bg-[#E15A3E]/20" />
                            <div className="h-1.5 w-1.5 rounded-sm bg-[#E15A3E]/40" />
                            <div className="h-1.5 w-1.5 rounded-sm bg-[#E15A3E]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}