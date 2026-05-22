// src/homeComponents/HomeFAQ.jsx

const faqs = [
  "What species can ResearchObs support?",
  "Can I customize behaviors and variables?",
  "Where is my data stored?",
  "Can I export data for analysis?",
];

export default function HomeFAQ() {
  return (
    <section className="scroll-mt-24 bg-[#f7f5ef] px-6 py-20 text-[#071b1d] sm:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5f7659]">
          FAQ
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          FAQ section placeholder
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((question) => (
            <div
              key={question}
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <h3 className="text-base font-black">{question}</h3>
              <p className="mt-2 text-sm leading-6 text-[#3f5138]">
                Placeholder answer text will go here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
