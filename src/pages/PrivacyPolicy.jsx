// src/pages/PrivacyPolicy.jsx

const intro =
  "This Privacy Policy explains how ResearchObs handles account information, local data, app analytics, crash diagnostics, optional cloud features, and user-selected exports. You can access this Privacy Policy at any time in the app or at https://www.researchobs.org/privacy-policy.";

const sections = [
  {
    title: "1. Introduction",
    body: "This Privacy Policy explains how ResearchObs handles information when you use the app. ResearchObs is designed to support behavioral observation, data collection, local organization, rapid reporting, exports, backups, optional cloud features, and related workflows. By using ResearchObs, you acknowledge that you are responsible for deciding what information to enter, save, export, upload, back up, sync, share, or delete.",
  },
  {
    title: "2. Local-First Data Control",
    body: "ResearchObs is designed around local-first data control. Observation data, profile data, reports, maps, images, exports, backups, and user-created records are stored on your device unless you choose to export, upload, back up, restore, sync, or share them through an available feature. You are responsible for managing your device, local storage, backups, exports, uploads, and any files you create or share.",
  },
  {
    title: "3. ResearchObs Cloud",
    body: "ResearchObs uses Amazon Web Services for account authentication and backend services. In this Privacy Policy, these AWS-backed ResearchObs services are referred to as “ResearchObs Cloud.” Creating an account requires an email address, email verification, and password-based authentication. Beyond account authentication, use of ResearchObs Cloud features such as Send to Profile, restore, shared projects, project membership, cloud-backed project settings, profile backup, or project collaboration is optional.",
  },
  {
    title: "4. Optional ResearchObs Cloud Features",
    body: "If you choose to use optional ResearchObs Cloud features, the information you send may include account identifiers, profile records, project records, shared project records, project membership, invitations, roles, accepted policy or version information, group structures, behavior templates, map settings, cloud folder settings, timestamps, and related metadata needed to provide those features. Depending on what you enter into the app, profile or project records may include names, labels, group names, group member names, species names, behavior names, map labels, settings, or other user-created information. You are responsible for reviewing what you choose to send to ResearchObs Cloud.",
  },
  {
    title: "5. Information You Enter Into the App",
    body: "You decide what information to enter into ResearchObs. The app does not require you to enter personal information, sensitive information, human-subject information, health information, precise locations, confidential records, or identifying names. If you choose to enter, save, export, upload, sync, or share personal, sensitive, regulated, confidential, health-related, institutional, human-subject, animal-care, or research-related information, you are responsible for ensuring that you have the legal, ethical, institutional, and professional authority to do so.",
  },
  {
    title: "6. Local Processing for Reports and Visualizations",
    body: "ResearchObs may locally process user-entered data on your device to provide rapid reports, summaries, visualizations, charts, heat maps, social network outputs, exports, and other review tools. These locally generated reports and outputs are not uploaded to ResearchObs Cloud for internal review, internal analytics, or sale. They are only uploaded to a user-selected third-party cloud location, such as Google Drive or Dropbox, when you manually choose to export or upload them.",
  },
  {
    title: "7. Firebase Analytics",
    body: "ResearchObs uses Firebase Analytics to understand how users engage with the app and to improve reliability, usability, performance, and feature design. Analytics may include information such as screens or features used, app interactions, device or platform information, approximate timing, app version, and general usage patterns. Firebase Analytics is not used to collect the contents of your observation data, profile records, reports, exports, saved files, maps, notes, or actual lines of data.",
  },
  {
    title: "8. Crash Logs and Diagnostics",
    body: "ResearchObs may use crash reporting tools, such as Firebase Crashlytics, to identify and fix crashes, errors, and performance issues. Crash logs may include technical information such as device type, operating system version, app version, time of crash, error traces, and diagnostic information. Crash logs are not intended to include user-entered observation content, animal profile names, species names, group names, group member names, observer names, notes, reports, exported files, or actual lines of data. ResearchObs is designed to avoid manually logging user-entered observation or profile content for crash diagnostics.",
  },
  {
    title: "9. Information Not Collected for Internal Analytics",
    body: "ResearchObs does not collect the contents of your observation data for internal analytics. This means ResearchObs does not collect species names, group names, group member names, observer names, custom variables, notes, comments, behavior entries, observation rows, maps, reports, exported files, or actual lines of data as part of internal analytics. Optional cloud features may process profile, project, or file data that you choose to send, but that is separate from internal analytics.",
  },
  {
    title: "10. No Sale of Data",
    body: "ResearchObs does not sell your personal information, account information, app engagement data, crash data, observation data, profile data, reports, exported files, or user-entered content to third-party vendors, advertisers, data brokers, or companies. ResearchObs does not use your observation content, reports, exported files, or user-entered data for advertising or third-party marketing.",
  },
  {
    title: "11. Google Drive, Dropbox, and Third-Party Uploads",
    body: "When you manually choose to upload, export, back up, sync, or share files to Google Drive, Dropbox, or another third-party service, the selected files are transferred to that third-party service and are governed by that service’s own terms, privacy policy, permissions, sharing settings, account settings, and security practices. ResearchObs does not control how Google Drive, Dropbox, or other third-party services process, store, share, retain, or protect files after upload. You are responsible for choosing the correct destination folder, reviewing sharing permissions, managing access, and verifying that uploaded files are accurate and complete.",
  },
  {
    title: "12. Shared Projects and Collaboration Features",
    body: "If you use shared projects or collaboration features, ResearchObs Cloud may process project membership, invitations, roles, project settings, accepted policy or version information, cloud folder settings, user identifiers, timestamps, and related metadata needed to support those features. Project owners and project members are responsible for deciding what information they add to shared projects and for ensuring that project use complies with applicable laws, ethical requirements, institutional rules, facility policies, and third-party service terms.",
  },
  {
    title: "13. Device Permissions",
    body: "ResearchObs may request device permissions when needed for app features, such as selecting images, importing files, exporting files, uploading files, connecting to cloud services, using account features, saving files, or generating app outputs. You can control permissions through your device settings. Disabling permissions may limit app functionality. ResearchObs is designed to request permissions for app features, not to collect unnecessary data for internal analytics.",
  },
  {
    title: "14. Sensitive, Regulated, Health, or Research Data",
    body: "ResearchObs is not designed to require medical, veterinary, clinical, diagnostic, treatment, emergency, health decision-making, human-subject, or sensitive personal information. Users should avoid entering health-related, sensitive, confidential, regulated, or identifying information unless they are authorized to do so and understand the privacy, legal, ethical, institutional, and professional responsibilities that may apply. You are responsible for determining whether your use of ResearchObs requires consent, review, approval, supervision, privacy protections, or other safeguards.",
  },
  {
    title: "15. Research, Welfare, and Professional Use",
    body: "If you use ResearchObs in a research, animal care, welfare, institutional, educational, organizational, human-subjects, animal-subjects, veterinary, clinical, or regulated setting, you are responsible for complying with all applicable laws, regulations, ethical standards, institutional policies, facility policies, consent requirements, privacy requirements, data protection requirements, and professional obligations. ResearchObs does not determine whether your data collection, storage, reporting, exporting, uploading, analysis, or sharing is lawful, ethical, valid, compliant, or appropriate.",
  },
  {
    title: "16. Data Retention and Deletion",
    body: "Local data remains on your device until you delete it, overwrite it, clear app storage, uninstall the app, restore from a backup, or otherwise remove it. Files uploaded to Google Drive, Dropbox, or other third-party services remain subject to those services and your account settings. ResearchObs Cloud account, profile, project, membership, and backend data may be retained as needed to provide services, maintain security, troubleshoot problems, comply with legal obligations, enforce terms, or support account and project features. You may request that your ResearchObs account and ResearchObs-controlled data be deleted at https://www.researchobs.org/delete-account. You may also contact ResearchObs with privacy-related requests.",
  },
  {
    title: "17. Data Security",
    body: "ResearchObs uses reasonable technical and organizational measures designed to protect data handled by the app and related services. However, no app, device, network, cloud service, account system, export, upload, backup, restore, or storage system can be guaranteed to be completely secure. You are responsible for protecting your device, login credentials, cloud accounts, exported files, backups, shared folders, and any copies of data you create or distribute.",
  },
  {
    title: "18. Children’s Privacy",
    body: "ResearchObs is not intended for children. ResearchObs does not knowingly collect personal information from children. If you believe a child has provided personal information through ResearchObs, contact ResearchObs so the issue can be reviewed.",
  },
  {
    title: "19. International Availability and Regional Privacy Rights",
    body: "ResearchObs may be available to users in different regions and is not limited to users in the United States. Depending on where you live, you may have rights to access, correct, delete, restrict, or object to certain processing of personal information. You may contact ResearchObs to make a privacy-related request. You are also responsible for complying with the laws and requirements that apply to your location, organization, project, data, and use of the app.",
  },
  {
    title: "20. Google Play and Amazon Appstore Data Safety Summary",
    body: "For app store privacy and data safety disclosures, ResearchObs may collect or process different categories of data depending on how you use the app. Account information may include email address and authentication-related information used for sign-up, login, verification, and account security. App activity and diagnostics may include feature usage, screen engagement, app interactions, crash logs, diagnostics, performance information, device or platform information, and app version information used for analytics, troubleshooting, reliability, and feature improvement. User-provided profile or project information may include profile records, project membership, roles, invitations, cloud folder settings, group structures, behavior templates, map settings, and related metadata only when you choose to use optional ResearchObs Cloud profile, restore, shared project, or collaboration features. User-selected files and exports may include observation files, reports, backups, maps, images, or exported files only when you choose to create, export, upload, back up, restore, sync, or share them. ResearchObs does not sell user data, does not collect observation content for internal analytics, and does not use observation content for advertising.",
  },
  {
    title: "21. Changes to This Privacy Policy",
    body: "ResearchObs may update this Privacy Policy from time to time. The effective date will be updated when changes are made. Continued use of ResearchObs after updates means you acknowledge the updated Privacy Policy. If you do not agree with the updated Privacy Policy, you should stop using ResearchObs.",
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

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#071b1d] via-[#102820] to-[#3f5138] px-6 py-24 text-white sm:py-28">
      <article className="mx-auto max-w-5xl border border-white/35 bg-[#F8F7F3] p-6 text-slate-950 shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5F7659]">
          Privacy Policy
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          ResearchObs Privacy Policy
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
