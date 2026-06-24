// src/FeaturesComponents/FeaturesHeroSection.jsx

export default function FeaturesHeroSection() {
  return (
    <section className="scroll-mt-24 bg-linear-to-br from-[#071b1d] via-[#102820] to-[#3f5138] px-6 pt-32 pb-20 text-white sm:pt-42 sm:pb-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b8c9b4]">
          Features
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
          A complete workflow for behavioral observation.
        </h1>

        <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/74 sm:text-xl">
          Build species and group profiles, collect focal and group scan
          observations, review behavioral trends, and export clean data from one
          organized pipeline.
        </p>
      </div>
    </section>
  );
}
