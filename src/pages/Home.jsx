import { useEffect, useMemo, useState } from "react";
import AppLogo from "../components/AppLogo";
import CoreFeaturesSection from "../components/CoreFeaturesSection";

const DISPLAY_MS = 8000;
const FADE_MS = 1800;
const HERO_SIZES = "100vw";
const HERO_ORDER = [
  "gibbon1",
  "fish1",
  "flamingo2",
  "gator1",
  "beowulftilly",
  "gorilla7",
  "reptile2",
  "snake3",
];

const avifModules = import.meta.glob("../assets/hero/avif/*.avif", {
  eager: true,
  import: "default",
});

const webpModules = import.meta.glob("../assets/hero/webp/*.webp", {
  eager: true,
  import: "default",
});

function buildSlides() {
  const slidesByKey = new Map();
  const variantPattern = /\/([^/]+)-(\d+)w\.(avif|webp)$/i;

  const addVariants = (modules, format) => {
    Object.entries(modules).forEach(([path, url]) => {
      const match = path.match(variantPattern);
      if (!match) return;

      const [, key, width] = match;
      const numericWidth = Number(width);

      if (!slidesByKey.has(key)) {
        slidesByKey.set(key, {
          key,
          avif: [],
          webp: [],
        });
      }

      slidesByKey.get(key)[format].push({
        width: numericWidth,
        url,
      });
    });
  };

  addVariants(avifModules, "avif");
  addVariants(webpModules, "webp");

  return HERO_ORDER.map((key) => {
    const slide = slidesByKey.get(key);
    if (!slide) return null;

    const avifVariants = [...slide.avif].sort((a, b) => a.width - b.width);
    const webpVariants = [...slide.webp].sort((a, b) => a.width - b.width);
    const fallbackVariants =
      webpVariants.length > 0 ? webpVariants : avifVariants;

    if (fallbackVariants.length === 0) return null;

    const fallbackVariant =
      fallbackVariants.find((variant) => variant.width >= 1280) ??
      fallbackVariants[fallbackVariants.length - 1];

    return {
      key,
      avifSrcSet: avifVariants
        .map((variant) => `${variant.url} ${variant.width}w`)
        .join(", "),
      webpSrcSet: webpVariants
        .map((variant) => `${variant.url} ${variant.width}w`)
        .join(", "),
      fallbackSrc: fallbackVariant.url,
      preloadSrc: fallbackVariant.url,
    };
  }).filter(Boolean);
}

function HeroImage({ slide, className = "", priority = false }) {
  if (!slide) return null;

  return (
    <picture className={className}>
      {slide.avifSrcSet ? (
        <source
          type="image/avif"
          srcSet={slide.avifSrcSet}
          sizes={HERO_SIZES}
        />
      ) : null}

      {slide.webpSrcSet ? (
        <source
          type="image/webp"
          srcSet={slide.webpSrcSet}
          sizes={HERO_SIZES}
        />
      ) : null}

      <img
        src={slide.fallbackSrc}
        alt=""
        aria-hidden="true"
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover"
      />
    </picture>
  );
}

function StoreLinksPlaceholder() {
  return (
    <section
      id="get-started"
      className="scroll-mt-24 bg-[#08110c] px-6 py-16 text-slate-100"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
            Get started
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Download ResearchObs
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            This is the placeholder area for your store links. Later, this can
            hold your Google Play download and your Amazon Appstore link for
            Fire tablets.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white opacity-80"
            >
              Google Play Store
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white opacity-80"
            >
              Amazon Appstore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const slides = useMemo(() => buildSlides(), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState(null);
  const [incomingVisible, setIncomingVisible] = useState(false);

  useEffect(() => {
    if (slides.length <= 1 || incomingIndex !== null) return undefined;

    const displayTimer = window.setTimeout(() => {
      setIncomingIndex((currentIndex + 1) % slides.length);
    }, DISPLAY_MS);

    return () => window.clearTimeout(displayTimer);
  }, [slides.length, currentIndex, incomingIndex]);

  useEffect(() => {
    if (incomingIndex === null) return undefined;

    let cancelled = false;
    let fadeFrameOne = 0;
    let fadeFrameTwo = 0;

    const nextSlide = slides[incomingIndex];
    if (!nextSlide) return undefined;

    const startFade = () => {
      if (cancelled) return;

      setIncomingVisible(false);

      fadeFrameOne = window.requestAnimationFrame(() => {
        fadeFrameTwo = window.requestAnimationFrame(() => {
          if (!cancelled) {
            setIncomingVisible(true);
          }
        });
      });
    };

    const preloadImage = new Image();
    preloadImage.decoding = "async";
    preloadImage.src = nextSlide.preloadSrc;

    const onReady = async () => {
      if (cancelled) return;

      try {
        if (typeof preloadImage.decode === "function") {
          await preloadImage.decode();
        }
      } catch {
        // Continue the transition even if decode fails.
      }

      startFade();
    };

    if (preloadImage.complete) {
      onReady();
    } else {
      preloadImage.onload = onReady;
      preloadImage.onerror = onReady;
    }

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(fadeFrameOne);
      window.cancelAnimationFrame(fadeFrameTwo);
    };
  }, [incomingIndex, slides]);

  useEffect(() => {
    if (incomingIndex === null || !incomingVisible) return undefined;

    const finishFadeTimer = window.setTimeout(() => {
      setCurrentIndex(incomingIndex);
      setIncomingIndex(null);
      setIncomingVisible(false);
    }, FADE_MS);

    return () => window.clearTimeout(finishFadeTimer);
  }, [incomingIndex, incomingVisible]);

  const currentSlide = slides[currentIndex] ?? null;
  const incomingSlide =
    incomingIndex !== null ? (slides[incomingIndex] ?? null) : null;

  const handleStartCollectingClick = () => {
    document
      .getElementById("get-started")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="relative flex min-h-[clamp(34rem,70vw,52rem)] items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <div className="absolute inset-0">
          <HeroImage
            slide={currentSlide}
            priority={true}
            className="absolute inset-0 block h-full w-full"
          />

          {incomingSlide ? (
            <HeroImage
              slide={incomingSlide}
              className={`absolute inset-0 block h-full w-full transition-opacity duration-[1800ms] ease-linear ${
                incomingVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : null}
        </div>

        <div className="absolute inset-0 bg-slate-950/30" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <p className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-slate-200/90 sm:mb-3 sm:text-xs md:text-sm">
            Collect <span className="mx-2 text-emerald-300">•</span> Store
            <span className="mx-2 text-emerald-300">•</span> Share
            <span className="mx-2 text-emerald-300">•</span> Report
          </p>

          <AppLogo
            className="h-[5rem] w-auto sm:h-[7rem] md:h-[8.5rem]"
            priority={true}
          />

          <p className="mt-3 max-w-3xl px-4 text-base font-medium text-slate-200 sm:text-lg md:text-xl">
            A free, intuitive Android app for behavioral research and welfare
            monitoring.
          </p>

          <button
            type="button"
            onClick={handleStartCollectingClick}
            className="mt-6 inline-flex items-center rounded-full border border-emerald-300/40 bg-emerald-400/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-emerald-400/25"
          >
            Start Collecting Data Now!
          </button>
        </div>
      </section>

      <CoreFeaturesSection />
      <StoreLinksPlaceholder />
    </>
  );
}
