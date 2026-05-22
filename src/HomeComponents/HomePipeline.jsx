// src/homeComponents/HomePipeline.jsx

const pipelineItems = [
  {
    title: "Create animal profiles",
    description:
      "Custom animal profiles contain metadata about a species, its groups, and group members and ties it to ethogram structure made up of observers, behaviors, custom variables, and other components.",
    icon: <AnimalProfileIcon />,
  },
  {
    title: "Collect behavioral data",
    description:
      "Conduct focal or group scan observation using a custom animal profile. Enter momentary point behaviors, track continuous state behaviors, or record location data using the map input.",
    icon: <DataCollectionIcon />,
  },
  {
    title: "Cloud storage support",
    description:
      "Data files are always saved locally first for offline data collection, but you can save copies to Google Drive and Dropbox. Assigning cloud folders to groups allows you to rapidly sync your data to maximize data security.",
    icon: <CloudUploadIcon />,
  },
  {
    title: "Analyze your data",
    description:
      "Compile your data using our rapid reporting features and analyze trends within your observation. Conduct social network analysis using social distance level or analyze group members' most used locations by creating 2D or 3D maps.",
    icon: <StatisticsIcon />,
  },
];

export default function HomePipeline() {
  return (
    <section className="scroll-mt-24 bg-white px-6 py-20 text-[#071b1d] sm:py-24">
      <div className="mx-auto max-w-[92rem]">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-[#071b1d] sm:text-5xl lg:text-6xl">
            Start tracking behaviors by collecting data
          </h2>
        </div>

        <div className="mt-16 grid w-full gap-y-14 md:grid-cols-2 md:gap-x-12 md:gap-y-16 xl:grid-cols-4 xl:gap-x-0 xl:gap-y-0">
          {pipelineItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative min-w-0 px-6 text-center sm:px-8 lg:px-10 xl:px-12"
            >
              {index > 0 ? (
                <div className="pointer-events-none absolute left-0 top-10 hidden h-[76%] w-px bg-black/10 xl:block" />
              ) : null}

              <div className="mx-auto flex h-20 w-20 items-center justify-center text-[#5F7659]">
                {item.icon}
              </div>

              <h3 className="mt-7 text-xl font-black leading-tight tracking-tight text-[#071b1d] sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-5 text-base leading-8 text-[#24362f]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimalProfileIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-16 w-16 overflow-visible transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M17 44c0-10.3 6.3-17.6 15-17.6S47 33.7 47 44c0 7-5.2 11.5-10.1 8.9-2.8-1.4-6.1-1.4-8.9 0C22.1 55.5 17 51 17 44Z"
        fill="currentColor"
        className="origin-center transition-transform duration-300 ease-out group-hover:scale-105"
      />
      <circle
        cx="15.5"
        cy="28.5"
        r="5.8"
        fill="currentColor"
        className="transition-transform duration-300 ease-out group-hover:-translate-x-1.5 group-hover:-translate-y-1"
      />
      <circle
        cx="27"
        cy="20.5"
        r="6"
        fill="currentColor"
        className="transition-transform duration-300 ease-out group-hover:-translate-y-2"
      />
      <circle
        cx="41"
        cy="20.5"
        r="6"
        fill="currentColor"
        className="transition-transform duration-300 ease-out group-hover:-translate-y-2"
      />
      <circle
        cx="52.5"
        cy="28.5"
        r="5.8"
        fill="currentColor"
        className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1"
      />
    </svg>
  );
}

function DataCollectionIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-16 w-16 overflow-visible transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="14"
        y="10"
        width="36"
        height="44"
        rx="6"
        stroke="currentColor"
        strokeWidth="3.5"
        className="transition-transform duration-300 ease-out"
      />
      <path
        d="M24 20h16M24 30h16M24 40h10"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
      />
      <g
        className="origin-center transition-transform duration-300 ease-out group-hover:scale-125"
        style={{
          transformOrigin: "46px 44px",
          transformBox: "view-box",
        }}
      >
        <circle cx="46" cy="44" r="8" fill="currentColor" />

        <path
          d="M46 40v8M42 44h8"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          className="transition-opacity duration-200 ease-out group-hover:opacity-0"
        />

        <path
          d="M41.8 44 44.8 47 50.2 41"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
        />
      </g>
    </svg>
  );
}

function CloudUploadIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-16 w-16 overflow-visible transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 49h22c8 0 14-5 14-12 0-6.8-5-11.7-11.4-12.1C45 16.3 39.3 12 32 12c-8.8 0-15.9 6.3-17.1 14.7C8.7 27.4 4 32.2 4 38.4 4 44.3 9 49 15.2 49H22Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Syncing icon shown before hover */}
      <g
        className="-translate-y-1 origin-center transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:rotate-180 group-hover:scale-75 group-hover:opacity-0"
        style={{
          transformOrigin: "32px 34px",
          transformBox: "view-box",
        }}
      >
        <path
          d="M41 34c-1.1-4.2-4.7-7-9-7-3.2 0-6 1.5-7.8 3.9"
          stroke="currentColor"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <path
          d="M23.4 25.8v5.8h5.8"
          stroke="currentColor"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 38c1.1 4.2 4.7 7 9 7 3.2 0 6-1.5 7.8-3.9"
          stroke="currentColor"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <path
          d="M40.6 46.2v-5.8h-5.8"
          stroke="currentColor"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Upload icon formed on hover */}
      <g
        className="translate-y-4 scale-75 opacity-0 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-100 group-hover:opacity-100"
        style={{
          transformOrigin: "32px 34px",
          transformBox: "view-box",
        }}
      >
        <path
          d="M32 44V29"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M24.8 36.2 32 29l7.2 7.2"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function StatisticsIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-16 w-16 overflow-visible transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 50V18"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M12 50h40"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <rect
        x="18"
        y="34"
        width="8"
        height="10"
        rx="2"
        fill="currentColor"
        className="transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-y-125"
        style={{
          transformOrigin: "22px 44px",
          transformBox: "view-box",
        }}
      />
      <rect
        x="30"
        y="26"
        width="8"
        height="18"
        rx="2"
        fill="currentColor"
        className="transition-transform duration-300 ease-out group-hover:translate-y-0.5 group-hover:scale-y-90"
        style={{
          transformOrigin: "34px 44px",
          transformBox: "view-box",
        }}
      />
      <rect
        x="42"
        y="18"
        width="8"
        height="26"
        rx="2"
        fill="currentColor"
        className="transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-y-112"
        style={{
          transformOrigin: "46px 44px",
          transformBox: "view-box",
        }}
      />

      <path
        d="M18 22 C22 18 26 16 31 16 C36 16 39 18 43 21 C46 23 48 24 52 24"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        className="transition-opacity duration-300 ease-out group-hover:opacity-0"
      />

      <path
        d="M18 28 C25 27 32 23.5 38 18.5 C44 13.5 48 10.8 52 9.8"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        className="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
      />
    </svg>
  );
}
