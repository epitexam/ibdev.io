import { useState } from "react";
import { AccordionToggle } from "../atoms/AccordionToggle";

interface FAQItemProps {
  number: number;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FAQItem({ number, question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`
        overflow-hidden rounded-xl border-t border-white/50 bg-white transition-all duration-200
        /* Profondeur 3D verticale constante (grise pour l'élégance) */
        ${isOpen
          ? "shadow-[0_2px_0_0_#E15A3E] translate-y-0.5"
          : "shadow-[0_6px_0_0_#1A1A1A10] border-x border-gray-100"
        }
      `}
    >
      <div
        className="flex cursor-pointer items-center gap-4 px-6 py-5 select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-mono text-xs font-black text-[#E15A3E]/40">
          {number.toString().padStart(2, '0')}
        </span>

        <p className="flex-1 text-sm font-[1000] uppercase tracking-tight text-gray-950">
          {question}
        </p>

        <AccordionToggle
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
        />
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className="mx-6 mb-6 mt-1 rounded-lg bg-gray-50 p-4 border-l-2 border-[#E15A3E]">
            <p className="text-sm leading-relaxed text-gray-600 font-medium italic">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}