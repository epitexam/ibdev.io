import { Badge } from "../atoms/Badge";

interface HeroTextProps {
    name: string;
    title: string;
    subtitle: string;
}


export function HeroText({ name, title, subtitle }: HeroTextProps) {
    return (
        <div className="flex flex-col items-center text-center">

            <div className="mb-8 group cursor-default">
                <div className="relative inline-flex items-center gap-2 rounded-full bg-white/40 px-4 py-1.5 text-sm font-semibold text-gray-800 border border-white/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:bg-white/60 hover:shadow-orange-200/50 hover:shadow-md">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    <span>Salut ! C'est <span className="text-orange-600">{name}</span></span>
                </div>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-transparent bg-clip-text bg-linear-to-br from-gray-900 via-gray-800 to-gray-500 sm:text-7xl lg:text-8xl">
                {title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600/90 md:text-xl font-light">
                {subtitle.split('. ').map((sentence, i) => (
                    <span key={i} className="block sm:inline">
                        {sentence}.
                    </span>
                ))}
            </p>
        </div>
    );
}