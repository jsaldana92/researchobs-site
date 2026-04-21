import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/features"
          element={
            <PlaceholderPage
              title="Features"
              text="This page can stay simple for now while we focus on the homepage."
            />
          }
        />
        <Route
          path="/about"
          element={
            <PlaceholderPage
              title="About"
              text="This page can stay simple for now while we focus on the homepage."
            />
          }
        />
        <Route
          path="/contact"
          element={
            <PlaceholderPage
              title="Contact"
              text="This page can stay simple for now while we focus on the homepage."
            />
          }
        />
      </Routes>
    </div>
  );
}
