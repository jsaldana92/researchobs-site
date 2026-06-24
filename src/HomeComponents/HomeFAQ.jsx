// src/homeComponents/HomeFAQ.jsx

const faqs = [
  {
    question: "What species are supporter?",
    answer:
      "ResearchObs can support any species. Customizable animal profiles let you create multiple species, each with their own groups and individual group members, so the app can fit the social structure you need to observe.",
  },
  {
    question: "How much does ResearchObs cost?",
    answer:
      "ResearchObs is completely free. There are no hidden fees, subscriptions, or in-app transactions required to access its features.",
  },
  {
    question: "What types of observations are supported?",
    answer:
      "Currently we support focal observations and group scan observations.",
  },
  {
    question: "What types of behaviors are supported?",
    answer:
      "We support point behaviors and state behaviors. Point behaviors are counted each time they are entered, while state behaviors are scored by duration.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Your data is always stored locally first so that only you have direct access to it. You can then export it to your computer through a USB connection or upload it to your own cloud storage provider, such as Google Drive or Dropbox.",
  },
  {
    question: "Does ResearchObs support multi-device access?",
    answer: "Yes. You can sign in and collect data across multiple devices.",
  },
  {
    question: "Is my data or information ever shared with third parties?",
    answer:
      "No. we never share your data with third parties. We only collect deidentified analytics about app feature usage to help guide future updates.",
  },
];

export default function HomeFAQ() {
  return (
    <section className="scroll-mt-24 bg-[#f7f5ef] px-6 py-20 text-[#071b1d] sm:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5f7659]">
          FAQ
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          Frequently asked questions
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-[#3f5138] sm:text-lg">
          See below for the most common questions we are asked or visit the
          Features page to learn more about ResearchObs
        </p>

        <div className="join join-vertical mt-10 w-full overflow-hidden rounded-3xl border border-[#d8d2c2] bg-[#fffdf8] shadow-[0_20px_60px_rgba(7,27,29,0.08)]">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="collapse collapse-arrow join-item border border-[#d8d2c2] bg-[#fffdf8] text-[#071b1d]"
            >
              <input
                type="radio"
                name="researchobs-faq-accordion"
                defaultChecked={index === 0}
              />

              <div className="collapse-title text-base font-black text-[#071b1d] sm:text-lg">
                {faq.question}
              </div>

              <div className="collapse-content text-sm leading-6 text-[#3f5138] sm:text-base sm:leading-7">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
