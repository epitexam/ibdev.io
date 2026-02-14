export interface ExperienceItem {
    id: string;
    company: string;
    role: string;
    period: string;
    location?: string;
    logo?: string;
    responsibilities: string[];
    technologies?: string[];
}

export interface ExperienceData {
    items: ExperienceItem[];
}