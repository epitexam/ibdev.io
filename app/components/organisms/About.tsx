import { ChevronRight } from "lucide-react";
import { Button } from "../atoms/Button";
import { Illustration } from "../atoms/Illustrastion";
import { AboutText } from "../molecules/AboutText";


const ABOUT_PARAGRAPHS = [
  "I'm a full-stack developer who writes code that doesn't just run; it solves problems. From Vue and React on the front to Rails and Python on the back, I've worked across the stack to ship solid, user-friendly stuff.",
  "I like building things that scale, make sense, and don't break under pressure (most of the time). Complex challenges? Bring 'em on — I turn chaos into clean, working solutions.",
];

/**
 * About organism.
 *
 * Layout :
 *   [Illustration]  |  [Titre + texte + CTA]
 *
 * - Fond blanc cassé (#FAFAF9) pour contraster doucement avec la Hero
 * - Deux colonnes sur md+, empilé sur mobile
 * - L'illustration prend 40% de la largeur sur desktop
 */
export function About() {
  return (
    <section id="about" className="bg-[#FAFAF9]">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-[2fr_3fr] md:gap-16 lg:px-8">

        <div className="flex items-center justify-center">
          <Illustration width={300} height={280} />
        </div>

        <div className="flex flex-col items-start gap-8">
          <AboutText paragraphs={ABOUT_PARAGRAPHS} />

          <Button href="#contact" variant="outline" className="px-8 shadow-lg">
            Contact me <ChevronRight/>
          </Button>
        </div>

      </div>
    </section>
  );
}