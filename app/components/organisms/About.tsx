import { Button } from "../atoms/Button";
import { Illustration } from "../atoms/Illustrastion";
import { StatusBadge } from "../atoms/StatusBadge";

const ABOUT_PARAGRAPHS = [
  "I'm a full-stack developer who writes code that doesn't just run; it solves problems.",
  "I like building things that scale, make sense, and don't break under pressure.",
];

export function About() {
  return (
    <section
      id="about"
      className="relative border-y border-gray-900/10 bg-white/5 backdrop-blur-sm overflow-hidden"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 py-20 md:grid-cols-2 lg:px-12">

        {/* Colonne Gauche : Illustration 3D Blocky */}
        <div className="relative group flex justify-center md:justify-end order-2 md:order-1">
          <div className="absolute -top-4 z-20 md:right-4">
            <StatusBadge label="Live_System" color="green" />
          </div>

          <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-gray-900 bg-white p-6 shadow-[12px_12px_0_0_#1A1A1A] transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
            <Illustration width={320} height={280} />
          </div>
        </div>

        {/* Colonne Droite : Contenu Texte */}
        <div className="flex flex-col items-start order-1 md:order-2">

          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E15A3E]">
              01 // Background
            </span>
            <div className="h-px w-12 bg-gray-200" />
          </div>

          <h2 className="text-4xl font-black tracking-tighter text-gray-950 md:text-5xl uppercase leading-[0.9]">
            A propos
            <span className="not-italic text-lg font-bold block text-gray-400 tracking-tight mt-3 lowercase">
              Building scalable solutions with an engineering mindset.
            </span>
          </h2>

          <div className="mt-10 space-y-6">
            {ABOUT_PARAGRAPHS.map((text, i) => (
              <p key={i} className="text-lg leading-relaxed text-gray-600 font-medium max-w-lg border-l-2 border-gray-100 pl-6 hover:border-[#E15A3E] transition-colors duration-300">
                {text}
              </p>
            ))}
          </div>

          <div className="mt-12">
            <Button
              href="#contact"
              variant="accent"
              showChevron={true}
            >
              Get in touch
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}