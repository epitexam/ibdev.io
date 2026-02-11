import { Badge } from "../atoms/Badge";

interface HeroTextProps {
    name: string;
    title: string;
    subtitle: string;
}

export function HeroText({ name, title, subtitle }: HeroTextProps) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="mb-6 group cursor-default">
                <div className="relative inline-flex items-center gap-3 rounded-full bg-white/40 px-4 py-1.5 text-xs md:text-sm font-bold text-gray-700 border border-white/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-orange-200">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    <span className="tracking-wide uppercase">
                        Salut ! C'est <span className="text-[#E15A3E]">{name}</span>
                    </span>
                </div>
            </div>

            <h1 className="max-w-4xl text-4xl font-[1000] leading-[1.1] tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-gray-950 via-gray-800 to-gray-600 sm:text-6xl lg:text-8xl">
                {title}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-600 md:text-xl font-medium antialiased">
                {subtitle.split('. ').map((sentence, i, arr) => (
                    <span key={i} className="inline">
                        {sentence}
                        {i < arr.length - 1 ? '. ' : ''}
                    </span>
                ))}
            </p>
        </div>
    );
}