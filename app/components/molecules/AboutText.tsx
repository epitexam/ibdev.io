import { SectionTitle } from "../atoms/SectionTitle";

interface AboutTextProps {
  paragraphs: string[];
}

/**
 * Bloc textuel de la section About :
 * titre + sous-titre italique + paragraphes de prose.
 */
export function AboutText({ paragraphs }: AboutTextProps) {
  return (
    <div className="flex flex-col gap-5">
      <SectionTitle title="A Bit About Me" subtitle="(& My Code)" />

      <div className="flex flex-col gap-4">
        {paragraphs.map((text, i) => (
          <p
            key={i}
            className="max-w-prose text-[15px] leading-[1.75] text-gray-500"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}