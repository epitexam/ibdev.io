import { CONTACT_INFO, SOCIAL_LINKS } from "~/data/contact";
import { SectionTitle } from "../atoms/SectionTitle";
import { ContactIntro } from "../molecules/ContactIntro";
import { SocialLinks } from "../molecules/SocialLinks";
import { ContactForm } from "../molecules/ContactForm";

export function Contact() {
    return (
        <section id="contact" className="relative bg-[#F8F9FA] py-16 md:py-32 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 md:mb-20 flex flex-col items-center gap-3 text-center">
                    <div className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-[#E15A3E]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                            // communication_module_v3
                        </span>
                        <div className="h-1 w-1 rounded-full bg-[#E15A3E]" />
                    </div>
                    <SectionTitle title="Get In Touch" align="center" />
                </div>


                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[360px_1fr] lg:gap-12 items-start">

                    <div className="flex flex-col gap-8 order-2 lg:order-1">

                        <div className="rounded-4xl bg-[#E2E8F0]/40 border border-white/60 p-6 md:p-8 shadow-inner transition-all">
                            <ContactIntro info={CONTACT_INFO} />
                        </div>

                        <div className="flex flex-col gap-4 px-2">
                            <div className="flex items-center gap-4">
                                <h4 className="text-[10px] font-[1000] uppercase tracking-widest text-gray-400 whitespace-nowrap">
                                    External_Links
                                </h4>
                                <div className="h-px w-full bg-gray-200" />
                            </div>
                            <SocialLinks links={SOCIAL_LINKS} />
                        </div>
                    </div>

                    <div className="
                        order-1 lg:order-2
                        relative rounded-4xl md:rounded-[2.5rem] bg-white 
                        p-6 sm:p-8 md:p-12 
                        /* Look Blocky 3D : Bordure supérieure épaisse + ombre solide */
                        border-t-8 border-white
                        shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1),0_12px_0_0_#CBD5E1]
                    ">

                        <div className="hidden sm:block absolute top-6 right-6 h-1.5 w-1.5 rounded-full bg-gray-100 shadow-inner" />
                        <div className="hidden sm:block absolute bottom-6 left-6 h-1.5 w-1.5 rounded-full bg-gray-100 shadow-inner" />

                        <div className="relative z-10">
                            <ContactForm />
                        </div>

                        <div className="mt-8 flex justify-end">
                            <span className="text-[9px] font-mono text-gray-300 uppercase tracking-widest">
                                form_status: awaiting_input
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}