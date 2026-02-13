import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { ContactInfo } from "~/types/contact";

interface ContactIntroProps {
    info: ContactInfo;
}

export function ContactIntro({ info }: ContactIntroProps) {
    return (
        <div className="flex flex-col gap-6 md:gap-8 p-1">
            <div className="flex flex-col gap-2 md:gap-3">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#E15A3E]">
                    // node_info_v2
                </span>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-[1000] tracking-tighter text-gray-950 uppercase leading-[1.1] md:leading-none wrap-break-word">
                    Let's Work Together
                </h3>

                <p className="text-sm md:text-base font-medium leading-relaxed text-gray-500 max-w-sm wrap-break-word">
                    Have a project in mind? I turn complex problems into clean, working solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                {[
                    { label: "Email", value: info.email, icon: Mail, href: `mailto:${info.email}` },
                    { label: "Phone", value: info.phone, icon: Phone, href: info.phone ? `tel:${info.phone}` : null },
                    { label: "Location", value: info.location, icon: MapPin },
                    { label: "Status", value: info.availability, icon: Clock },
                ].map((item, i) => (
                    item.value && (
                        <div key={i} className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-gray-50/50 border border-gray-100 transition-all hover:bg-white hover:shadow-md overflow-hidden min-w-0">


                            <div className="flex h-9 w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-100 shadow-sm text-gray-400 group-hover:text-[#E15A3E] transition-colors">
                                <item.icon strokeWidth={2.5} className="w-4 h-4 md:w-5 md:h-5" />
                            </div>

                            <div className="flex flex-col min-w-0 flex-1">
                                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5">
                                    {item.label}
                                </span>

                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="text-xs md:text-sm font-bold text-gray-700 hover:text-[#E15A3E] transition-colors truncate block"
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <span className="text-xs md:text-sm font-bold text-gray-700 truncate block">
                                        {item.value}
                                    </span>
                                )}
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}