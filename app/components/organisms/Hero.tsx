import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";
import { HeroContacts } from "../molecules/HeroContacts";
import { HeroText } from "../molecules/HeroText";


/**
 * Hero organism — assembles:
 *   Avatar → HeroText → Button CTA → HeroContacts
 *
 * Toutes les données sont centralisées ici pour les retrouver facilement.
 * À terme, elles pourront venir d'un fichier de config ou d'une API.
 */
/**
 * Hero organism — Corrigé pour un espacement plus compact et maîtrisé.
 */
export function Hero() {
    return (
        <section
            id="hero"
            // Suppression du min-h-screen forcé pour éviter l'étirement excessif
            // On utilise un padding top important (pt-32) pour laisser la Navbar respirer
            className="relative flex flex-col items-center px-4 pt-32 pb-16 text-center bg-amber-700"
        >
            {/* Avatar - Un peu d'espace en dessous */}
            <div className="mb-6">
                <Avatar size={120} />
            </div>

            {/* Texte - On utilise une div pour grouper et réduire le gap interne */}
            <div className="max-w-3xl space-y-4">
                <HeroText
                    name="Jérémy"
                    title="I Build Full-Stack Stuff That Actually Works!"
                    subtitle="Code, bugs, and late-night coffee keep it all running. I turn complex problems into clean, working solutions."
                />
            </div>

            {/* Groupe CTA + Contacts - Rapprochés pour montrer leur lien logique */}
            <div className="mt-8 flex flex-col items-center gap-4">
                <Button href="#contact" variant="primary" className="px-8 shadow-lg">
                    Contact me →
                </Button>
                
                {/* On réduit la marge ici pour que HeroContacts soit discret sous le bouton */}
                <HeroContacts email="mamun@example.com" />
            </div>
        </section>
    );
}