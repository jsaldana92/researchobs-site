import { motion } from "framer-motion";
import { useState } from "react";

const speciesTabs = [
  {
    id: "species",
    label: "Species",
    title: "Species-specific profiles",
    sections: [
      {
        header: "Separate profile systems",
        text: "Create a dedicated profile for each species, with its own groups, members, behaviors, variables, and observation settings.",
      },
    ],
  },
  {
    id: "groups",
    label: "Groups",
    title: "Organize animals by group",
    sections: [
      {
        header: "Real-world group structure",
        text: "Divide each species into observation groups so members, maps, observations, and sync settings stay organized by the animals that are actually observed together.",
      },
    ],
  },
  {
    id: "members",
    label: "Members",
    title: "Track individual subjects",
    sections: [
      {
        header: "Member-level records",
        text: "Add each group member as an individual subject so repeated observations can stay tied to the same animal across sessions.",
      },
    ],
  },
  {
    id: "age",
    label: "Age",
    title: "Flexible age metadata",
    sections: [
      {
        header: "Date of birth",
        text: "Store exact birth dates for known individuals so age can be calculated without manually updating each profile.",
      },
      {
        header: "Age categories",
        text: "Use custom life-stage categories when exact dates are unknown or when broad developmental classes are more useful for analysis.",
      },
    ],
  },
  {
    id: "sex",
    label: "Sex",
    title: "Custom sex categories",
    sections: [
      {
        header: "Species-aware options",
        text: "Use default sex categories or define species-specific options so member metadata matches the population being observed.",
      },
    ],
  },
  {
    id: "rank",
    label: "Rank",
    title: "Rank and hierarchy fields",
    sections: [
      {
        header: "Absolute rank",
        text: "Assign a single linear rank to each member when the full group has one shared hierarchy.",
      },
      {
        header: "Sex-based rank",
        text: "Track rank within sex-based hierarchies when male and female dominance orders need to be recorded separately.",
      },
    ],
  },
];

const ethogramTabs = [
  {
    id: "behaviors",
    label: "Behaviors",
    title: "Point and state behaviors",
    sections: [
      {
        header: "Point behaviors",
        text: "Record discrete events as timestamped rows, ideal for behaviors that happen at a single moment.",
      },
      {
        header: "State behaviors",
        text: "Track behaviors with a start and end so duration-based data can be captured during focal or group scan observations.",
      },
    ],
  },
  {
    id: "variables",
    label: "Variables",
    title: "Species-level variables",
    sections: [
      {
        header: "Categorical",
        text: "Add predefined choices such as estrus, weather, or study condition so observers can select consistent values before a session begins.",
      },
      {
        header: "Numeric",
        text: "Collect number-based context such as temperature, count, score, or other measurements that need structured numeric input.",
      },
      {
        header: "String",
        text: "Use free-text variables for flexible session details that do not fit into fixed categories or numeric fields.",
      },
    ],
  },
  {
    id: "observers",
    label: "Observers",
    title: "Observer rosters",
    sections: [
      {
        header: "Predefined collectors",
        text: "Build an active observer list so each observation can store who collected the data without relying on free-typed names.",
      },
    ],
  },
  {
    id: "social-distance",
    label: "Social Distance",
    title: "Social distance options",
    sections: [
      {
        header: "Behavior-linked proximity",
        text: "Create custom distance categories and attach them to social behaviors so proximity context is written directly into observation rows.",
      },
    ],
  },
  {
    id: "visibility",
    label: "Visibility",
    title: "Visibility prompts",
    sections: [
      {
        header: "Visible or not visible",
        text: "Require observers to mark visibility before committing data, making it easier to separate true behavior records from not-visible moments.",
      },
    ],
  },
  {
    id: "ad-lib",
    label: "Ad Lib",
    title: "Ad lib point entries",
    sections: [
      {
        header: "Flexible event capture",
        text: "Enable ad lib point entries when observers need to record unexpected events outside the standard timed behavior flow.",
      },
    ],
  },
];

function VerticalTabLabel({ label, active }) {
  if (active) {
    return (
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5F7659]">
        {label}
      </span>
    );
  }

  return (
    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#29423B] [writing-mode:vertical-rl] rotate-180 max-[560px]:[writing-mode:horizontal-tb] max-[560px]:rotate-0">
      {label}
    </span>
  );
}

function AccordionShowcase({ tabs, defaultId }) {
  const [activeId, setActiveId] = useState(defaultId);
  const activeIndex = Math.max(
    0,
    tabs.findIndex((tab) => tab.id === activeId),
  );

  return (
    <div className="flex h-120 overflow-hidden bg-transparent shadow-[0_28px_90px_rgba(0,0,0,0.34)] max-[560px]:h-auto max-[560px]:flex-col">
      {tabs.map((tab, index) => {
        const active = index === activeIndex;
        const hasBackgroundImage = Boolean(tab.backgroundImage);
        const sections =
          tab.sections?.length > 0
            ? tab.sections
            : [{ header: "Overview", text: tab.description }];

        return (
          <motion.button
            layout
            key={tab.id}
            type="button"
            onClick={() => setActiveId(tab.id)}
            aria-pressed={active}
            transition={{
              layout: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className={`group relative min-w-0 overflow-hidden border-y border-r border-white/35 text-left transition-[background-color,border-color,color] duration-300 ease-out first:border-l focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7ECE7]/80 ${
              active
                ? "flex flex-[1_1_0%] items-start bg-[#F8F7F3] text-slate-950 max-[560px]:min-h-120 max-[560px]:flex-none"
                : "flex flex-[0_0_3.5rem] items-center justify-center bg-[#E7ECE7]/95 text-[#29423B] hover:bg-[#F8F7F3] max-[560px]:h-14 max-[560px]:w-full max-[560px]:flex-none max-[560px]:justify-start max-[560px]:px-5"
            }`}
          >
            {active ? (
              <>
                {hasBackgroundImage ? (
                  <img
                    src={tab.backgroundImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-br from-[#FAFAF6] via-[#E7ECE7] to-[#BCCDB5]" />
                )}

                {hasBackgroundImage ? (
                  <div className="absolute inset-0 bg-linear-to-br from-black/78 via-black/54 to-black/30" />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-br from-white/65 via-white/20 to-transparent" />
                )}

                <motion.div
                  layout="position"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    delay: 0.08,
                  }}
                  className="relative z-10 flex h-full w-full min-w-0 flex-col justify-start p-6 sm:p-8"
                >
                  <h3
                    className={`max-w-2xl text-3xl font-black tracking-tight sm:text-4xl ${
                      hasBackgroundImage ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {tab.title}
                  </h3>

                  {tab.subtitle ? (
                    <p
                      className={`mt-4 max-w-3xl text-base font-semibold leading-7 ${
                        hasBackgroundImage ? "text-white/82" : "text-slate-700"
                      }`}
                    >
                      {tab.subtitle}
                    </p>
                  ) : null}

                  <div className="mt-16 grid gap-5 sm:mt-20">
                    {sections.map((section) => (
                      <div key={section.header}>
                        <h4
                          className={`text-xs font-semibold uppercase tracking-[0.28em] ${
                            hasBackgroundImage
                              ? "text-[#b8c9b4]"
                              : "text-[#5F7659]"
                          }`}
                        >
                          {section.header}
                        </h4>

                        <p
                          className={`mt-2 max-w-3xl text-sm leading-7 sm:text-base ${
                            hasBackgroundImage
                              ? "text-white/74"
                              : "text-slate-700"
                          }`}
                        >
                          {section.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
            ) : (
              <motion.div layout="position">
                <VerticalTabLabel label={tab.label} active={false} />
              </motion.div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

export default function FeaturesAnimalProfileSection() {
  return (
    <section className="overflow-hidden bg-linear-to-br from-[#071b1d] via-[#102820] to-[#3f5138] px-6 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b8c9b4]">
            Animal Profiles
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build custom species and ethogram systems
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b8c9b4]">
              Species structure
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-tight text-white">
              From species to individual members
            </h3>

            <p className="mt-4 text-base leading-7 text-white/72">
              Start with a species profile, organize animals into groups, then
              add individual members with age, sex, and rank information that
              can support later filtering and analysis.
            </p>
          </div>

          <AccordionShowcase tabs={speciesTabs} defaultId="species" />
        </div>

        <div className="mt-20 grid gap-8 lg:mt-10 lg:grid-cols-[1.32fr_0.68fr] lg:items-center">
          <div className="max-lg:order-2">
            <AccordionShowcase tabs={ethogramTabs} defaultId="behaviors" />
          </div>

          <div className="max-w-md max-lg:order-1 lg:justify-self-end">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b8c9b4]">
              Ethogram structure
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-tight text-white">
              Match the app to your protocol
            </h3>

            <p className="mt-4 text-base leading-7 text-white/72">
              Define the behaviors, variables, observers, visibility states, and
              social context fields that make your observations useful beyond
              simple note-taking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
