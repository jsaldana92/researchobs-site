import { useEffect, useMemo, useState } from "react";
import AppLogo from "../components/AppLogo";
import HomeAboutResearchObs from "../HomeComponents/HomeAboutResearchObs";
import HomePipeline from "../HomeComponents/HomePipeline";
import HomeFAQ from "../HomeComponents/HomeFAQ";
import googlePlayBadge from "../assets/app_store/google-play-badge.svg";
import amazonAppstoreBadge from "../assets/app_store/amazon-appstore-badge.svg";

const AMAZON_APPSTORE_URL =
  "https://www.amazon.com/ResearchObs/dp/B0H2XWMKH8/ref=sr_1_1?crid=J16WHGEZIFIZ&dib=eyJ2IjoiMSJ9.5zlvG0GddLW_bBTx2j92Lw.AwXdZ-uBmd8MLGCsFuMKNCMmZNdIuOl2VOwYP0KopCU&dib_tag=se&keywords=research+obs&qid=1781242516&s=mobile-apps&sprefix=researchobs%2Cmobile-apps%2C164&sr=1-1";

const GOOGLE_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.researchobs.app";

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
              className={`absolute inset-0 block h-full w-full transition-opacity duration-1800 ease-linear ${
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

          <AppLogo className="h-20 w-auto sm:h-28 md:h-34" priority={true} />

          <p className="mt-3 max-w-3xl px-4 text-base font-medium text-slate-200 sm:text-lg md:text-xl">
            A free, intuitive Android app for behavioral research and welfare
            monitoring.
          </p>

          <div className="mt-7 rounded-3xl border border-white/15 bg-black/28 px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-100/90">
              Start collecting data now!
            </p>

            <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={GOOGLE_PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Get ResearchObs on Google Play"
                className="transition duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                <img
                  src={googlePlayBadge}
                  alt="Get it on Google Play"
                  className="h-12 w-auto sm:h-14"
                  loading="eager"
                  decoding="async"
                />
              </a>

              <a
                href={AMAZON_APPSTORE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Get ResearchObs on Amazon Appstore"
                className="transition duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                <img
                  src={amazonAppstoreBadge}
                  alt="Available at Amazon Appstore"
                  className="h-12 w-auto sm:h-14"
                  loading="eager"
                  decoding="async"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <HomeAboutResearchObs />
      <HomePipeline />
      <HomeFAQ />
    </>
  );
}
