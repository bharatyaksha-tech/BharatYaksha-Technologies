import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Icon from "./Icons.jsx";

const ease = [0.22, 1, 0.36, 1];
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, delay, ease },
});

/* A card that turns over to show the meaning. It flips on hover (CSS) and, on touch screens,
   on tap or with Enter / Space. */
function FlipCard({ part, word, text, tone, delay }) {
  const [flipped, setFlipped] = useState(false);
  const canHover = typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  return (
    <motion.article
      className={`flip flip-${tone} ${flipped ? "is-flipped" : ""}`}
      tabIndex={0}
      role="button"
      aria-label={`${word}. ${text}`}
      onClick={() => !canHover && setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      {...reveal(delay)}
    >
      <div className="flip-inner">
        <div className="flip-face flip-front">
          <span className="flip-kicker">{part}</span>
          <span className="flip-word">{word}</span>
          <span className="flip-hint">
            Meaning <Icon name="arrow" size={14} />
          </span>
        </div>
        <div className="flip-face flip-back">
          <h3>{word}</h3>
          <p>{text}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function About() {
  return (
    <section className="section has-photo" id="about">
      <div className="section-photo photo-agri" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="About us"
          title="India's guardian of technology"
          text="Bharatyaksha Technologies is an Indian technology company that builds intelligent systems. We design smart solutions that monitor, protect and automate, so that every machine, sensor and app works intelligently and safely."
        />

        <div className="name-grid">
          <FlipCard part="The name, part one" word="Bharat" tone="bharat" delay={0} text="India, our roots and the people we build for." />
          <FlipCard
            part="The name, part two"
            word="Yaksha"
            tone="bharat"
            delay={0.12}
            text="In Indian mythology, a guardian of treasures and nature, known for wisdom. In Karnataka, the Yaksha also lives on in the art form Yakshagana."
          />
          <motion.article className="together" {...reveal(0.24)}>
            <span className="equals">=</span>
            <div>
              <h3>Together</h3>
              <p>
                BharatYaksha means “India's guardian of technology”: a company that watches over, protects and improves
                the systems people depend on.
              </p>
            </div>
          </motion.article>
        </div>

        <div className="mv-grid">
          <motion.article className="mv-card mv-mission" {...reveal(0)}>
            <span className="mv-watermark" aria-hidden="true">
              <Icon name="globe" size={230} strokeWidth={1} />
            </span>
            <span className="mv-icon">
              <Icon name="globe" size={22} />
            </span>
            <span className="mv-label">Our mission</span>
            <p>
              To build reliable, affordable and intelligent technology that solves real problems for Indian industries,
              institutions and communities.
            </p>
          </motion.article>

          <motion.article className="mv-card mv-vision" {...reveal(0.12)}>
            <span className="mv-watermark" aria-hidden="true">
              <Icon name="spark" size={230} strokeWidth={1} />
            </span>
            <span className="mv-icon">
              <Icon name="spark" size={22} />
            </span>
            <span className="mv-label">Our vision</span>
            <p>
              To become India's trusted guardian of smart systems, where every machine, sensor and app works
              intelligently and safely.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
