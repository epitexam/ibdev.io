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
        relative overflow-hidden transition-all duration-300 ease-out
        rounded-2xl bg-white border-t border-white
        /* Relief 3D adapté : Moins haut sur mobile pour la stabilité visuelle */
        ${isOpen
          ? "translate-y-1 shadow-[0_2px_0_0_#e5e7eb]"
          : "hover:-translate-y-1 shadow-[0_6px_0_0_#efefef,0_12px_20px_-8px_rgba(0,0,0,0.06)] md:shadow-[0_8px_0_0_#efefef,0_15px_25px_-10px_rgba(0,0,0,0.08)]"
        }
      `}
    >
      <div
        className="group flex cursor-pointer items-center gap-3 sm:gap-5 p-5 sm:p-6 select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Badge Numéro : Plus petit sur mobile */}
        <div className="
          flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center 
          rounded-lg bg-gray-50 text-[9px] sm:text-[10px] font-[1000] 
          text-gray-400 group-hover:text-[#E15A3E] transition-colors shadow-inner
        ">
          {number.toString().padStart(2, '0')}
        </div>

        {/* Question : Ajustement de la taille de font */}
        <p className="flex-1 text-sm sm:text-base font-bold tracking-tight text-gray-800 leading-tight">
          {question}
        </p>

        <AccordionToggle
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Collapse" : "Expand"}
        />
      </div>

      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className="mx-5 sm:mx-6 h-px bg-gray-50" />

          {/* Answer : Le padding gauche est fluide (pl-5 -> pl-18) */}
          <div className="px-5 py-5 sm:p-6 md:pl-19 lg:pl-19">
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-gray-500 font-medium">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}