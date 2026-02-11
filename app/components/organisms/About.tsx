import { ChevronRight } from "lucide-react";
import { Button } from "../atoms/Button";
import { Illustration } from "../atoms/Illustrastion";
import { AboutText } from "../molecules/AboutText";

const ABOUT_PARAGRAPHS = [
  "I'm a full-stack developer who writes code that doesn't just run; it solves problems. From Vue and React on the front to Rails and Python on the back, I've worked across the stack to ship solid, user-friendly stuff.",
  "I like building things that scale, make sense, and don't break under pressure (most of the time). Complex challenges? Bring 'em on — I turn chaos into clean, working solutions.",
];

export function About() {
  return (
    <section id="about" className="bg-[#FAFAF9] border-y border-gray-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 lg:px-12">

        <div className="relative group flex justify-center md:justify-end">
          <div className="relative z-10 overflow-hidden rounded-3xl border-2 border-gray-900 bg-white p-4 shadow-[12px_12px_0_0_#1A1A1A] transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
            <Illustration width={340} height={300} />
          </div>
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border-2 border-dashed border-gray-300 -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
        </div>

        <div className="flex flex-col items-start">
          <div className="mb-6">
            <h2 className="text-4xl font-black tracking-tighter text-gray-900 md:text-5xl">
              A Bit About Me
              <span className="block text-xl font-bold text-gray-400 mt-1">(& My Code)</span>
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {ABOUT_PARAGRAPHS.map((text, index) => (
              <p key={index} className="text-lg leading-relaxed text-gray-600 font-medium">
                {text}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <Button
              href="#contact"
              variant="outline"
              className="group pr-4 pl-8"
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