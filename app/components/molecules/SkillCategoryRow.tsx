import { SkillBadge } from "../atoms/SkillBadge";


interface SkillCategoryRowProps {
    category: string;
    tools: string[];
}

/**
 * Une ligne du tableau Skills : catégorie (gauche) + badges de technologies (droite).
 *
 * Respecte SOLID :
 * - S : affiche uniquement une ligne catégorie/tools
 * - O : si on veut ajouter des icônes plus tard, on ajoute une prop sans casser l'existant
 * - L : comportement prévisible (reçoit category + tools, les affiche)
 * - I : interface focalisée (category + tools, pas de props inutiles)
 * - D : dépend de l'abstraction SkillBadge, pas de détails d'implémentation
 */
export function SkillCategoryRow({ category, tools }: SkillCategoryRowProps) {
    return (
        <div className="grid grid-cols-[140px_1fr] gap-6 border-b border-gray-100 py-5 last:border-b-0">
            {/* Colonne Category */}
            <div className="text-sm font-semibold text-gray-500">{category}</div>

            {/* Colonne Tools & Tech */}
            <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                    <SkillBadge key={tool} name={tool} />
                ))}
            </div>
        </div>
    );
}