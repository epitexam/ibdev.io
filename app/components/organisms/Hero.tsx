import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";
import { StatusBadge } from "../atoms/StatusBadge";
import { HeroContacts } from "../molecules/HeroContacts";
import { HeroText } from "../molecules/HeroText";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center px-4 sm:px-6 pt-16 pb-16 md:pt-32 md:pb-32 text-center overflow-hidden"
        >
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[16px_16px] md:bg-size-[24px_24px]" />

            <div className="relative z-10 mb-8 md:mb-12 group">
                <div className="relative inline-block">
                    <Avatar
                        size={100}
                        className="
                            md:w-35! md:h-35! /* Redimensionnement desktop */
                            shadow-[0_8px_0_0_#F3F4F6,0_20px_30px_-10px_rgba(0,0,0,0.1)] 
                            md:shadow-[0_15px_0_0_#F3F4F6,0_30px_50px_-15px_rgba(0,0,0,0.1)] 
                            transition-transform duration-300 group-hover:-translate-y-1
                        "
                    />

                    <div className="absolute -bottom-1 -right-4 md:-right-8 scale-75 md:scale-90">
                        <StatusBadge
                            label="System_Live"
                            color="green"
                            className="border-2 border-white shadow-md"
                        />
                    </div>
                </div>
            </div>

            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-4 md:gap-6">
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="h-0.5 w-4 md:h-1 md:w-6 bg-[#E15A3E] rounded-full" />
                    <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-gray-400">
                        // initialize_core_identity
                    </span>
                    <div className="h-0.5 w-1.5 md:h-1 md:w-2 bg-gray-200 rounded-full" />
                </div>

                <HeroText
                    name="Jérémy"
                    title="I Build Full-Stack Stuff That Actually Works!"
                    subtitle="Code, bugs, and late-night coffee keep it all running. I turn complex problems into clean, working solutions."
                />
            </div>

            <div className="relative z-10 mt-10 md:mt-14 flex flex-col items-center gap-8 md:gap-10 w-full">
                <div className="w-full sm:w-auto px-4">
                    <Button
                        href="#contact"
                        variant="accent"
                        showChevron={true}
                        className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 text-xs md:text-sm"
                    >
                        INITIALIZE CONTACT
                    </Button>
                </div>

                <div className="flex items-center gap-4 w-full max-w-70 md:max-w-md">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent to-gray-200" />
                    <span className="text-[8px] md:text-[9px] font-black text-gray-300 uppercase tracking-widest whitespace-nowrap">
                        OR_CONNECT
                    </span>
                    <div className="h-px flex-1 bg-linear-to-l from-transparent to-gray-200" />
                </div>

                <div className="w-full max-w-full overflow-hidden px-2">
                    <HeroContacts email="mamun@example.com" />
                </div>
            </div>

            <div className="hidden xl:flex absolute bottom-10 left-10 opacity-20 font-mono text-[9px] text-gray-400 flex-col gap-1">
                <span>LAT: 48.8566</span>
                <span>LONG: 2.3522</span>
            </div>
            <div className="hidden xl:flex absolute bottom-10 right-10 opacity-20 text-right font-mono text-[9px] text-gray-400 flex-col gap-1">
                <span>BUILD: STABLE_2.0</span>
                <span>ENGINE: BLK_3D</span>
            </div>
        </section>
    );
}