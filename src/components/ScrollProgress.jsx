import { motion, useScroll, useSpring } from "framer-motion";

/* Thin saffron bar at the top of the page that fills as the visitor scrolls. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
