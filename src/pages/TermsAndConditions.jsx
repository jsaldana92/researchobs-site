// src/pages/TermsOfUse.jsx

const intro =
  "These Terms govern your access to and use of ResearchObs. By downloading, accessing, or using the app, you agree to these Terms. You can access these Terms at any time in the app or at https://www.researchobs.com/#/terms-conditions.";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By downloading, accessing, or using ResearchObs, you agree to be bound by these Terms and Conditions. If you do not agree to these Terms, do not use the app. These Terms apply to all users, including individual users, researchers, students, animal care teams, organizations, project owners, project members, and anyone else who accesses or uses ResearchObs.",
  },
  {
    title: "2. About ResearchObs",
    body: "ResearchObs is designed to help users collect, organize, visualize, export, and manage behavioral observation data. The app may include tools for animal profiles, groups, members, behaviors, metadata, observation rows, rapid reports, maps, heat maps, social network outputs, local storage, exports, backups, and optional cloud upload features. ResearchObs is a tool for data collection and workflow support. It does not replace professional, scientific, institutional, veterinary, medical, ethical, or legal judgment.",
  },
  {
    title: "3. Eligibility and Accounts",
    body: "ResearchObs is not intended for children. You must be at least 18 years old, the age of majority where you live, or have appropriate authorization and supervision from a parent, guardian, institution, employer, or educational program to use the app. Some features may require an account. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.",
  },
  {
    title: "4. License to Use the App",
    body: "Subject to these Terms, you are granted a limited, non-exclusive, non-transferable, revocable license to use ResearchObs for lawful behavioral observation, data collection, data organization, review, export, and related purposes. You may not misuse the app, interfere with app functionality, attempt to bypass security measures, use the app for unlawful purposes, or use the app in a way that harms ResearchObs, other users, third-party services, animals, people, organizations, or systems.",
  },
  {
    title: "5. User Responsibilities",
    body: "You are solely responsible for the data you enter, collect, save, edit, export, upload, share, interpret, or rely on through ResearchObs. You are responsible for ensuring that your use of the app is lawful, ethical, accurate, appropriate, and authorized. You are responsible for reviewing and verifying your data, reports, exports, uploads, backups, settings, observation structures, project structures, maps, variables, labels, names, notes, and any other information you create or manage in the app.",
  },
  {
    title: "6. Research, Ethics, Consent, and Compliance",
    body: "If you use ResearchObs in a research, care, institutional, educational, welfare, human-subjects, animal-subjects, clinical, veterinary, organizational, or regulated setting, you are responsible for obtaining all required approvals, permissions, consent, review, training, supervision, and authorization. This may include, where applicable, institutional policies, ethics review, IRB review, IACUC review, animal care and use rules, privacy laws, data protection laws, workplace rules, facility policies, grant or sponsor requirements, and local, state, federal, or international laws. ResearchObs does not determine whether your project, observation, data collection, reporting, or analysis is compliant.",
  },
  {
    title: "7. User Data and Ownership",
    body: "You retain ownership of the observation data, files, notes, labels, names, metadata, images, maps, profiles, variables, and other content that you enter into ResearchObs. ResearchObs does not claim ownership of your user-entered observation data. You are responsible for managing, backing up, exporting, reviewing, deleting, and protecting your data. You are also responsible for ensuring that you have the right to collect, store, process, export, upload, or share any information you enter into the app.",
  },
  {
    title: "8. Local Processing and Rapid Reports",
    body: "ResearchObs may locally process user-entered data on your device to provide rapid reporting, summaries, visualizations, charts, heat maps, social network outputs, exports, and other app features. These reports and outputs are generated for convenience and exploratory review. ResearchObs does not upload your reports, summaries, observation rows, data files, or generated outputs to the ResearchObs cloud for internal review or analysis. Reports and outputs are only added to a user-selected third-party cloud location, such as Google Drive or Dropbox, when you manually choose to export or upload them.",
  },
  {
    title: "9. Internal App Analytics",
    body: "ResearchObs may collect limited information about how users engage with the app to improve reliability, usability, performance, and future features. Internal app analytics are not intended to collect the content of what you input, save, report, export, upload, or store. ResearchObs does not collect your actual observation lines, data files, species names, group names, group member names, observer names, custom variables, notes, comments, behavior entries, maps, reports, exports, or observation content as part of its own internal analytics. ResearchObs does not sell your data, app engagement data, observation data, reports, files, or user-entered content to third-party vendors, advertisers, data brokers, or companies.",
  },
  {
    title: "10. Local Storage, Backups, Exports, and Data Loss",
    body: "ResearchObs is designed around local-first data control, with optional export, backup, restore, and cloud upload tools. Local data may be lost if your device is damaged, lost, reset, cleared, updated, corrupted, or if the app is deleted or storage permissions change. Exports, backups, restores, and uploads may fail because of device issues, internet issues, storage limits, third-party service issues, permission changes, file conflicts, account problems, or user error. You are solely responsible for verifying that your data, backups, exports, uploads, and restored files are accurate, complete, readable, and safely stored.",
  },
  {
    title: "11. Third-Party Services",
    body: "ResearchObs may allow optional interaction with third-party services such as Google Drive, Dropbox, app stores, operating systems, authentication providers, analytics providers, or other external services. Third-party services are governed by their own terms, privacy policies, permissions, availability, limits, security practices, and account rules. ResearchObs is not responsible for third-party service outages, errors, data handling, security practices, policy changes, permission changes, account suspensions, file loss, upload failures, download failures, sharing behavior, or any other third-party action or omission.",
  },
  {
    title: "12. No Medical, Veterinary, Welfare, or Diagnostic Advice",
    body: "ResearchObs does not provide medical, veterinary, psychological, clinical, welfare-diagnostic, treatment, emergency, or health advice. The app does not diagnose, treat, prevent, predict, monitor, or cure any disease, disorder, injury, welfare condition, behavioral condition, mental health condition, medical condition, veterinary condition, or safety risk. Any health-related, veterinary, welfare-related, behavioral, clinical, safety, intervention, or treatment question should be directed to qualified professionals. Professional medical, veterinary, clinical, welfare, institutional, or emergency services should always be sought when dealing with health-related questions, urgent concerns, or possible harm.",
  },
  {
    title: "13. Reports, Outputs, and Interpretation",
    body: "Reports, charts, summaries, heat maps, social network outputs, exported files, calculated values, and other app-generated outputs are provided for convenience and exploratory review only. They may depend on user-entered data, user-defined settings, device conditions, app configuration, export choices, and the limits of the app. They should not be treated as final statistical analysis, professional assessment, diagnostic output, welfare determination, research conclusion, clinical interpretation, or operational recommendation. Users are solely responsible for verifying all outputs and conducting appropriate analysis outside the app before relying on results for research, animal care, publication, compliance, grant reporting, professional decisions, health-related decisions, or any other important use.",
  },
  {
    title: "14. User Content and Prohibited Uses",
    body: "You agree not to use ResearchObs to create, collect, store, upload, export, share, or process content that is unlawful, harmful, abusive, defamatory, infringing, invasive of privacy, malicious, unauthorized, misleading, or otherwise inappropriate. You may not enter or upload personal information, sensitive information, images, recordings, names, locations, notes, or other data unless you have the legal and ethical right to do so. You may not use ResearchObs to violate the rights of any person, organization, institution, facility, animal care program, research program, or third party.",
  },
  {
    title: "15. Intellectual Property",
    body: "ResearchObs, including its source code, object code, software architecture, app design, user interface, workflows, documentation, text, graphics, icons, logos, names, branding, visual identity, and other intellectual property, is owned by ResearchObs or its creator unless otherwise stated. You may not copy, modify, edit, reverse engineer, decompile, distribute, sell, sublicense, publish, reproduce, alter, create derivative works from, or otherwise use any ResearchObs source code or intellectual property without prior written permission. This restriction includes the ResearchObs name, logo, branding, and related visual materials. All rights not expressly granted to you are reserved.",
  },
  {
    title: "16. Feedback",
    body: "If you submit suggestions, comments, ideas, bug reports, feature requests, or other feedback about ResearchObs, you grant ResearchObs permission to use that feedback to improve, modify, market, develop, or support the app without compensation, obligation, or restriction. You should not submit confidential or proprietary information as feedback unless a separate written agreement applies.",
  },
  {
    title: "17. App Availability, Changes, and Updates",
    body: "ResearchObs may be updated, changed, limited, interrupted, suspended, or discontinued at any time. Features may be added, removed, redesigned, renamed, restricted, or modified. Compatibility with specific devices, operating systems, cloud services, app stores, permissions, or third-party services is not guaranteed. You are responsible for maintaining your device, app version, account access, storage permissions, backups, exports, and third-party service access.",
  },
  {
    title: "18. Disclaimer of Warranties",
    body: "ResearchObs is provided “as is” and “as available,” without warranties of any kind, whether express, implied, statutory, or otherwise. To the fullest extent permitted by law, ResearchObs disclaims all warranties, including warranties of accuracy, reliability, availability, fitness for a particular purpose, merchantability, non-infringement, data preservation, error-free operation, uninterrupted access, compatibility, or suitability for research, care, welfare, medical, veterinary, clinical, professional, educational, institutional, operational, or regulatory use.",
  },
  {
    title: "19. Limitation of Liability",
    body: "To the fullest extent permitted by law, ResearchObs and its creator, operators, contributors, affiliates, service providers, and representatives are not liable for any direct, indirect, incidental, consequential, special, exemplary, punitive, or other damages arising from or related to your use of or inability to use the app. This includes, without limitation, loss of data, inaccurate data, inaccurate reports, failed backups, failed uploads, failed exports, device issues, third-party service issues, research errors, care decisions, welfare decisions, health-related decisions, lost profits, lost opportunities, reputational harm, compliance issues, publication issues, project delays, or reliance on app-generated outputs.",
  },
  {
    title: "20. Indemnification",
    body: "You agree to defend, indemnify, and hold harmless ResearchObs and its creator, operators, contributors, affiliates, service providers, and representatives from and against any claims, damages, losses, liabilities, costs, expenses, or demands, including reasonable attorneys’ fees, arising from or related to your use or misuse of the app, your data, your content, your reports, your exports, your uploads, your interpretation of outputs, your violation of these Terms, your violation of laws or institutional rules, your violation of third-party rights, or your use of third-party services.",
  },
  {
    title: "21. Termination",
    body: "ResearchObs may suspend, restrict, or terminate your access to the app or specific features if you violate these Terms, misuse the app, create risk, violate applicable law, interfere with app operations, or engage in behavior that harms ResearchObs, other users, third-party services, people, animals, organizations, institutions, systems, or data. You may stop using the app at any time. You may request that your ResearchObs account and ResearchObs-controlled data be deleted at https://www.researchobs.com/#/delete-account.",
  },
  {
    title: "22. Governing Law",
    body: "These Terms are governed by the laws of Georgia, United States, without regard to conflict-of-law principles. You are responsible for complying with all laws, regulations, institutional rules, facility policies, and third-party service terms that apply to your use of ResearchObs.",
  },
  {
    title: "23. Severability",
    body: "If any part of these Terms is found to be invalid, unlawful, or unenforceable, the remaining parts will remain in effect to the fullest extent permitted by law. The invalid, unlawful, or unenforceable part will be interpreted or replaced in a way that most closely reflects the original intent while remaining enforceable.",
  },
  {
    title: "24. Entire Agreement",
    body: "These Terms, together with any applicable Privacy Policy, in-app notices, feature-specific terms, or written agreements that apply to ResearchObs, form the agreement between you and ResearchObs regarding your use of the app. Failure to enforce any part of these Terms does not waive the right to enforce that part later. Continued use of ResearchObs after changes to these Terms means you accept the updated Terms.",
  },
];

function LegalSection({ title, body }) {
  return (
    <section className="border-t border-slate-200 pt-8">
      <h2 className="text-2xl font-black tracking-tight text-slate-950">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-700">{body}</p>
    </section>
  );
}

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#071b1d] via-[#102820] to-[#3f5138] px-6 py-24 text-white sm:py-28">
      <article className="mx-auto max-w-5xl border border-white/35 bg-[#F8F7F3] p-6 text-slate-950 shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5F7659]">
          Terms & Conditions
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          ResearchObs Terms & Conditions
        </h1>

        <p className="mt-4 text-sm font-bold text-slate-500">
          Effective date: April 25, 2026
        </p>

        <p className="mt-8 text-lg leading-8 text-slate-700">{intro}</p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <LegalSection
              key={section.title}
              title={section.title}
              body={section.body}
            />
          ))}
        </div>
      </article>
    </main>
  );
}
