import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "../atoms/Logo";
import { useScrolled } from "~/hooks/useScrolled";
import { NavMenu } from "../molecules/Navmenu";
import { NAV_ITEMS, RESUME_URL } from "~/data/navItems";
import { Button } from "../atoms/Button";

/**
 * Navbar Organism corrigé pour correspondre à la maquette.
 * - Style "Floating Capsule"
 * - Responsive optimisé
 */
export function Navbar() {
    const scrolled = useScrolled();
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeMobile = () => setMobileOpen(false);

    return (

        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 px-4 py-4 md:px-8 ${scrolled ? "py-2" : "py-4"
                }`}
        >
            <div
                className={`mx-auto flex max-w-5xl items-center justify-between px-4 py-2 transition-all duration-300 
          ${/* L'effet capsule avec bordure fine */ ""}
          rounded-full border border-gray-100 bg-white/70 backdrop-blur-md shadow-sm
          ${scrolled ? "shadow-md" : "shadow-sm"}
        `}
            >

                <div className="pl-2">
                    <Logo text={"J.B"}/>
                </div>

                <nav className="hidden md:block">
                    <NavMenu
                        items={NAV_ITEMS}
                        className="flex items-center gap-8"
                    />
                </nav>


                <div className="hidden md:block pr-1">
                    <Button
                        href={RESUME_URL}
                        external
                        className="rounded-full px-6 py-2 text-sm font-semibold"
                    >
                        My resume
                    </Button>
                </div>


                <button
                    type="button"
                    onClick={() => setMobileOpen((prev) => !prev)}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 md:hidden"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <div
                id="mobile-menu"
                className={`mt-2 overflow-hidden rounded-3xl border border-gray-100 bg-white/95 shadow-xl backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden ${mobileOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col items-center gap-6 px-6 py-8">
                    <NavMenu
                        items={NAV_ITEMS}
                        onItemClick={closeMobile}
                        className="flex flex-col items-center gap-6"
                    />
                    <hr className="w-full border-gray-100" />
                    <Button
                        href={RESUME_URL}
                        external
                        className="w-full justify-center rounded-full py-3"
                        onClick={closeMobile}
                    >
                        My resume
                    </Button>
                </div>
            </div>
        </header>
    );
}