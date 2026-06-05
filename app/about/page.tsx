"use client";

import { aboutContent, teamMembers } from "@/lib/content";
import { FaCheckCircle } from "react-icons/fa";
import { useIntl } from "react-intl";
import { aboutMessages } from "@/lib/i18n";

export default function AboutPage() {
  const { formatMessage } = useIntl();
  return (
    <div className="about">
      <section className="hero hero--red">
        <div className="hero-container">
          <h1 className="hero-title">
            {formatMessage(aboutMessages.heroTitle)}
          </h1>
          <p className="hero-subtitle">
            {formatMessage(aboutMessages.heroSubtitle)}
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="about__mission-grid">
            <div className="about__mission-content">
              <h2>{formatMessage(aboutMessages.missionTitle)}</h2>
              <p>{aboutContent.mission}</p>
              <div className="kannada-box">
                <p>{aboutContent.missionKannada}</p>
              </div>
            </div>
            <div className="card-gradient card-gradient--yellow about__vision-card">
              <h3>{formatMessage(aboutMessages.visionTitle)}</h3>
              <p>{aboutContent.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <h2
            className="section-title"
            style={{ marginBottom: "3rem", textAlign: "center" }}
          >
            {formatMessage(aboutMessages.coreValuesTitle)}
          </h2>
          <div className="grid grid--gap-lg">
            {aboutContent.values.map((value, index) => (
              <div key={index} className="card about__value-card">
                <FaCheckCircle className="about__value-icon" />
                <div>
                  <h3 className="about__value-title">{value}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="about__team-header">
            <h2>{formatMessage(aboutMessages.teamTitle)}</h2>
            <p>{formatMessage(aboutMessages.teamSubtitle)}</p>
          </div>
          <div className="grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="card-gradient about__team-card">
                <div className="icon-container icon-container--xlarge about__team-avatar">
                  <span>{member.name.charAt(0)}</span>
                </div>
                <h3 className="about__team-name">{member.name}</h3>
                <p className="about__team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero hero--yellow" style={{ padding: "4rem 1rem" }}>
        <div className="container">
          <div className="grid" style={{ textAlign: "center" }}>
            <div className="about__impact-card">
              <div className="about__impact-number">500+</div>
              <div className="about__impact-label">
                {formatMessage(aboutMessages.activeMembers)}
              </div>
            </div>
            <div className="about__impact-card">
              <div className="about__impact-number">50+</div>
              <div className="about__impact-label">
                {formatMessage(aboutMessages.eventsOrganized)}
              </div>
            </div>
            <div className="about__impact-card">
              <div className="about__impact-number">10+</div>
              <div className="about__impact-label">
                {formatMessage(aboutMessages.yearsOfService)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div
          className="container"
          style={{ maxWidth: "64rem", textAlign: "center" }}
        >
          <h2 className="about__join-title">
            {formatMessage(aboutMessages.joinTitle)}
          </h2>
          <p className="about__join-description">
            {formatMessage(aboutMessages.joinDescription)}
          </p>
          <a href="/contact" className="about__join-button">
            {formatMessage(aboutMessages.contactToday)}
          </a>
        </div>
      </section>
    </div>
  );
}
