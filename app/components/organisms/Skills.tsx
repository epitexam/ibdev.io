import { SKILLS_DATA } from "~/data/skills";
import { SectionTitle } from "../atoms/SectionTitle";
import { SkillCategoryRow } from "../molecules/SkillCategoryRow";


/**
 * Skills organism — affiche le titre + tableau des compétences.
 *
 * Design :
 * - Fond blanc
 * - Tableau avec deux colonnes : Category | Tools & Tech
 * - Header du tableau en gris clair
 * - Lignes séparées par bordures subtiles
 *
 * Respecte SOLID :
 * - S : affiche uniquement la section Skills
 * - O : si on veut changer la source de données, on passe une prop `data`
 * - L : comportement prévisible
 * - I : pas de props pour l'instant (données hard-codées), évolutif si besoin
 * - D : dépend de SKILLS_DATA (abstraction), pas de logique métier interne
 */
export function Skills() {
    return (
        <section id="skills" className="bg-white">
            <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">

                {/* Titre centré */}
                <div className="mb-12 flex justify-center">
                    <SectionTitle title="My Skills & Stack" align="center" />
                </div>

                {/* Tableau */}
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">

                    {/* Header du tableau */}
                    <div className="grid grid-cols-[140px_1fr] gap-6 border-b border-gray-200 bg-gray-50 px-6 py-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                            Category
                        </div>
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                            Tools & Tech
                        </div>
                    </div>

                    {/* Body du tableau */}
                    <div className="px-6">
                        {SKILLS_DATA.categories.map((cat) => (
                            <SkillCategoryRow
                                key={cat.category}
                                category={cat.category}
                                tools={cat.tools}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}