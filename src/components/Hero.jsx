import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Icon from "./Icons.jsx";

const HEADLINE = [["Intelligent", "systems."], ["Built", "in", "Bharat."]];

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease },
  }),
};

export default function Hero() {
  const reduce = useReducedMotion();
  let wordOrder = 0;

  return (
    <section className="hero" id="top">
      {/* Full-bleed background photo (a microcontroller chip on a Raspberry Pi Pico board),
          toned to the brand navy. Public domain (CC0) - see README for the source. */}
      <div className="hero-bg" aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg-1920.jpg`}
          srcSet={`${import.meta.env.BASE_URL}images/hero-bg-1280.jpg 1280w, ${import.meta.env.BASE_URL}images/hero-bg-1920.jpg 1920w`}
          sizes="100vw"
          alt=""
          width="1897"
          height="1187"
          decoding="async"
          fetchpriority="high"
        />
        <span className="hero-bg-tint" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.span className="eyebrow" variants={fadeUp} initial="hidden" animate="show" custom={0}>
            Monitor · Protect · Automate
          </motion.span>

          <h1 className="hero-title" aria-label="Intelligent systems. Built in Bharat.">
            {HEADLINE.map((line, lineIndex) => (
              <span className="hero-line" key={lineIndex} aria-hidden="true">
                {line.map((word, wordIndex) => {
                  const order = wordOrder++;
                  const accent = word === "Built" || word === "in" || word === "Bharat.";
                  return (
                    <React.Fragment key={word}>
                      <span className="word-mask">
                        <motion.span
                          className={`word ${accent ? "accent-word" : ""}`}
                          initial={reduce ? false : { y: "105%" }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.9, delay: 0.35 + order * 0.09, ease }}
                        >
                          {word}
                        </motion.span>
                      </span>
                      {wordIndex < line.length - 1 && " "}
                    </React.Fragment>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.p className="lead" variants={fadeUp} initial="hidden" animate="show" custom={2}>
            We connect hardware, software and artificial intelligence to monitor, protect and automate the systems
            people depend on, helping industries, institutions, farmers and businesses work smarter.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="show" custom={3}>
            <a href="#solutions" className="btn btn-primary">
              Explore solutions <Icon name="arrow" size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Talk to our team
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
