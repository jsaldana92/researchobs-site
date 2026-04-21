import { useEffect, useMemo, useState } from "react";
import AppLogo from "../components/AppLogo";
import beowulftillyImage from "../images/beowulftilly.png";
import fish1Image from "../images/fish1.png";
import flamingo2Image from "../images/flamingo2.png";
import gator1Image from "../images/gator1.png";
import gibbon1Image from "../images/gibbon1.png";
import gorilla7Image from "../images/gorilla7.png";
import reptile2Image from "../images/reptile2.png";
import snake3Image from "../images/snake3.png";

export default function Home() {
  const carouselImages = useMemo(
    () => [
      gibbon1Image,
      fish1Image,
      flamingo2Image,
      gator1Image,
      beowulftillyImage,
      gorilla7Image,
      reptile2Image,
      snake3Image,
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(() => new Set([0]));

  useEffect(() => {
    if (carouselImages.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex(
        (currentIndex) => (currentIndex + 1) % carouselImages.length,
      );
    }, 8000);

    return () => window.clearInterval(intervalId);
  }, [carouselImages]);

  useEffect(() => {
    const nextIndex = (activeIndex + 1) % carouselImages.length;
    const nextImage = new Image();
    nextImage.decoding = "async";
    nextImage.src = carouselImages[nextIndex];
    nextImage.onload = () => {
      setLoadedImages((currentLoaded) => {
        if (currentLoaded.has(nextIndex)) return currentLoaded;
        const updatedLoaded = new Set(currentLoaded);
        updatedLoaded.add(nextIndex);
        return updatedLoaded;
      });
    };
  }, [activeIndex, carouselImages]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 text-center">
      <div className="absolute inset-0">
        {carouselImages.map((imageSrc, index) => {
          const isActive = index === activeIndex;
          const shouldRender =
            isActive ||
            index === (activeIndex + 1) % carouselImages.length ||
            loadedImages.has(index);

          if (!shouldRender) return null;

          return (
            <img
              key={imageSrc}
              src={imageSrc}
              alt=""
              aria-hidden="true"
              decoding="async"
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}
      </div>

      <div className="absolute inset-0 bg-slate-950/25" />

      <div className="relative z-10 flex -translate-y-18 flex-col items-center sm:-translate-y-20 md:-translate-y-24">
        <div className="flex h-[13rem] items-end overflow-hidden sm:h-[16rem] md:h-[20rem]">
          <AppLogo
            className="h-[5rem] w-auto max-w-none sm:h-[8rem] md:h-[10rem]"
            priority={true}
          />
        </div>

        <p className="mt-1 max-w-3xl px-4 text-base font-medium text-slate-200 sm:mt-2 sm:text-lg md:text-xl">
          An intuative way to collect, store, share, and report animal
          behavioral data
        </p>

        <p className="mt-4 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-200 shadow-sm">
          Coming Soon
        </p>
      </div>
    </section>
  );
}
