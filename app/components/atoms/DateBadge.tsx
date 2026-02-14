import { Calendar } from "lucide-react";

interface DateBadgeProps {
    period: string;
    className?: string;
}


export function DateBadge({ period, className = "" }: DateBadgeProps) {
    return (
        <div
            className={`
                inline-flex items-center gap-2 
                rounded-md bg-[#F8F9FA] border-2 border-gray-100 
                px-3 py-1.5
                text-[9px] md:text-[10px] font-black font-mono uppercase tracking-widest text-gray-500
                shadow-[0_3px_0_0_#F3F4F6] transition-all
                hover:shadow-[0_1px_0_0_#F3F4F6] hover:translate-y-0.5
                ${className}
            `}
        >
            <Calendar size={12} strokeWidth={3} className="text-[#E15A3E] animate-pulse" />
            <span className="leading-none">{period}</span>
        </div>
    );
}