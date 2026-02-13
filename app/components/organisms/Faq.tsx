import { FAQ_DATA } from "~/data/faq";
import { FAQItem } from "../molecules/FaqItem";
import { FAQIntro } from "../molecules/FaqIntro";

export function FAQ() {
    return (
        <section id="faq" className="relative overflow-hidden">
            <div className="mx-auto max-w-6xl px-6 py-32">

                <div className="mb-20 flex flex-col items-center text-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E15A3E] mb-4">
                        // System_Support
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
                        Let's Clear Things Up
                    </h2>
                </div>


                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
                    <aside className="lg:sticky lg:top-32 h-fit">
                        <div className="
                            rounded-2xl border-t bg-white p-8
                            /* Ombre verticale élégante (plus douce pour l'intro) */
                            shadow-[0_8px_0_0_#1A1A1A08] border border-gray-100/50
                        ">
                            <FAQIntro />
                        </div>

                        <div className="mt-4 hidden lg:flex items-center gap-2 px-2">
                            <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[9px] font-mono text-gray-400 uppercase tracking-tighter">
                                support_node: active
                            </span>
                        </div>
                    </aside>
                    <div className="flex flex-col gap-6 w-full">
                        {FAQ_DATA.items.map((item, index) => (
                            <div
                                key={item.id}
                                className="animate-in fade-in slide-in-from-right-4 fill-mode-both"
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