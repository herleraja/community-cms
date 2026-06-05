"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { siteConfig } from "@/lib/content";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact">
      <section className="hero hero--red">
        <div className="hero-container">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">We'd love to hear from you!</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="contact__grid">
            <div className="contact__info-section">
              <h2>Get in Touch</h2>
              <p>
                Have questions about our events, membership, or want to get
                involved? We're here to help! Reach out to us through any of the
                following channels.
              </p>

              <div className="contact__info-cards">
                <div className="info-card info-card--red">
                  <div className="icon-container contact__info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact__info-content">
                    <h3>Email</h3>
                    <a href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="info-card info-card--yellow">
                  <div className="icon-container icon-container--yellow contact__info-icon">
                    <FaPhone />
                  </div>
                  <div className="contact__info-content">
                    <h3>Phone</h3>
                    <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                  </div>
                </div>

                <div className="info-card info-card--green">
                  <div className="icon-container icon-container--green contact__info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact__info-content">
                    <h3>Address</h3>
                    <span>{siteConfig.address}</span>
                  </div>
                </div>
              </div>

              <div className="contact__office-hours">
                <h3>Office Hours</h3>
                <div className="contact__hours-list">
                  <p>
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                  </p>
                  <p>
                    <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                  </p>
                  <p>
                    <strong>Sunday:</strong> Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="card-gradient card-gradient--yellow contact__form-section">
              <h2>Send us a Message</h2>

              {submitted && (
                <div className="contact__success-message">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 123 456 7890"
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="events">Event Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button type="submit" className="contact__submit-button">
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="hero hero--yellow" style={{ padding: "4rem 1rem" }}>
        <div
          className="container"
          style={{ maxWidth: "64rem", textAlign: "center" }}
        >
          <h2 className="contact__membership-title">Become a Member</h2>
          <p className="contact__membership-description">
            Join our vibrant community and be part of something special. Enjoy
            exclusive benefits, participate in events, and connect with fellow
            community members.
          </p>
          <div className="contact__membership-box">
            <h3>Membership Benefits</h3>
            <ul className="contact__benefits-list">
              <li className="contact__benefit-item">
                <span>Priority access to all events and programs</span>
              </li>
              <li className="contact__benefit-item">
                <span>Discounted event tickets and merchandise</span>
              </li>
              <li className="contact__benefit-item">
                <span>Voting rights in community decisions</span>
              </li>
              <li className="contact__benefit-item">
                <span>Access to exclusive member-only events</span>
              </li>
              <li className="contact__benefit-item">
                <span>Monthly newsletter with community updates</span>
              </li>
            </ul>
            <p className="contact__membership-note">
              Contact us to learn more about membership options and fees.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container" style={{ maxWidth: "64rem" }}>
          <h2 className="contact__faq-title">Frequently Asked Questions</h2>
          <div className="contact__faq-list">
            <div className="contact__faq-item">
              <h3>How can I become a member?</h3>
              <p>
                Simply fill out the contact form above with "Membership Inquiry"
                as the subject, and our team will get back to you with all the
                details and registration process.
              </p>
            </div>
            <div className="contact__faq-item">
              <h3>Are non-members allowed to attend events?</h3>
              <p>
                Yes! Most of our events are open to everyone. However, members
                enjoy priority booking and discounted rates on event tickets.
              </p>
            </div>
            <div className="contact__faq-item">
              <h3>How can I volunteer?</h3>
              <p>
                We're always looking for enthusiastic volunteers! Contact us
                through the form above with "Volunteer Opportunities" as the
                subject, and we'll connect you with our volunteer coordinator.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
