// src/App.jsx

import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DeleteAccount from "./pages/DeleteAccount";
import TermsAndConditions from "./pages/TermsAndConditions";
import Contact from "./pages/Contact";

function PlaceholderPage({ title, text }) {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16 pt-24">
      <div>
        <h1 className="text-4xl font-black tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">{text}</p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#08110c] text-slate-100">
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/features" element={<Features />} />
        <Route
          path="/tutorials"
          element={<PlaceholderPage title="Tutorials" text="Coming soon!" />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <BottomBar />
    </div>
  );
}
