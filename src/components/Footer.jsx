import { NAV_LINKS, SOLUTIONS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, LOCATION } from "../data/content.js";
import Logo from "./Logo.jsx";
import Icon from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <a href="#top" className="footer-logo" aria-label="BharatYaksha Technologies home">
            <Logo variant="mark" />
            <span>
              <strong>BharatYaksha</strong>
              <small>Technologies</small>
            </span>
          </a>
          <p>
            Intelligent systems that monitor, protect and automate, built in Bharat for industries, institutions and
            communities.
          </p>
          <span className="footer-badge">
            <i aria-hidden="true" /> Made in Bharat
          </span>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <h4>Company</h4>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer-col">
          <h4>Focus areas</h4>
          {SOLUTIONS.map((s) => (
            <a key={s.key} href="#solutions">
              {s.area}
            </a>
          ))}
        </div>

        <div className="footer-col footer-contact">
          <h4>Get in touch</h4>
          <a href={`mailto:${CONTACT_EMAIL}`}>
            <Icon name="mail" size={18} /> {CONTACT_EMAIL}
          </a>
          <a href={`tel:${CONTACT_PHONE_HREF}`}>
            <Icon name="phone" size={18} /> {CONTACT_PHONE}
          </a>
          <span>
            <Icon name="pin" size={18} /> {LOCATION}
          </span>
        </div>
      </div>

      <div className="container footer-wordmark" aria-hidden="true">
        BharatYaksha
      </div>

      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} BharatYaksha Technologies. All rights reserved.</span>
        <span className="footer-tagline">Guarding India's smart future.</span>
        <a href="#top" className="back-to-top" aria-label="Back to top">
          <Icon name="arrow" size={18} />
        </a>
      </div>
    </footer>
  );
}
