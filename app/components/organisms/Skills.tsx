import { SKILLS_DATA } from "~/data/skills";
import { SectionTitle } from "../atoms/SectionTitle";
import { SkillCategoryRow } from "../molecules/SkillCategoryRow";
import { Logo } from "../atoms/Logo";

/**
 * Skills Organism — Style "Technical Data Sheet"
 * - Conteneur avec ombre portée solide (cohérence 3D)
 * - Header contrasté et typographie robuste
 */
export function Skills() {
    return (
        <section id="skills" className="relative">
            <div className="mx-auto max-w-4xl px-6 py-24">

                <div className="mb-16 flex flex-col items-center gap-2">
                    <SectionTitle title="Technical Stack" align="center" />
                    <Logo text={"Engineering & Tools"} />
                </div>

                <div className="relative overflow-hidden rounded-2xl border-2 border-gray-900 bg-white shadow-[12px_12px_0_0_#1A1A1A]">

                    <div className="hidden md:grid grid-cols-[200px_1fr] gap-8 border-b-2 border-gray-900 bg-gray-50 px-8 py-4">
                        <div className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">
                            Category Label
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">
                            Technologies / Ecosystem
                        </div>
                    </div>

                    <div className="divide-y divide-gray-100 px-8">
                        {SKILLS_DATA.categories.map((cat, index) => (
                            <SkillCategoryRow
                                key={cat.category}
                                category={cat.category}
                                tools={cat.tools}
                            />
                        ))}
                    </div>

                    <div className="bg-gray-50 px-8 py-2 border-t border-gray-100 flex justify-between items-center">
                        <div className="text-[9px] font-mono text-gray-300 uppercase">
                            Build: v1.0.26 // JEREMY_STK
                        </div>
                        <div className="flex gap-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-200" />
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-200" />
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-200" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}