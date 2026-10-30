import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icons.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, LOCATION, INTEREST_OPTIONS } from "../data/content.js";

const EMPTY = { name: "", organisation: "", email: "", phone: "", interest: "", message: "" };
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!isEmail(form.email.trim())) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Please tell us a little about your need.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus({ type: "error", text: "Please fix the highlighted fields." });
      return;
    }

    const body = [
      `Name: ${form.name}`,
      `Organisation: ${form.organisation || "-"}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "-"}`,
      `Interested in: ${form.interest || "-"}`,
      "",
      form.message,
    ].join("\n");

    const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;

    setStatus({ type: "success", text: "Thank you! Your mail app should open with your message." });
    setForm(EMPTY);
  };

  const field = (name, label, props = {}) => (
    <label className={`field ${errors[name] ? "has-error" : ""}`}>
      <span>
        {label}
        {props.required && <em>*</em>}
      </span>
      <input name={name} value={form[name]} onChange={update} {...props} />
      {errors[name] && <small className="error-text">{errors[name]}</small>}
    </label>
  );

  return (
    <section className="section section-tint has-photo" id="contact">
      <div className="section-photo photo-soft" aria-hidden="true" />
      <div className="container contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Contact</span>
          <h2>Let's build something intelligent together</h2>
          <p>
            Whether you are an industry, an institution, a farmer or a business, we would like to hear from you.
            Share your requirement and our team will get back to you.
          </p>

          <ul className="contact-list">
            <li>
              <span className="li-icon">
                <Icon name="mail" size={20} />
              </span>
              <div>
                <small>Email</small>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </li>
            <li>
              <span className="li-icon">
                <Icon name="phone" size={20} />
              </span>
              <div>
                <small>Phone</small>
                <a href={`tel:${CONTACT_PHONE_HREF}`}>{CONTACT_PHONE}</a>
              </div>
            </li>
            <li>
              <span className="li-icon">
                <Icon name="pin" size={20} />
              </span>
              <div>
                <small>Location</small>
                <span>{LOCATION}</span>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.form
          className="contact-form glass-card"
          noValidate
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="form-row">
            {field("name", "Full name", { required: true, autoComplete: "name", placeholder: "Your name" })}
            {field("organisation", "Organisation", { autoComplete: "organization", placeholder: "Company or institution" })}
          </div>
          <div className="form-row">
            {field("email", "Email", { type: "email", required: true, autoComplete: "email", placeholder: "you@example.com" })}
            {field("phone", "Phone (optional)", { type: "tel", autoComplete: "tel", placeholder: "+91" })}
          </div>

          <label className="field">
            <span>Interested in</span>
            <select name="interest" value={form.interest} onChange={update}>
              <option value="">Select an area</option>
              {INTEREST_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>

          <label className={`field ${errors.message ? "has-error" : ""}`}>
            <span>
              Message<em>*</em>
            </span>
            <textarea name="message" rows={4} value={form.message} onChange={update} placeholder="Tell us about your project" />
            {errors.message && <small className="error-text">{errors.message}</small>}
          </label>

          <button type="submit" className="btn btn-primary btn-block">
            Send message <Icon name="arrow" size={18} />
          </button>

          <p className={`form-status ${status ? status.type : ""}`} role="status" aria-live="polite">
            {status?.text}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
