import { ChevronRight } from "lucide-react";
import { Button } from "../atoms/Button";
import { Illustration } from "../atoms/Illustrastion";
// import { AboutText } from "../molecules/AboutText"; // Supprimé si inutilisé
import PixelSnow from "~/components/atoms/react-bits/PixelSnow";

const ABOUT_PARAGRAPHS = [
  "I'm a full-stack developer who writes code that doesn't just run; it solves problems.",
  "I like building things that scale, make sense, and don't break under pressure.",
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-gray-100"
    >
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <PixelSnow
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={500}
          speed={0.85}
          depthFade={6}
          farPlane={20}
          brightness={0.6}
          gamma={0.4545}
          density={0.75}
          variant="round"
          direction={75}
        />
      </div>

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-[#FAFAF9]/75 z-1" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 lg:px-12">

        {/* Illustration */}
        <div className="relative group flex justify-center md:justify-end">
          <div
            className="
              relative z-10
              overflow-hidden
              rounded-3xl
              border-2 border-gray-900
              bg-white/90
              backdrop-blur-sm
              p-4
              shadow-[12px_12px_0_0_#1A1A1A]
              transition-transform
              duration-300
              group-hover:-translate-x-1
              group-hover:-translate-y-1
            "
          >
            <Illustration width={340} height={300} />
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col items-start">

          {/* Title */}
          <h2 className="text-4xl font-black tracking-tighter text-gray-950 md:text-5xl">
            A Bit About Me
            <span className="block mt-1 text-xl font-bold text-gray-400">
              (& My Code)
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="mt-6 flex flex-col gap-5">
            {ABOUT_PARAGRAPHS.map((text, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-gray-700 font-medium"
              >
                {text}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Button
              href="#contact"
              variant="outline"
              className="
                group
                border-gray-900
                text-gray-900
                hover:bg-gray-900
                hover:text-[#FAFAF9]
              "
            >
              Contact me
              <ChevronRight
                size={18}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
