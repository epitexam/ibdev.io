import { Badge } from "../atoms/Badge";

interface HeroTextProps {
    name: string;
    title: string;
    subtitle: string;
}

export function HeroText({ name, title, subtitle }: HeroTextProps) {
    return (
        <div className="flex flex-col items-center text-center">

            <div className="animate-fade-in-up">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/40 px-4 py-1.5 border border-white/60 backdrop-blur-md animate-float">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-700">
                        Salut ! C'est <span className="text-[#E15A3E]">{name}</span>
                    </span>
                </div>
            </div>


            <h1 className="max-w-4xl animate-text-reveal text-4xl font-[1000] leading-[1.1] tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-gray-950 to-gray-600 sm:text-6xl lg:text-8xl delay-100">
                {title}
            </h1>


            <p className="mt-8 max-w-2xl animate-fade-in-up delay-300 text-base leading-relaxed text-gray-600 md:text-xl font-medium antialiased">
                {subtitle}
            </p>
        </div>
    );
}