
import { MapPin } from "lucide-react";
import { DateBadge } from "../atoms/DateBadge";
import { CompanyLogo } from "../atoms/CompanyLogo";

interface ExperienceHeaderProps {
    company: string;
    role: string;
    period: string;
    location?: string;
    logo?: string;
}

export function ExperienceHeader({ company, role, period, location, logo }: ExperienceHeaderProps) {
    return (
        <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
            <CompanyLogo company={company} logo={logo} size={64} />

            <div className="flex flex-1 flex-col gap-2 min-w-0">
                <div className="flex flex-col">
                    <h3 className="text-xl md:text-2xl font-[1000] tracking-tighter text-gray-900 uppercase leading-tight wrap-break-word">
                        {role}
                    </h3>
                    <p className="text-sm font-black text-[#E15A3E] uppercase tracking-widest opacity-80">
                        {company}
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-1">
                    <DateBadge period={period} />
                    {location && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            <MapPin size={10} strokeWidth={3} className="text-gray-300" />
                            <span>{location}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}