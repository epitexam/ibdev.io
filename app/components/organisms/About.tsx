import { Button } from "../atoms/Button";
import { Illustration } from "../atoms/Illustrastion";
import { StatusBadge } from "../atoms/StatusBadge";

const ABOUT_PARAGRAPHS = [
  "I'm a full-stack developer who writes code that doesn't just run; it solves problems.",
  "I like building things that scale, make sense, and don't break under pressure.",
];

export function About() {
  return (
    <section id="about" className="relative bg-[#F8F9FA] overflow-hidden py-12 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl md:rounded-[3rem] bg-[#E2E8F0]/50 border border-white/50 p-3 sm:p-4 md:p-8 shadow-2xl">

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-4 md:gap-8">

            <div className="relative flex flex-col items-center justify-center rounded-3xl md:rounded-[2.5rem] bg-[#CBD5E1]/30 border border-white/20 p-6 sm:p-8 md:p-12 shadow-inner min-h-87.5 md:min-h-125">

              <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
                <StatusBadge color="blue" />
              </div>

              <div className="relative group w-full max-w-70 sm:max-w-[320px] md:max-w-95">
                <div className="absolute inset-x-4 -bottom-4 h-full rounded-4xl bg-gray-950/10 blur-xl transition-all group-hover:blur-2xl" />

                <div className="
                    relative z-10 aspect-square overflow-hidden rounded-3xl md:rounded-[2.5rem] 
                    bg-white border-t-4 md:border-t-8 border-white
                    shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1),0_8px_0_0_#CBD5E1]
                    md:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_15px_0_0_#CBD5E1]
                    flex flex-col
                ">
                  <div className="h-8 md:h-12 border-b border-gray-100 flex items-center px-4 md:px-6 gap-2">
                    <div className="h-1 w-6 md:w-8 rounded-full bg-gray-200" />
                    <div className="h-2 w-2 md:h-3 md:w-3 rounded-full border-2 border-gray-100 ml-auto" />
                  </div>

                  <div className="flex-1 flex items-center justify-center p-4">
                    <div className="scale-90 sm:scale-95 md:scale-100 transition-transform">
                      <Illustration className="drop-shadow-xl" />
                    </div>
                  </div>

                  <div className="p-4 md:p-6 pt-0 flex justify-center">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`h-0.5 md:h-1 w-3 md:w-4 rounded-full ${i === 4 ? 'bg-[#E15A3E]' : 'bg-gray-100'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-col rounded-3xl md:rounded-[2.5rem] bg-white p-6 sm:p-8 md:p-14 shadow-sm border-t border-white">

              <div className="flex flex-col gap-2 mb-6 md:mb-10">
                <span className="font-mono text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  // 01.Background_info
                </span>
                <div className="h-1 w-10 md:h-1.5 md:w-12 bg-gray-900 rounded-full" />
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-[1000] tracking-tighter text-gray-950 uppercase leading-[0.9] mb-6 md:mb-8">
                A PROPOS
              </h2>

              <div className="space-y-6 md:space-y-8">
                <p className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-gray-800 tracking-tight">
                  Building <span className="text-[#E15A3E]">scalable solutions</span> with an engineering mindset.
                </p>

                <div className="space-y-4 md:space-y-6">
                  {ABOUT_PARAGRAPHS.map((text, i) => (
                    <p key={i} className="text-sm md:text-base leading-relaxed text-gray-500 font-medium max-w-lg">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-8 md:mt-auto pt-8 md:pt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-full sm:w-auto">
                  <Button href="#contact" variant="accent" showChevron={true} className="w-full justify-center">
                    GET IN TOUCH
                  </Button>
                </div>

                <div className="flex flex-col gap-1 px-2 border-l-2 border-gray-50">
                  <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest leading-none">
                    protocol_init: active
                  </span>
                  <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest leading-none">
                    node_status: optimal
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}