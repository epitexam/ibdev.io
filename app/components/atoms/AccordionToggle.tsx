import { ChevronDown } from "lucide-react";

interface AccordionToggleProps {
    isOpen: boolean;
    onClick: () => void;
    "aria-label": string;
}

export function AccordionToggle({ isOpen, onClick, "aria-label": ariaLabel }: AccordionToggleProps) {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClick();
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label={ariaLabel}
            aria-expanded={isOpen}
            className={`
                flex h-8 w-8 shrink-0 items-center justify-center 
                rounded-md border-t border-white/20 
                transition-all duration-100 ease-in-out
                
                /* Style Off (Fermé) : Gris neutre */
                ${!isOpen ?
                    "bg-gray-100 text-gray-500 shadow-[0_3px_0_0_#D1D5DB]" :
                    "bg-[#E15A3E] text-white shadow-[0_3px_0_0_#b3432d]"
                }

                /* Interaction physique */
                hover:translate-y-px 
                ${!isOpen ? "hover:shadow-[0_2px_0_0_#D1D5DB]" : "hover:shadow-[0_2px_0_0_#b3432d]"}
                
                active:translate-y-0.75 active:shadow-none
                
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E15A3E]
            `}
        >
            <ChevronDown
                size={14}
                strokeWidth={3}
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                    }`}
            />
        </button>
    );
}