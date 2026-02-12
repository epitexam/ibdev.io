import { ChevronRight } from "lucide-react";
import { Button } from "../atoms/Button";
import { Illustration } from "../atoms/Illustrastion";

const ABOUT_PARAGRAPHS = [
  "I'm a full-stack developer who writes code that doesn't just run; it solves problems.",
  "I like building things that scale, make sense, and don't break under pressure.",
];

export function About() {
  return (
    <section
      id="about"
      className="relative border-y border-gray-100 bg-[#FAFAF9]/40 backdrop-blur-[2px]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 lg:px-12">

        <div className="relative group flex justify-center md:justify-end">
          <div className="relative z-10 overflow-hidden rounded-3xl border-2 border-gray-900 bg-white p-4 shadow-[12px_12px_0_0_#1A1A1A] transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
            <Illustration width={340} height={300} />
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="text-4xl font-black tracking-tighter text-gray-950 md:text-5xl">
            A Bit About Me
            <span className="block mt-1 text-xl font-bold text-gray-400">
              (& My Code)
            </span>
          </h2>

          <div className="mt-6 flex flex-col gap-5">
            {ABOUT_PARAGRAPHS.map((text, i) => (
              <p key={i} className="text-lg leading-relaxed text-gray-700 font-medium">
                {text}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <Button
              href="#contact"
              variant="outline"
              className="group border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-[#FAFAF9]"
            >
              Contact me
              <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}