import { Mail, Linkedin, Github } from "lucide-react";
import { Avatar } from "../atoms/Avatar";

export function FAQIntro() {
    const buttonBase = `
        relative flex items-center justify-center gap-2 rounded-xl 
        bg-gradient-to-b from-white to-[#F9FAFB]
        border-t border-white ring-1 ring-gray-200/50
        transition-all duration-150 ease-out
        /* Ombre 3D Blocky + Ombre de portée */
        shadow-[0_6px_0_0_#E2E8F0,0_12px_20px_-5px_rgba(0,0,0,0.08)]
        
        hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#E2E8F0,0_8px_15px_-5px_rgba(0,0,0,0.06)]
        active:translate-y-[6px] active:shadow-none
    `;

    return (
        <div className="flex flex-col items-center gap-8 text-center h-fit shrink-0 py-4 bg-white">
            <div className="relative">

                <Avatar
                    size={84}
                    className="shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_0_0_#F3F4F6]"
                />
            </div>

            <div className="space-y-3">
                <h3 className="text-xl font-[1000] uppercase tracking-tighter text-gray-950">
                    Got a question?
                </h3>
                <p className="text-[13px] font-bold leading-relaxed text-gray-400 max-w-55">
                    I'm just a message away. <br />
                    Let's build something together.
                </p>
            </div>

            <div className="flex flex-col w-full gap-5">

                <a
                    href="mailto:jeremy@example.com"
                    className={`${buttonBase} px-4 py-4 text-[11px] font-[1000] uppercase tracking-widest text-gray-800`}
                >
                    <Mail size={16} strokeWidth={3} className="text-[#E15A3E]" />
                    <span>Send Email</span>

                    <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/80 to-transparent rounded-t-xl" />
                </a>
                <div className="grid grid-cols-2 gap-4">
                    <a
                        href="https://linkedin.com/in/jeremy-bah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${buttonBase} p-4 text-[10px] font-black uppercase text-gray-500 hover:text-[#0077B5]`}
                    >
                        <Linkedin size={16} strokeWidth={3} />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/epitexam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${buttonBase} p-4 text-[10px] font-black uppercase text-gray-500 hover:text-gray-950`}
                    >
                        <Github size={16} strokeWidth={3} />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>

            {/* Détail technique de status */}
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 shadow-inner">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-gray-400">
                    Response: Opti_24h
                </span>
            </div>
        </div>
    );
}