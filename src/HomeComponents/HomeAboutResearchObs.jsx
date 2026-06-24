// src/homeComponents/homeAboutResearchObs.jsx

import tabletHomeImage from "../assets/device-showcase/researchobs-tablet-home.webp";
import tabletSyncImage from "../assets/device-showcase/researchobs-tablet-sync.webp";
import phoneObservationImage from "../assets/device-showcase/researchobs-phone-observation.webp";

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

        <div className="relative mx-auto w-full max-w-160 py-4 lg:py-8">
          <div className="absolute left-8 top-24 h-44 w-44 rounded-full bg-[#b8dd54]/20 blur-3xl" />
          <div className="absolute right-6 bottom-16 h-56 w-56 rounded-full bg-[#3f5138]/18 blur-3xl" />

          <div className="relative min-h-136 w-full sm:min-h-160 lg:min-h-148">
            <figure className="absolute right-0 top-0 w-[min(76vw,21rem)] sm:w-100 lg:w-102">
              <img
                src={tabletHomeImage}
                alt="ResearchObs home screen shown on a Samsung Galaxy Tab A8 tablet"
                className="w-full object-contain drop-shadow-[0_30px_70px_rgba(7,27,29,0.24)]"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className="absolute left-0 top-14 z-10 w-[min(74vw,20rem)] sm:top-16 sm:w-[24rem] lg:w-[24rem]">
              <img
                src={tabletSyncImage}
                alt="ResearchObs sync hub shown on an Amazon Fire HD 10 tablet"
                className="w-full object-contain drop-shadow-[0_28px_65px_rgba(7,27,29,0.26)]"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className="absolute top-55 left-[65%] z-20 w-[min(42vw,10rem)] -translate-x-1/2 sm:w-50 lg:w-48">
              <img
                src={phoneObservationImage}
                alt="ResearchObs observation screen shown on a Google Pixel 8 phone"
                className="w-full object-contain drop-shadow-[0_24px_55px_rgba(7,27,29,0.30)]"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
