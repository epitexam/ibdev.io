interface CompanyLogoProps {
    company: string;
    logo?: string;
    size?: number;
}

export function CompanyLogo({ company, logo, size = 48 }: CompanyLogoProps) {
    const getInitials = (name: string) => {
        return name.split(" ").map((word) => word[0]).join("").toUpperCase().slice(0, 2);
    };

    const initials = getInitials(company);
    const commonClass = `
        relative shrink-0 flex items-center justify-center 
        rounded-xl border-2 border-gray-100 bg-white
        shadow-[0_4px_0_0_#F3F4F6] transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_6px_0_0_#F3F4F6]
        group
    `;

    return (
        <div className={commonClass} style={{ width: size, height: size }}>
            {logo ? (
                <img
                    src={logo}
                    alt={`${company} logo`}
                    className="w-full h-full object-contain p-2 rounded-lg transition-transform group-hover:scale-110"
                />
            ) : (
                <span 
                    className="font-[1000] text-[#E15A3E] tracking-tighter"
                    style={{ fontSize: size * 0.35 }}
                >
                    {initials}
                </span>
            )}
            <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
        </div>
    );
}