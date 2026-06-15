import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import ulfImage from "../assets/features_sna_heatmaps/ulf.png";
import dillImage from "../assets/features_sna_heatmaps/dill.png";
import booImage from "../assets/features_sna_heatmaps/boo.png";
import hazeImage from "../assets/features_sna_heatmaps/haze.png";
import picklesImage from "../assets/features_sna_heatmaps/pickles.png";
import beeImage from "../assets/features_sna_heatmaps/bee.png";

const snaNodes = [
  {
    id: "ulf",
    label: "Ulf",
    image: ulfImage,
    x: 50,
    y: 14,
    size: "clamp(3.1rem, 5.5vw, 4.25rem)",
    slot: "clamp(5rem, 8.5vw, 6.7rem)",
  },
  {
    id: "dill",
    label: "Dill",
    image: dillImage,
    x: 87,
    y: 31,
    size: "clamp(2.95rem, 5.25vw, 4rem)",
    slot: "clamp(4.8rem, 8vw, 6.4rem)",
  },
  {
    id: "boo",
    label: "Boo",
    image: booImage,
    x: 87,
    y: 70,
    size: "clamp(2.95rem, 5.25vw, 4rem)",
    slot: "clamp(4.8rem, 8vw, 6.4rem)",
  },
  {
    id: "haze",
    label: "Haze",
    image: hazeImage,
    x: 50,
    y: 85,
    size: "clamp(2.95rem, 5.25vw, 4rem)",
    slot: "clamp(4.8rem, 8vw, 6.4rem)",
  },
  {
    id: "pickles",
    label: "Pickles",
    image: picklesImage,
    x: 13,
    y: 70,
    size: "clamp(2.95rem, 5.25vw, 4rem)",
    slot: "clamp(5.5rem, 9.2vw, 7.2rem)",
  },
  {
    id: "bee",
    label: "Bee",
    image: beeImage,
    x: 13,
    y: 31,
    size: "clamp(2.95rem, 5.25vw, 4rem)",
    slot: "clamp(4.8rem, 8vw, 6.4rem)",
  },
];

const snaNodeById = Object.fromEntries(snaNodes.map((node) => [node.id, node]));

const snaEdges = [
  { source: "ulf", target: "bee" },
  { source: "ulf", target: "dill" },
  { source: "bee", target: "dill" },
  { source: "bee", target: "pickles" },
  { source: "dill", target: "boo" },
  { source: "pickles", target: "haze" },
  { source: "haze", target: "boo" },
  { source: "pickles", target: "boo" },
  { source: "ulf", target: "pickles" },
  { source: "ulf", target: "boo" },
  { source: "bee", target: "haze" },
  { source: "dill", target: "haze" },
  { source: "ulf", target: "haze", strong: true },
  { source: "bee", target: "boo", strong: true },
  { source: "pickles", target: "dill", strong: true },
].map((edge, index) => ({
  ...edge,
  delay: 0.12 + index * 0.045,
}));

function SnaNetworkMockup({ active }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(95,118,89,0.08),transparent_48%)]" />

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        {snaEdges.map((edge) => {
          const source = snaNodeById[edge.source];
          const target = snaNodeById[edge.target];

          return (
            <motion.line
              key={`${edge.source}-${edge.target}`}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                active
                  ? {
                      pathLength: 1,
                      opacity: edge.strong ? 1 : 0.72,
                    }
                  : undefined
              }
              transition={{
                duration: edge.strong ? 0.82 : 0.62,
                ease: [0.22, 1, 0.36, 1],
                delay: edge.delay,
              }}
              stroke={edge.strong ? "#2f6fa6" : "#a9bbca"}
              strokeWidth={edge.strong ? 1.35 : 0.34}
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      {snaNodes.map((node, index) => (
        <div
          key={node.id}
          className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.slot,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.72, y: 10 }}
            animate={active ? { opacity: 1, scale: 1, y: 0 } : undefined}
            transition={{
              duration: 0.58,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.18 + index * 0.08,
            }}
            className="flex flex-col items-center"
          >
            <div
              className="overflow-hidden rounded-full border-2 border-[#eef5ea] bg-[#edf1ea] shadow-[0_8px_28px_rgba(7,27,29,0.16)]"
              style={{
                width: node.size,
                height: node.size,
              }}
            >
              <img
                src={node.image}
                alt={`${node.label} social network node`}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="mt-1 rounded-full border border-black/10 bg-[#f3f2ef]/95 px-3 py-1 text-center text-[clamp(0.68rem,1.35vw,0.92rem)] font-black leading-none text-[#1d1d1d] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              {node.label}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default function FeatureSocialNetworkAnalysisSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.28 });

  return (
    <section
      ref={sectionRef}
      className="scroll-mt-24 overflow-hidden bg-white px-6 py-20 text-[#071b1d] sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5F7659]">
              Social Network Analysis
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-black tracking-tight text-[#071b1d] sm:text-5xl">
              Evaluate group dynamics and social connections
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#24362f] sm:text-lg">
              Convert observation records into social network visualizations so
              you can see who interacts with whom, compare connection strength,
              and identify patterns in group behavior.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.12,
            }}
            className="relative mx-auto w-full max-w-xl overflow-hidden rounded-4xl border border-[#102820]/10 bg-white/45 p-5 shadow-[0_28px_90px_rgba(7,27,29,0.16)] backdrop-blur-sm sm:p-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_36%_34%,rgba(63,81,56,0.18),transparent_42%)]" />

            <SnaNetworkMockup active={inView} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
