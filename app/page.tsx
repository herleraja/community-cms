"use client";

import Link from "next/link";
import { FaCalendarAlt, FaUsers, FaHeart } from "react-icons/fa";
import { useIntl } from "react-intl";
import { siteConfig, upcomingEvents } from "@/lib/content";
import EventCard from "@/components/EventCard";
import { homeMessages } from "@/lib/i18n";

export default function Home() {
  const { formatMessage } = useIntl();
  return (
    <div className="home">
      <section className="hero hero--yellow">
        <div className="hero-container">
          <h1 className="hero-title" style={{ color: "#111827" }}>
            {siteConfig.name}
          </h1>
          <p className="home__hero-title-kannada">{siteConfig.nameKannada}</p>
          <p className="hero-subtitle" style={{ color: "#1f2937" }}>
            {siteConfig.tagline}
          </p>
          <p className="home__hero-tagline-kannada">
            {siteConfig.taglineKannada}
          </p>
          <div className="home__hero-buttons">
            <Link href="/events" className="home__hero-button-primary">
              {formatMessage(homeMessages.viewEvents)}
            </Link>
            <Link href="/contact" className="home__hero-button-secondary">
              {formatMessage(homeMessages.becomeMember)}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {formatMessage(homeMessages.welcomeTitle)}
            </h2>
            <p className="section-description">{siteConfig.description}</p>
          </div>

          <div className="grid home__features">
            <div className="card-gradient home__feature-card">
              <div className="home__feature-icon">
                <div className="icon-container icon-container--large">
                  <FaCalendarAlt />
                </div>
              </div>
              <h3 className="home__feature-title">
                {formatMessage(homeMessages.featureEventsTitle)}
              </h3>
              <p className="home__feature-description">
                {formatMessage(homeMessages.featureEventsDescription)}
              </p>
            </div>

            <div className="card-gradient card-gradient--yellow home__feature-card">
              <div className="home__feature-icon">
                <div className="icon-container icon-container--large icon-container--yellow">
                  <FaUsers />
                </div>
              </div>
              <h3 className="home__feature-title">
                {formatMessage(homeMessages.featureUnityTitle)}
              </h3>
              <p className="home__feature-description">
                {formatMessage(homeMessages.featureUnityDescription)}
              </p>
            </div>

            <div className="card-gradient card-gradient--green home__feature-card">
              <div className="home__feature-icon">
                <div className="icon-container icon-container--large icon-container--green">
                  <FaHeart />
                </div>
              </div>
              <h3 className="home__feature-title">
                {formatMessage(homeMessages.featureHeritageTitle)}
              </h3>
              <p className="home__feature-description">
                {formatMessage(homeMessages.featureHeritageDescription)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {formatMessage(homeMessages.upcomingEventsTitle)}
            </h2>
            <p className="section-description">
              {formatMessage(homeMessages.upcomingEventsDescription)}
            </p>
          </div>

          <div className="home__events-grid">
            {upcomingEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="home__events-view-all">
            <Link href="/events" className="home__view-all-button">
              {formatMessage(homeMessages.viewAllEvents)}
            </Link>
          </div>
        </div>
      </section>

      <section className="home__cta">
        <div className="home__cta-container">
          <h2 className="home__cta-title">
            {formatMessage(homeMessages.ctaTitle)}
          </h2>
          <p className="home__cta-description">
            {formatMessage(homeMessages.ctaDescription)}
          </p>
          <Link href="/contact" className="home__cta-button">
            {formatMessage(homeMessages.getInTouch)}
          </Link>
        </div>
      </section>
    </div>
  );
}
