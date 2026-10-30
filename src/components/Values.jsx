import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { VALUES } from "../data/content.js";

const TONES = ["navy"];

/* Same colour-wipe behaviour as the solution cards, in a smaller card. */
export default function Values() {
  return (
    <section className="section has-photo" id="values">
      <div className="section-photo photo-seri" aria-hidden="true" />
      <div className="container">
        <SectionHeading eyebrow="Core values" title="What guides every system we build" />

        <div className="val-grid">
          {VALUES.map((v, i) => (
            <motion.article
              key={v.title}
              className={`val-card wipe tone-${TONES[i % TONES.length]}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="wipe-fill" aria-hidden="true" />
              <span className="wipe-num val-num">0{i + 1}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
              <span className="val-bar" aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
