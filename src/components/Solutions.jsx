import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Icon from "./Icons.jsx";
import { SOLUTIONS } from "../data/content.js";

const ease = [0.22, 1, 0.36, 1];
const TONES = ["navy"];

/* Each card tilts a few degrees toward the cursor (mouse only). On hover or keyboard focus a solid
   colour wipes up from the bottom, the text turns white, the icon tile inverts and the large faint
   watermark icon turns. */
function SolutionCard({ item, index }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const tiltX = useSpring(useMotionValue(0), { stiffness: 170, damping: 18 });
  const tiltY = useSpring(useMotionValue(0), { stiffness: 170, damping: 18 });

  const onMove = (e) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    tiltY.set(((e.clientX - r.left) / r.width - 0.5) * 8);
    tiltX.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
  };
  const onLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href="#contact"
      className={`sol-card wipe tone-${TONES[index % TONES.length]}`}
      style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1000 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease }}
    >
      <span className="wipe-fill" aria-hidden="true" />
      <span className="wipe-watermark" aria-hidden="true">
        <Icon name={item.icon} size={190} strokeWidth={1.1} />
      </span>

      <span className="sol-top">
        <span className="wipe-icon">
          <Icon name={item.icon} size={26} />
        </span>
        <span className="wipe-num">0{index + 1}</span>
      </span>

      <h3>{item.area}</h3>
      <p>{item.text}</p>

      <span className="wipe-cta">
        Enquire about this <Icon name="arrow" size={18} />
      </span>
    </motion.a>
  );
}

export default function Solutions() {
  return (
    <section className="section section-tint has-photo" id="solutions">
      <div className="section-photo photo-auto" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="Solutions across five areas"
          text="From factory floors and classrooms to farms and public portals, we bring hardware, software and AI together."
        />

        <div className="sol-grid">
          {SOLUTIONS.map((item, i) => (
            <SolutionCard key={item.key} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
