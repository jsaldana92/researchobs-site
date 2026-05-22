// src/pages/Features.jsx

import CoreFeaturesSection from "../FeaturesComponents/FeaturesCoreSection";
import FeaturesAnimalProfileSection from "../FeaturesComponents/FeaturesAnimalProfileSection";

export default function Features() {
  return (
    <main className="bg-[#08110c] text-slate-100">
      <section className="mx-auto max-w-6xl px-6 pb-8 pt-32 sm:pt-36">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
          Features
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          Flexible tools for observation, animal profiles, and research-ready
          data.
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
          ResearchObs gives teams a structured way to collect behavioral data,
          organize species profiles, and prepare outputs for welfare and
          research workflows.
        </p>
      </section>

      <CoreFeaturesSection />
      <FeaturesAnimalProfileSection />
    </main>
  );
}
