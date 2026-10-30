import { PILLARS } from "../data/content.js";

/* The list is repeated four times and the track moves by exactly half its width,
   so the loop is seamless on any screen width. */
const repeat = (list) => [...list, ...list, ...list, ...list];

export default function Marquee() {
  return (
    <section className="marquee" aria-label="Our focus areas">
      <div className="marquee-track">
        {repeat(PILLARS).map((item, i) => (
          <span key={i} className="marquee-chip" aria-hidden={i >= PILLARS.length}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
