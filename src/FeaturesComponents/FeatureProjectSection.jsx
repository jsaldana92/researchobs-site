import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const collaboratorNodes = [
  {
    id: "observer-one",
    label: "Collaborator",
    className: "right-[10%] top-[14%]",
    delay: 0.2,
  },
  {
    id: "observer-two",
    label: "Collaborator",
    className: "right-[6%] top-1/2 -translate-y-1/2",
    delay: 0.38,
  },
  {
    id: "observer-three",
    label: "Collaborator",
    className: "right-[12%] bottom-[13%]",
    delay: 0.56,
  },
];

function PersonIcon({ primary = false }) {
  return (
    <div
      className={`flex h-18 w-18 items-center justify-center rounded-full border shadow-[0_18px_50px_rgba(7,27,29,0.16)] ${
        primary
          ? "border-[#071b1d]/15 bg-[#071b1d] text-white"
          : "border-[#102820]/15 bg-white/85 text-[#102820]"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 12.2a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2Z"
          fill="currentColor"
        />
        <path
          d="M4.75 20.1c.72-3.42 3.54-5.45 7.25-5.45s6.53 2.03 7.25 5.45"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function FeatureProjectSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.45 });

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-linear-to-br from-[#071b1d] via-[#102820] to-[#3f5138] px-6 py-20 text-white sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b8c9b4]">
            Projects
          </p>

          <h2 className="mt-4 max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            Collaborate with other users and track behaviors together
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
            Create projects, attach a shared ethogram, and invite collaborators
            so every user records observations with the same behavior
            definitions, project settings, and shared cloud workspace.
          </p>
        </div>

        <div className="relative mx-auto h-124 w-full max-w-xl overflow-hidden rounded-4xl border border-[#102820]/10 bg-white/45 shadow-[0_28px_90px_rgba(7,27,29,0.16)] backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_50%,rgba(63,81,56,0.20),transparent_40%)]" />

          <svg
            viewBox="0 0 560 496"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <motion.path
              d="M190 248 C260 120 350 90 438 108"
              fill="none"
              stroke="rgba(16,40,32,0.42)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.16,
              }}
            />

            <motion.path
              d="M190 248 C270 248 350 248 442 248"
              fill="none"
              stroke="rgba(184,201,180,0.72)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.34,
              }}
            />

            <motion.path
              d="M190 248 C260 376 350 410 430 388"
              fill="none"
              stroke="rgba(184,201,180,0.72)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.52,
              }}
            />
          </svg>

          <motion.div
            className="absolute left-[16%] top-1/2 z-20 -translate-y-1/2"
            initial={{ scale: 0.86, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : undefined}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-4xl border border-[#102820]/10 bg-white/80 p-4 shadow-[0_24px_70px_rgba(7,27,29,0.16)] backdrop-blur-sm">
              <PersonIcon primary={true} />
              <p className="mt-3 text-center text-xs font-black uppercase tracking-[0.22em] text-[#102820]">
                You
              </p>
            </div>
          </motion.div>

          {collaboratorNodes.map((node) => (
            <motion.div
              key={node.id}
              className={`absolute z-20 ${node.className}`}
              initial={{ scale: 0.82, opacity: 0, y: 10 }}
              animate={inView ? { scale: 1, opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: node.delay + 0.24,
              }}
            >
              <div className="flex flex-col items-center">
                <PersonIcon />

                <p className="mt-3 rounded-full border border-[#102820]/10 bg-white/70 px-3 py-1 text-xs font-semibold text-[#102820] backdrop-blur-sm">
                  {node.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
