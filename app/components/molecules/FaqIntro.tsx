import { Mail, MessageCircle,  } from "lucide-react";
import { Avatar } from "../atoms/Avatar";
export function FAQIntro() {
    return (
        <div className="flex flex-col items-center gap-6 text-center h-fit shrink-0">
            <div className="relative">
                <Avatar size={80} />
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-[1000] uppercase tracking-tighter text-gray-950">
                    Got a question?
                </h3>
                <p className="text-sm font-medium leading-relaxed text-gray-500 max-w-60">
                    I'm just a message away. <br />
                    Let's solve some problems.
                </p>
            </div>

            <div className="flex flex-col w-full gap-3">
                <a
                    href="mailto:mamun@example.com"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white border-t border-gray-100 text-xs font-black uppercase text-gray-600 shadow-[0_3px_0_0_#D1D5DB] transition-all hover:translate-y-px hover:shadow-[0_2px_0_0_#D1D5DB] active:translate-y-0.75 active:shadow-none"
                >
                    <Mail size={14} strokeWidth={3} className="text-[#E15A3E]" />
                    <span>E-mail Me</span>
                </a>

                {/* <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white border-t border-gray-100 text-xs font-black uppercase text-green-600 shadow-[0_3px_0_0_#D1D5DB] transition-all hover:translate-y-px hover:shadow-[0_2px_0_0_#D1D5DB] active:translate-y-0.75 active:shadow-none"
                >
                    <MessageCircle size={14} strokeWidth={3} />
                    <span>WhatsApp</span>
                </a> */}
            </div>
        </div>
    );
}