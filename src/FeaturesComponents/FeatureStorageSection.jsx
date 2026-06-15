import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import googleDriveLogo from "../assets/cloud-logos/google_drive_logo.png";
import dropboxLogo from "../assets/cloud-logos/dropbox_logo.png";

export default function FeatureStorageSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.45 });

  return (
    <section
      ref={sectionRef}
      className="scroll-mt-24 overflow-hidden bg-linear-to-br from-[#b7c8ba] via-[#e8ece5] to-[#f6f2e8] px-6 py-20 text-[#071b1d] sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5F7659]">
            Storage
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071b1d] sm:text-5xl lg:text-6xl">
            Keep your cloud backups in sync
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-[#24362f] sm:text-lg">
            Connect Google Drive or Dropbox to back up your observation files in
            the cloud service your team already uses. After setup, quick sync
            helps keep your local records and cloud folders up to date.
          </p>
        </div>

        <div className="relative mx-auto mt-14 flex max-w-5xl flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
          <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8dd54]/20 blur-3xl" />
          <div className="absolute right-10 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-[#3f5138]/12 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.84, rotate: -8 }}
            animate={
              inView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : undefined
            }
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.12,
            }}
            className="flex min-h-36 w-full max-w-sm items-center justify-center gap-5 rounded-4xl border border-[#102820]/10 bg-white/72 px-7 py-6 shadow-[0_20px_55px_rgba(7,27,29,0.12)] backdrop-blur-sm sm:w-92"
          >
            <img
              src={googleDriveLogo}
              alt=""
              aria-hidden="true"
              className="h-20 w-20 object-contain"
              loading="lazy"
              decoding="async"
            />

            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : undefined}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.36,
              }}
              className="text-3xl font-black tracking-tight text-[#071b1d]"
            >
              Google Drive
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.84, rotate: 8 }}
            animate={
              inView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : undefined
            }
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.34,
            }}
            className="flex min-h-36 w-full max-w-sm items-center justify-center gap-5 rounded-4xl border border-[#102820]/10 bg-white/72 px-7 py-6 shadow-[0_20px_55px_rgba(7,27,29,0.12)] backdrop-blur-sm sm:w-92"
          >
            <img
              src={dropboxLogo}
              alt=""
              aria-hidden="true"
              className="h-20 w-20 object-contain"
              loading="lazy"
              decoding="async"
            />

            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : undefined}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.58,
              }}
              className="text-3xl font-black tracking-tight text-[#071b1d]"
            >
              Dropbox
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
