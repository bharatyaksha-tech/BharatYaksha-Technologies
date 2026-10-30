import { useEffect } from "react";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Solutions from "./components/Solutions.jsx";
import Values from "./components/Values.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

/* In-page links (#about, #contact, #top ...) scroll to their section without adding "#section" to the
   address bar. The URL stays clean, and any "#section" in a pasted link still works on load. */
function useCleanAnchors() {
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = e.target.closest && e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      const target = id === "top" || id === "" ? document.documentElement : document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (id === "top" || id === "") {
        window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
      } else {
        target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
        // move keyboard focus to the section so screen-reader and keyboard users land there too
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
      // drop any "#section" already in the address bar
      if (window.location.hash) window.history.replaceState(null, "", window.location.pathname + window.location.search);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

export default function App() {
  useCleanAnchors();

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Solutions />
        <Values />
        <section className="cta-banner">
          <div className="container cta-inner">
            <div>
              <h2>Where hardware meets intelligence.</h2>
              <p>Tell us the problem you want solved. We'll design a system that fits your industry, institution or community.</p>
            </div>
            <a href="#contact" className="btn btn-light">
              Start a conversation
            </a>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
