"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { useIntl } from "react-intl";
import { siteConfig } from "@/lib/content";
import { contactMessages } from "@/lib/i18n";

export default function ContactPage() {
  const { formatMessage } = useIntl();
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
          <h1 className="hero-title">
            {formatMessage(contactMessages.heroTitle)}
          </h1>
          <p className="hero-subtitle">
            {formatMessage(contactMessages.heroSubtitle)}
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="contact__grid">
            <div className="contact__info-section">
              <h2>{formatMessage(contactMessages.getInTouchTitle)}</h2>
              <p>{formatMessage(contactMessages.getInTouchDescription)}</p>

              <div className="contact__info-cards">
                <div className="info-card info-card--red">
                  <div className="icon-container contact__info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact__info-content">
                    <h3>{formatMessage(contactMessages.email)}</h3>
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
                    <h3>{formatMessage(contactMessages.phone)}</h3>
                    <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                  </div>
                </div>

                <div className="info-card info-card--green">
                  <div className="icon-container icon-container--green contact__info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact__info-content">
                    <h3>{formatMessage(contactMessages.address)}</h3>
                    <span>{siteConfig.address}</span>
                  </div>
                </div>
              </div>

              <div className="contact__office-hours">
                <h3>{formatMessage(contactMessages.officeHours)}</h3>
                <div className="contact__hours-list">
                  <p>
                    <strong>
                      {formatMessage(contactMessages.mondayFriday)}
                    </strong>{" "}
                    {formatMessage(contactMessages.weekdayHours)}
                  </p>
                  <p>
                    <strong>{formatMessage(contactMessages.saturday)}</strong>{" "}
                    {formatMessage(contactMessages.saturdayHours)}
                  </p>
                  <p>
                    <strong>{formatMessage(contactMessages.sunday)}</strong>{" "}
                    {formatMessage(contactMessages.closed)}
                  </p>
                </div>
              </div>
            </div>

            <div className="card-gradient card-gradient--yellow contact__form-section">
              <h2>{formatMessage(contactMessages.sendMessageTitle)}</h2>

              {submitted && (
                <div className="contact__success-message">
                  {formatMessage(contactMessages.successMessage)}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__form-group">
                  <label htmlFor="name">
                    {formatMessage(contactMessages.fullNameLabel)}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={formatMessage(
                      contactMessages.fullNamePlaceholder,
                    )}
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email">
                    {formatMessage(contactMessages.emailLabel)}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={formatMessage(
                      contactMessages.emailPlaceholder,
                    )}
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="phone">
                    {formatMessage(contactMessages.phoneLabel)}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={formatMessage(
                      contactMessages.phonePlaceholder,
                    )}
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject">
                    {formatMessage(contactMessages.subjectLabel)}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      {formatMessage(contactMessages.subjectPlaceholder)}
                    </option>
                    <option value="membership">
                      {formatMessage(contactMessages.subjectMembership)}
                    </option>
                    <option value="events">
                      {formatMessage(contactMessages.subjectEvents)}
                    </option>
                    <option value="volunteer">
                      {formatMessage(contactMessages.subjectVolunteer)}
                    </option>
                    <option value="sponsorship">
                      {formatMessage(contactMessages.subjectSponsorship)}
                    </option>
                    <option value="general">
                      {formatMessage(contactMessages.subjectGeneral)}
                    </option>
                    <option value="other">
                      {formatMessage(contactMessages.subjectOther)}
                    </option>
                  </select>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message">
                    {formatMessage(contactMessages.messageLabel)}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder={formatMessage(
                      contactMessages.messagePlaceholder,
                    )}
                  />
                </div>

                <button type="submit" className="contact__submit-button">
                  <FaPaperPlane />
                  {formatMessage(contactMessages.sendMessageButton)}
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
          <h2 className="contact__membership-title">
            {formatMessage(contactMessages.membershipTitle)}
          </h2>
          <p className="contact__membership-description">
            {formatMessage(contactMessages.membershipDescription)}
          </p>
          <div className="contact__membership-box">
            <h3>{formatMessage(contactMessages.membershipBenefitsTitle)}</h3>
            <ul className="contact__benefits-list">
              <li className="contact__benefit-item">
                <span>
                  {formatMessage(contactMessages.benefitPriorityAccess)}
                </span>
              </li>
              <li className="contact__benefit-item">
                <span>
                  {formatMessage(contactMessages.benefitDiscountedTickets)}
                </span>
              </li>
              <li className="contact__benefit-item">
                <span>
                  {formatMessage(contactMessages.benefitVotingRights)}
                </span>
              </li>
              <li className="contact__benefit-item">
                <span>
                  {formatMessage(contactMessages.benefitExclusiveEvents)}
                </span>
              </li>
              <li className="contact__benefit-item">
                <span>{formatMessage(contactMessages.benefitNewsletter)}</span>
              </li>
            </ul>
            <p className="contact__membership-note">
              {formatMessage(contactMessages.membershipNote)}
            </p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container" style={{ maxWidth: "64rem" }}>
          <h2 className="contact__faq-title">
            {formatMessage(contactMessages.faqTitle)}
          </h2>
          <div className="contact__faq-list">
            <div className="contact__faq-item">
              <h3>{formatMessage(contactMessages.faqMembershipQuestion)}</h3>
              <p>{formatMessage(contactMessages.faqMembershipAnswer)}</p>
            </div>
            <div className="contact__faq-item">
              <h3>{formatMessage(contactMessages.faqNonMembersQuestion)}</h3>
              <p>{formatMessage(contactMessages.faqNonMembersAnswer)}</p>
            </div>
            <div className="contact__faq-item">
              <h3>{formatMessage(contactMessages.faqVolunteerQuestion)}</h3>
              <p>{formatMessage(contactMessages.faqVolunteerAnswer)}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
