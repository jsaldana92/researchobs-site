import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Html, Line } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import heatmapImage from "../assets/features_sna_heatmaps/features_heat_map.png";

const heatmapGrid = {
  left: 10.5,
  top: 9.5,
  cell: 5.35,
};

const heatmapScale = {
  1: { color: "#1d4ed8", opacity: 0.6 },
  2: { color: "#60a5fa", opacity: 0.6 },
  3: { color: "#22c55e", opacity: 0.6 },
  4: { color: "#eab308", opacity: 0.6 },
  5: { color: "#f97316", opacity: 0.6 },
  6: { color: "#ef4444", opacity: 0.6 },
};

function makeHeatmapCell(col, row, score, delay) {
  const scale = heatmapScale[score] ?? heatmapScale[1];

  return {
    left: `${heatmapGrid.left + col * heatmapGrid.cell}%`,
    top: `${heatmapGrid.top + row * heatmapGrid.cell}%`,
    size: `${heatmapGrid.cell}%`,
    color: scale.color,
    opacity: scale.opacity,
    delay,
  };
}

const cubeExtent = 0.96;

const cubeEdges = [
  [
    [-1, -1, -1],
    [1, -1, -1],
  ],
  [
    [-1, 1, -1],
    [1, 1, -1],
  ],
  [
    [-1, -1, 1],
    [1, -1, 1],
  ],
  [
    [-1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-1, -1, -1],
    [-1, 1, -1],
  ],
  [
    [1, -1, -1],
    [1, 1, -1],
  ],
  [
    [-1, -1, 1],
    [-1, 1, 1],
  ],
  [
    [1, -1, 1],
    [1, 1, 1],
  ],
  [
    [-1, -1, -1],
    [-1, -1, 1],
  ],
  [
    [1, -1, -1],
    [1, -1, 1],
  ],
  [
    [-1, 1, -1],
    [-1, 1, 1],
  ],
  [
    [1, 1, -1],
    [1, 1, 1],
  ],
].map((edge) =>
  edge.map(([x, y, z]) => [x * cubeExtent, y * cubeExtent, z * cubeExtent]),
);

const axisLines = [
  {
    points: [
      [1, -1, 1],
      [-1, -1, 1],
    ],
  },
  {
    points: [
      [1, -1, 1],
      [1, -1, -1],
    ],
  },
  {
    points: [
      [1, -1, 1],
      [1, 1, 1],
    ],
  },
].map((line) => ({
  points: line.points.map(([x, y, z]) => [
    x * cubeExtent,
    y * cubeExtent,
    z * cubeExtent,
  ]),
}));

const axisLabels = [
  { label: "0", position: [1.1, -1.12, 1.03] },
  { label: "X", position: [-1.22, -1.04, 1] },
  { label: "Y", position: [1, -1.03, -1.22] },
  { label: "Z", position: [1, 1.22, 1] },
  { label: "1", position: [-1.04, -1.08, 1] },
  { label: "1", position: [1, -1.08, -1.04] },
  { label: "1", position: [1.02, 1.04, 1] },
];

function heatmap3DColor(intensity) {
  if (intensity >= 0.82) return "#ef4444";
  if (intensity >= 0.62) return "#f97316";
  if (intensity >= 0.45) return "#84cc16";
  if (intensity >= 0.24) return "#22c55e";
  if (intensity >= 0.11) return "#0ea5e9";
  return "#1d4ed8";
}

const heatmap3DPoints = [
  { x: 0.05, y: 0.35, z: 0.583333, intensity: 0.833333 },
  { x: 0.75, y: 0.25, z: 0.583333, intensity: 0.060606 },
  { x: 0.65, y: 0.55, z: 0.25, intensity: 0.121212 },
  { x: 0.85, y: 0.25, z: 0.583333, intensity: 1.0 },
  { x: 0.25, y: 0.35, z: 0.583333, intensity: 0.409091 },
  { x: 0.15, y: 0.45, z: 0.583333, intensity: 0.272727 },
  { x: 0.45, y: 0.45, z: 0.25, intensity: 0.901515 },
  { x: 0.25, y: 0.45, z: 0.583333, intensity: 0.333333 },
  { x: 0.25, y: 0.25, z: 0.583333, intensity: 0.060606 },
  { x: 0.35, y: 0.15, z: 0.583333, intensity: 0.530303 },
  { x: 0.65, y: 0.55, z: 0.083333, intensity: 0.022727 },
  { x: 0.85, y: 0.65, z: 0.916667, intensity: 0.356061 },
  { x: 0.55, y: 0.15, z: 0.583333, intensity: 0.060606 },
  { x: 0.05, y: 0.45, z: 0.583333, intensity: 0.166667 },
  { x: 0.65, y: 0.65, z: 0.083333, intensity: 0.05303 },
  { x: 0.45, y: 0.15, z: 0.583333, intensity: 0.121212 },
  { x: 0.45, y: 0.45, z: 0.583333, intensity: 0.030303 },
  { x: 0.45, y: 0.65, z: 0.916667, intensity: 0.106061 },
  { x: 0.75, y: 0.35, z: 0.583333, intensity: 0.060606 },
  { x: 0.85, y: 0.45, z: 0.583333, intensity: 0.068182 },
  { x: 0.45, y: 0.55, z: 0.25, intensity: 0.022727 },
  { x: 0.35, y: 0.35, z: 0.583333, intensity: 0.090909 },
  { x: 0.35, y: 0.65, z: 0.916667, intensity: 0.083333 },
  { x: 0.85, y: 0.55, z: 0.083333, intensity: 0.121212 },
  { x: 0.75, y: 0.55, z: 0.25, intensity: 0.106061 },
  { x: 0.55, y: 0.45, z: 0.25, intensity: 0.060606 },
  { x: 0.75, y: 0.45, z: 0.25, intensity: 0.121212 },
  { x: 0.35, y: 0.25, z: 0.583333, intensity: 0.060606 },
  { x: 0.75, y: 0.55, z: 0.083333, intensity: 0.159091 },
  { x: 0.65, y: 0.35, z: 0.583333, intensity: 0.007576 },
  { x: 0.55, y: 0.55, z: 0.25, intensity: 0.030303 },
  { x: 0.55, y: 0.65, z: 0.083333, intensity: 0.030303 },
  { x: 0.75, y: 0.65, z: 0.083333, intensity: 0.022727 },
  { x: 0.75, y: 0.45, z: 0.083333, intensity: 0.007576 },
  { x: 0.85, y: 0.45, z: 0.083333, intensity: 0.007576 },
  { x: 0.65, y: 0.15, z: 0.583333, intensity: 0.015152 },
];

function toScenePoint(point) {
  return [
    (point.x * 2 - 1) * cubeExtent,
    (point.z * 2 - 1) * cubeExtent,
    (point.y * 2 - 1) * cubeExtent,
  ];
}

function AxisLabel({ label, position }) {
  return (
    <Html position={position} center zIndexRange={[100, 0]}>
      <span className="select-none text-lg font-bold text-[#444444]">
        {label}
      </span>
    </Html>
  );
}

function Heatmap3DPoint({ point, index, active }) {
  const meshRef = useRef(null);
  const materialRef = useRef(null);
  const revealStartRef = useRef(null);
  const radius = 0.04 + point.intensity * 0.09;

  useFrame((state) => {
    const mesh = meshRef.current;
    const material = materialRef.current;

    if (!mesh || !material) return;

    if (!active) {
      revealStartRef.current = null;
      mesh.scale.setScalar(0.001);
      material.opacity = 0;
      return;
    }

    if (revealStartRef.current === null) {
      revealStartRef.current = state.clock.elapsedTime;
    }

    const delay = 0.16 + index * 0.035;
    const elapsed = state.clock.elapsedTime - revealStartRef.current - delay;
    const progress = Math.min(Math.max(elapsed / 0.42, 0), 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    mesh.scale.setScalar(0.001 + easedProgress * 0.999);
    material.opacity = 0.84 * easedProgress;
  });

  return (
    <Billboard
      position={toScenePoint(point)}
      follow={true}
      lockX={false}
      lockY={false}
      lockZ={false}
    >
      <mesh ref={meshRef} scale={0.001} renderOrder={10}>
        <circleGeometry args={[radius, 40]} />
        <meshBasicMaterial
          ref={materialRef}
          color={heatmap3DColor(point.intensity)}
          transparent
          opacity={0}
          depthTest={true}
          depthWrite={false}
        />
      </mesh>
    </Billboard>
  );
}

function Heatmap3DModel({ active }) {
  return (
    <group rotation={[-0.4, 2.62, 0]} scale={0.78}>
      {heatmap3DPoints.map((point, index) => (
        <Heatmap3DPoint
          key={`heat-point-${index}`}
          point={point}
          index={index}
          active={active}
        />
      ))}

      {cubeEdges.map((edge, index) => (
        <Line
          key={`cube-edge-${index}`}
          points={edge}
          color="#444444"
          lineWidth={1}
          transparent
          opacity={0.2}
          depthTest={true}
          renderOrder={20}
        />
      ))}

      {axisLines.map((axis, index) => (
        <Line
          key={`axis-line-${index}`}
          points={axis.points}
          color="#444444"
          lineWidth={3}
          depthTest={false}
          renderOrder={40}
        />
      ))}

      <mesh
        position={[1 * cubeExtent, -1 * cubeExtent, 1 * cubeExtent]}
        renderOrder={41}
      >
        <sphereGeometry args={[0.045, 24, 24]} />
        <meshBasicMaterial color="#444444" depthTest={false} />
      </mesh>

      {axisLabels.map((axisLabel) => (
        <AxisLabel
          key={axisLabel.label + axisLabel.position.join("-")}
          label={axisLabel.label}
          position={axisLabel.position.map((value) => value * cubeExtent)}
        />
      ))}
    </group>
  );
}

const heatmapCells = [
  makeHeatmapCell(2, 4, 1, 0.1),
  makeHeatmapCell(2, 5, 2, 0.14),
  makeHeatmapCell(1, 5, 2, 0.18),
  makeHeatmapCell(4, 7, 1, 0.22),
  makeHeatmapCell(5, 6, 2, 0.26),
  makeHeatmapCell(13, 4, 2, 0.3),
  makeHeatmapCell(13, 3, 1, 0.34),
  makeHeatmapCell(11, 5, 2, 0.38),
  makeHeatmapCell(13, 8, 1, 0.42),
  makeHeatmapCell(13, 11, 2, 0.46),
  makeHeatmapCell(6, 13, 1, 0.5),
  makeHeatmapCell(6, 12, 2, 0.54),

  makeHeatmapCell(8, 7, 3, 0.66),
  makeHeatmapCell(9, 7, 4, 0.72),
  makeHeatmapCell(8, 8, 3, 0.78),
  makeHeatmapCell(9, 6, 4, 0.84),
  makeHeatmapCell(10, 8, 3, 0.9),

  makeHeatmapCell(5, 7, 5, 1.02),
  makeHeatmapCell(6, 7, 6, 1.1),
  makeHeatmapCell(6, 8, 5, 1.18),

  makeHeatmapCell(6, 0, 5, 1.3),
  makeHeatmapCell(7, 0, 6, 1.38),
  makeHeatmapCell(7, 1, 5, 1.46),

  makeHeatmapCell(11, 6, 5, 1.58),
  makeHeatmapCell(12, 6, 6, 1.66),
  makeHeatmapCell(12, 7, 5, 1.74),
];

export default function FeatureHeatmapsSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.28 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-linear-to-br from-[#f6f2e8] via-[#e8ece5] to-[#b7c8ba] px-6 py-20 text-slate-900 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-950/65">
            Heatmaps
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Visualize where behaviors happen most
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-slate-700 sm:text-lg">
            Upload a map, collect behavior-linked location data, and visualize
            where activity is concentrated. Enable z-scores to add depth and
            create 3D heatmaps for a more detailed view of space use.
          </p>
        </div>

        <div className="relative mx-auto mt-14 flex max-w-6xl flex-col items-center justify-center gap-6 lg:flex-row lg:gap-8">
          <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8dd54]/20 blur-3xl" />
          <div className="absolute right-10 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-[#3f5138]/12 blur-3xl" />

          <motion.figure
            initial={{ opacity: 0, y: 22, scale: 0.92, rotate: -3 }}
            animate={
              inView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : undefined
            }
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.18,
            }}
            className="w-full max-w-xl overflow-hidden rounded-4xl border border-[#102820]/10 bg-white/72 p-4 shadow-[0_20px_55px_rgba(7,27,29,0.12)] backdrop-blur-sm"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
              <img
                src={heatmapImage}
                alt="ResearchObs 2D heatmap base map"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
                loading="lazy"
                decoding="async"
              />

              <div className="pointer-events-none absolute inset-0">
                {heatmapCells.map((cell, index) => (
                  <motion.div
                    key={`${cell.left}-${cell.top}-${index}`}
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={
                      inView ? { opacity: cell.opacity, scale: 1 } : undefined
                    }
                    transition={{
                      duration: 0.38,
                      ease: [0.22, 1, 0.36, 1],
                      delay: cell.delay,
                    }}
                    className="absolute rounded-[0.08rem] border border-white/10"
                    style={{
                      left: cell.left,
                      top: cell.top,
                      width: cell.size,
                      height: cell.size,
                      backgroundColor: cell.color,
                      transform: "translate(-50%, -50%)",
                      boxShadow: `0 0 14px ${cell.color}20`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 22, scale: 0.92, rotate: 3 }}
            animate={
              inView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : undefined
            }
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.34,
            }}
            className="w-full max-w-xl overflow-hidden rounded-4xl border border-[#102820]/10 bg-white/72 p-4 shadow-[0_20px_55px_rgba(7,27,29,0.12)] backdrop-blur-sm"
          >
            <div className="aspect-square w-full overflow-hidden rounded-3xl bg-white">
              <Canvas
                camera={{ position: [0, 2, 4], fov: 34 }}
                gl={{ antialias: true, alpha: true }}
              >
                <Heatmap3DModel active={inView} />
              </Canvas>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
