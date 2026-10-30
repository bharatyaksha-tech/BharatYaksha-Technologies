import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, text, align = "center" }) {
  return (
    <motion.div
      className={`section-heading section-heading-${align}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      <span className={`heading-divider ${align === "center" ? "is-centered" : ""}`} aria-hidden="true" />
      {text && <p>{text}</p>}
    </motion.div>
  );
}
