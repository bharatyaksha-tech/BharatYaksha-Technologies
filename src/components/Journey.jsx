import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Icon from "./Icons.jsx";
import { JOURNEY } from "../data/content.js";

const ease = [0.22, 1, 0.36, 1];

/* Four steps joined by a line that draws itself as the section scrolls into view.
   It shows how agriculture, automation, software and mobile apps work as one system. */
export default function Journey() {
  return (
    <section className="section section-white" id="journey">
      <div className="container">
        <SectionHeading
          eyebrow="How it fits together"
          title="From the field to your phone"
          text="Every project we build follows the same path, from the sensor in the soil to the app in your hand."
        />

        <div className="journey">
          <div className="journey-line" aria-hidden="true">
            <motion.span
              className="journey-line-fill"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.6, ease }}
            />
          </div>

          {JOURNEY.map((step, i) => (
            <motion.div
              key={step.title}
              className="journey-step"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.15, ease }}
            >
              <span className="step-icon">
                <Icon name={step.icon} size={28} />
                <b>{i + 1}</b>
              </span>
              <div className="step-text">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
