import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";

import storageImage from "../assets/core-features/core-storage.webp";
import mainPageImage from "../assets/core-features/core-home.webp";
import groupScanImage from "../assets/core-features/core-obs.webp";
import reportsImage from "../assets/core-features/core-reports.webp";

const FEATURES = [
  {
    id: "group-focal",
    title: "Group scan and focal workflows",
    description:
      "Run structured observations with support for both group scan and focal-style data collection. This makes it easier to support different protocols without switching between disconnected tools.",
    screenTitle: "Observation Modes",
    screenSubtitle: "Group scan + focal",
    accentClass: "from-sky-400/25 to-indigo-400/15",
    imageSrc: mainPageImage,
  },
  {
    id: "quick-entry",
    title: "Fast behavioral data entry",
    description:
      "Collect observations quickly with a mobile-first workflow built for field use. ResearchObs is designed to reduce friction during active sessions so you can focus on the animals, not the interface.",
    screenTitle: "Quick Entry",
    screenSubtitle: "Tap, log, continue",
    accentClass: "from-emerald-400/25 to-cyan-400/15",
    imageSrc: groupScanImage,
  },
  {
    id: "exports",
    title: "Export, store, and review data",
    description:
      "Keep your data organized with export-ready workflows and storage options that fit real research needs. The app is built to make downstream review and reporting easier, not harder.",
    screenTitle: "Exports",
    screenSubtitle: "Ready for reporting",
    accentClass: "from-violet-400/25 to-fuchsia-400/15",
    imageSrc: reportsImage,
  },
  {
    id: "projects",
    title: "Built for projects and collaboration",
    description:
      "Support research projects that involve multiple users, repeated sessions, and organized data handling. ResearchObs is meant to scale beyond one-off collection into real project workflows.",
    screenTitle: "Projects",
    screenSubtitle: "Organized collaboration",
    accentClass: "from-amber-300/25 to-emerald-300/15",
    imageSrc: storageImage,
  },
];

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`pointer-events-none absolute top-1/2 left-1/2 overflow-visible bg-transparent p-0 transform-3d will-change-transform backface-hidden ${
      customClass ?? ""
    } ${rest.className ?? ""}`.trim()}
  />
));
Card.displayName = "Card";

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

function CardSwap({
  width = 355,
  height = 540,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onActiveIndexChange,
  skewAmount = 6,
  easing = "elastic",
  children,
}) {
  const config = useMemo(
    () =>
      easing === "elastic"
        ? {
            ease: "elastic.out(0.6,0.9)",
            durDrop: 2,
            durMove: 2,
            durReturn: 2,
            promoteOverlap: 0.9,
            returnDelay: 0.05,
          }
        : {
            ease: "power1.inOut",
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2,
          },
    [easing],
  );

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length],
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const timelineRef = useRef(null);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const swap = useCallback(() => {
    if (isAnimatingRef.current || order.current.length < 2) return;

    const [front, ...rest] = order.current;
    const nextFront = rest[0];
    const frontElement = refs[front]?.current;

    if (!frontElement || nextFront == null) return;

    timelineRef.current?.kill();
    isAnimatingRef.current = true;

    const timeline = gsap.timeline({
      onComplete: () => {
        order.current = [...rest, front];
        isAnimatingRef.current = false;
      },
    });

    timelineRef.current = timeline;

    timeline.to(frontElement, {
      y: "+=500",
      duration: config.durDrop,
      ease: config.ease,
    });

    timeline.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);

    timeline.call(
      () => {
        onActiveIndexChange?.(nextFront);
      },
      undefined,
      "promote",
    );

    rest.forEach((idx, i) => {
      const element = refs[idx]?.current;

      if (!element) return;

      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);

      timeline.set(element, { zIndex: slot.zIndex }, "promote");
      timeline.to(
        element,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          duration: config.durMove,
          ease: config.ease,
        },
        `promote+=${i * 0.15}`,
      );
    });

    const backSlot = makeSlot(
      refs.length - 1,
      cardDistance,
      verticalDistance,
      refs.length,
    );

    timeline.addLabel(
      "return",
      `promote+=${config.durMove * config.returnDelay}`,
    );

    timeline.call(
      () => {
        gsap.set(frontElement, { zIndex: backSlot.zIndex });
      },
      undefined,
      "return",
    );

    timeline.to(
      frontElement,
      {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        duration: config.durReturn,
        ease: config.ease,
      },
      "return",
    );
  }, [cardDistance, config, onActiveIndexChange, refs, verticalDistance]);

  useEffect(() => {
    const total = refs.length;

    order.current = Array.from({ length: total }, (_, i) => i);
    isAnimatingRef.current = false;
    timelineRef.current?.kill();

    refs.forEach((ref, index) => {
      if (!ref.current) return;

      placeNow(
        ref.current,
        makeSlot(index, cardDistance, verticalDistance, total),
        skewAmount,
      );
    });

    onActiveIndexChange?.(0);
  }, [cardDistance, onActiveIndexChange, refs, skewAmount, verticalDistance]);

  useEffect(() => {
    swap();

    intervalRef.current = window.setInterval(() => {
      swap();
    }, delay);

    return () => {
      window.clearInterval(intervalRef.current);
    };
  }, [delay, swap]);

  useEffect(() => {
    if (!pauseOnHover) return undefined;

    const node = containerRef.current;

    if (!node) return undefined;

    const pause = () => {
      timelineRef.current?.pause();
      window.clearInterval(intervalRef.current);
    };

    const resume = () => {
      timelineRef.current?.play();
      window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        swap();
      }, delay);
    };

    node.addEventListener("mouseenter", pause);
    node.addEventListener("mouseleave", resume);

    return () => {
      node.removeEventListener("mouseenter", pause);
      node.removeEventListener("mouseleave", resume);
      window.clearInterval(intervalRef.current);
    };
  }, [delay, pauseOnHover, swap]);

  useEffect(() => {
    return () => {
      window.clearInterval(intervalRef.current);
      timelineRef.current?.kill();
    };
  }, []);

  const rendered = childArr.map((child, index) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: index,
          ref: refs[index],
          style: { width, height, ...(child.props.style ?? {}) },
        })
      : child,
  );

  return (
    <div
      ref={containerRef}
      className="pointer-events-auto absolute -bottom-42.5 right-9 origin-bottom-right transform overflow-visible perspective-distant max-[1024px]:right-4 max-[768px]:top-24 max-[768px]:right-1/2 max-[768px]:bottom-auto max-[768px]:origin-top max-[768px]:translate-x-1/2 max-[768px]:scale-[0.92] max-[480px]:scale-[0.78]"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
}

function FeatureCardContent({ feature }) {
  return (
    <div className="relative h-full w-full overflow-visible bg-transparent">
      {feature.imageSrc ? (
        <img
          src={feature.imageSrc}
          alt={`${feature.screenTitle} screenshot`}
          loading={feature.id === "group-focal" ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={feature.id === "group-focal" ? "high" : "auto"}
          className="h-full w-full object-contain object-center drop-shadow-[0_28px_60px_rgba(7,27,29,0.28)]"
        />
      ) : (
        <div
          className={`h-full w-full rounded-xl bg-linear-to-br ${feature.accentClass}`}
        >
          <div className="flex h-full w-full flex-col bg-slate-950/18 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-100/80">
              App screenshot slot
            </p>

            <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
              {feature.screenTitle}
            </h3>

            <p className="mt-2 text-base font-semibold text-slate-100/80">
              {feature.screenSubtitle}
            </p>

            <div className="mt-8 grid flex-1 grid-cols-3 gap-4">
              <div className="rounded-3xl bg-white/16" />
              <div className="rounded-3xl bg-white/10" />
              <div className="rounded-3xl bg-white/16" />
              <div className="col-span-2 rounded-3xl bg-white/10" />
              <div className="rounded-3xl bg-white/16" />
              <div className="col-span-3 rounded-3xl bg-white/12" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FeatureMediaStage({ features, onActiveIndexChange }) {
  return (
    <div className="relative z-0 h-[280px]h-[320px] md:h-90 lg:h-140 lg:overflow-visible">
      <CardSwap
        width={355}
        height={540}
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={true}
        onActiveIndexChange={onActiveIndexChange}
      >
        {features.map((feature) => (
          <Card key={feature.id}>
            <FeatureCardContent feature={feature} />
          </Card>
        ))}
      </CardSwap>
    </div>
  );
}

export default function CoreFeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFeature = FEATURES[activeIndex] ?? FEATURES[0];

  useEffect(() => {
    FEATURES.forEach((feature) => {
      if (!feature.imageSrc) return;

      const image = new Image();
      image.src = feature.imageSrc;
    });
  }, []);

  return (
    <section className="overflow-hidden bg-linear-to-br from-[#b7c8ba] via-[#e8ece5] to-[#f6f2e8] px-6 pt-10 pb-0 text-slate-900 sm:pt-10">
      <div className="mx-auto grid max-w-6xl gap-3 sm:gap-18 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="relative z-20 flex flex-col justify-center pb-4 lg:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-950/65">
            Core Features
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            {activeFeature.title}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
            {activeFeature.description}
          </p>
        </div>

        <FeatureMediaStage
          features={FEATURES}
          onActiveIndexChange={setActiveIndex}
        />
      </div>
    </section>
  );
}
