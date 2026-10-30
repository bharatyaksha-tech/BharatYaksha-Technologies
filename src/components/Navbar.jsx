import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../data/content.js";
import Icon from "./Icons.jsx";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Bharatyaksha Technologies home" onClick={() => setOpen(false)}>
          <Logo variant="mark" />
          <span className="brand-text">
            <strong>BharatYaksha</strong>
            <small>Technologies</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href ? "is-active" : ""}`}
              aria-current={active === link.href ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary btn-sm">
            Get in touch
          </a>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            aria-label="Mobile"
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
              Get in touch
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
