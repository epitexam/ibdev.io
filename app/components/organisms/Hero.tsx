import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";
import { StatusBadge } from "../atoms/StatusBadge";
import { HeroContacts } from "../molecules/HeroContacts";
import { HeroText } from "../molecules/HeroText";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center px-6 pt-25 pb-25 text-center min-h-[20vh]"
        >

            <div className="relative mb-10">
                <Avatar size={120} />

                <StatusBadge
                    label="Available"
                    color="green"
                    className="absolute -bottom-3 -right-6 scale-90"
                />
            </div>


            <div className="max-w-3xl flex flex-col items-center gap-6">

                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                    // Welcome to my core_system
                </span>

                <HeroText
                    name="Jérémy"
                    title="I Build Full-Stack Stuff That Actually Works!"
                    subtitle="Code, bugs, and late-night coffee keep it all running. I turn complex problems into clean, working solutions."
                />
            </div>


            <div className="mt-12 flex flex-col items-center gap-8 w-full">
                <Button
                    href="#contact"
                    variant="accent"
                    showChevron={true}
                    className="px-10 py-4"
                >
                    Contact me
                </Button>

                <div className="flex items-center gap-4 w-full max-w-50">
                    <div className="h-px w-full bg-gray-900/10" />
                    <span className="text-[10px] font-black text-gray-300">OR</span>
                    <div className="h-px w-full bg-gray-900/10" />
                </div>

                <HeroContacts email="mamun@example.com" />
            </div>
        </section>
    );
}