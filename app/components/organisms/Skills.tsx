import { SKILLS_DATA } from "~/data/skills";
import { SkillCategoryRow } from "../molecules/SkillCategoryRow";
import { StatusBadge } from "../atoms/StatusBadge";

export function Skills() {
    return (
        <section id="skills" className="relative ">
            <div className="mx-auto max-w-5xl px-6 py-32">

                <div className="mb-20 flex flex-col items-center text-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E15A3E] mb-4">
                        // Capabilities_Manifest
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-gray-950">
                        Technical Stack
                    </h2>
                </div>

                <div className="
                    relative overflow-hidden rounded-4xl border border-gray-200/50 bg-white
                    /* Ombre de la carte plus sombre pour bien la détacher du fond de page */
                    shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1),0_12px_0_0_#F3F4F6]
                ">
                    <div className="hidden md:grid grid-cols-[200px_1fr] gap-8 border-b border-gray-100 bg-gray-50 px-10 py-5">
                        <div className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
                            Module_Class
                        </div>
                        <div className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
                            Active_Dependencies
                        </div>
                    </div>

                    <div className="px-10 bg-white">
                        {SKILLS_DATA.categories.map((cat) => (
                            <SkillCategoryRow
                                key={cat.category}
                                category={cat.category}
                                tools={cat.tools}
                            />
                        ))}
                    </div>

                    <div className="bg-[#fafafa] px-10 py-5 border-t border-gray-50 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <StatusBadge label="v1.0.26_Stable" color="blue" className="scale-90 shadow-none border-none py-0.5" />
                            <div className="h-px w-8 bg-gray-200" />
                            <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                                Kernel: React_Node_TS
                            </span>
                        </div>

                        <div className="flex gap-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-1 w-4 rounded-full bg-gray-100 group-hover:bg-[#E15A3E]/20 transition-colors" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}