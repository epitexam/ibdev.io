import { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label 
        htmlFor={props.id} 
        className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1"
      >
        {label}
        {props.required && <span className="ml-1 text-[#E15A3E]">*</span>}
      </label>
      
      <div className="relative group">
        <input
          {...props}
          className={`
            w-full rounded-xl border-2 bg-white px-4 py-3 
            text-sm font-bold text-gray-800 transition-all 
            placeholder:text-gray-300 placeholder:font-medium
            /* Look Blocky : Bordure + Ombre solide */
            border-gray-100 shadow-[0_4px_0_0_#F3F4F6]
            
            /* Focus State : On change la couleur de l'ombre et de la bordure */
            focus:outline-none focus:border-[#E15A3E]/30 focus:shadow-[0_4px_0_0_#E15A3E]/20
            focus:translate-y-px
            
            ${error ? "border-red-200 shadow-red-50" : ""} 
            ${className}
          `}
        />
        
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-[#E15A3E] rounded-r-full opacity-0 group-focus-within:opacity-100 transition-opacity" />
      </div>

      {error && <span className="text-[10px] font-bold text-red-500 uppercase tracking-tight ml-1">{error}</span>}
    </div>
  );
}