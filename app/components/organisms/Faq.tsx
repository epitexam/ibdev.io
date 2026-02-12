import { FAQ_DATA } from "~/data/faq";
import { FAQItem } from "../molecules/FaqItem";
import { FAQIntro } from "../molecules/FaqIntro";
import { SectionTitle } from "../atoms/SectionTitle";

export function FAQ() {
    return (
        <section id="faq" className="">
            <div className="mx-auto max-w-6xl px-5 py-20 md:py-30">

                <div className="mb-16 flex flex-col items-center text-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E15A3E] mb-4">
                        // knowledge_base
                    </span>
                    <SectionTitle title="Common Queries" align="center" />
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-[300px_1fr] md:gap-16 items-start">


                    <aside className="md:sticky md:top-24">
                        <div className="
                            rounded-2xl border-t bg-white p-8
                                                                             
                            shadow-[0_8px_0_0_#1A1A1A08] border border-gray-100/50
                        ">
                            <FAQIntro />
                        </div>

                        <div className="mt-6 hidden md:block px-2">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[12px] font-bold uppercase tracking-widest text-gray-400">
                                    Support_Agent: Online
                                </span>
                            </div>
                            <p className="text-[10px]  font-medium leading-tight uppercase">
                                Response time: &lt; 24h // Average_Sync: 98%
                            </p>
                        </div>
                    </aside>


                    <div className="flex flex-col gap-5">
                        {FAQ_DATA.items.map((item, index) => (
                            <div
                                key={item.id}
                                className="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <FAQItem
                                    number={index + 1}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}