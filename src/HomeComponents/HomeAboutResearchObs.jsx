// src/homeComponents/homeAboutResearchObs.jsx

import mainPageImage from "../assets/core-features/main-page.png";
import groupScanImage from "../assets/core-features/group-scan.png";

export default function HomeAboutResearchObs() {
  return (
    <section className="scroll-mt-24 bg-[#f7f5ef] px-6 py-20 text-[#102820] sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5f7659]">
            About ResearchObs
          </p>

          <h2 className="mt-4 max-w-xl text-4xl font-black tracking-tight text-[#071b1d] sm:text-5xl">
            What is ResearchObs?
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#24362f] sm:text-xl">
            ResearchObs is a{" "}
            <span className="underline decoration-[#5f7659] decoration-2 underline-offset-4">
              free
            </span>{" "}
            behavioral data collection app developed with species and ethogram
            versatility so that anyone, including researchers, care staff, and
            hobbyists, can collect behavioral data from their animals to drive
            welfare and research projects.
          </p>
        </div>

        <div className="relative mx-auto flex w-full justify-center py-4 lg:py-8">
          <div className="absolute left-4 top-16 h-48 w-48 rounded-full bg-[#b8dd54]/20 blur-3xl" />
          <div className="absolute right-6 bottom-14 h-56 w-56 rounded-full bg-[#3f5138]/18 blur-3xl" />

          <div className="relative h-[38rem] w-full max-w-[34rem] sm:h-[42rem]">
            {/* Larger Samsung tablet in back */}
            <div className="absolute right-2 top-0 w-[min(72vw,24rem)] max-w-full">
              <div className="relative aspect-[1200/1815] rounded-[0.8rem] bg-linear-to-br from-[#2a2a2c] via-[#111214] to-[#050506] p-[0.42rem] shadow-[0_30px_80px_rgba(7,27,29,0.28),0_14px_30px_rgba(7,27,29,0.22),inset_0_1px_1px_rgba(255,255,255,0.12)]">
                <div className="absolute inset-[0.12rem] rounded-[0.68rem] bg-linear-to-br from-[#1a1a1c] via-[#0f1012] to-[#060607]" />

                {/* side buttons */}
                <div className="absolute -right-[0.10rem] top-[23%] h-8 w-[0.16rem] rounded-full bg-black/45" />
                <div className="absolute -right-[0.10rem] top-[31%] h-14 w-[0.16rem] rounded-full bg-black/50" />

                {/* Samsung camera on side bezel */}
                <div className="absolute right-[0.78rem] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#0a0a0b] ring-1 ring-white/10" />

                <div className="absolute inset-[1.08rem] overflow-hidden rounded-[0.28rem] bg-[#f5f5f3]">
                  <img
                    src={mainPageImage}
                    alt="ResearchObs home page displayed on a Samsung tablet mockup"
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* Smaller Amazon Fire tablet in front */}
            <div className="absolute bottom-0 left-2 z-10 w-[min(64vw,20.75rem)] max-w-[86%]">
              <div className="relative aspect-[165/246] rounded-[1.85rem] bg-linear-to-br from-[#22344d] via-[#0f1622] to-[#05080c] p-[0.4rem] shadow-[0_26px_60px_rgba(7,27,29,0.30),0_10px_22px_rgba(7,27,29,0.20),inset_0_1px_1px_rgba(255,255,255,0.10)]">
                <div className="absolute inset-[0.12rem] rounded-[1.72rem] bg-linear-to-br from-[#1d2d43] via-[#0d1117] to-[#06080b]" />

                {/* top camera like the Fire reference */}
                <div className="absolute left-1/2 top-[0.72rem] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#0a0a0b] ring-1 ring-white/10" />

                <div className="absolute inset-4 overflow-hidden rounded-[1.28rem] bg-[#f5f5f3]">
                  <img
                    src={groupScanImage}
                    alt="ResearchObs group scan page displayed on an Amazon Fire HD 10 tablet mockup"
                    className="h-full w-full object-contain object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
