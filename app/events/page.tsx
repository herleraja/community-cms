"use client";

import { useIntl } from "react-intl";
import { upcomingEvents, pastEvents } from "@/lib/content";
import EventCard from "@/components/EventCard";
import { eventsMessages } from "@/lib/i18n";

export default function EventsPage() {
  const { formatMessage } = useIntl();
  return (
    <div className="events">
      <section className="hero hero--yellow">
        <div className="hero-container">
          <h1 className="hero-title" style={{ color: "#111827" }}>
            {formatMessage(eventsMessages.heroTitle)}
          </h1>
          <p className="hero-subtitle" style={{ color: "#1f2937" }}>
            {formatMessage(eventsMessages.heroSubtitle)}
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <h2
            className="section-title"
            style={{ marginBottom: "3rem", textAlign: "center" }}
          >
            {formatMessage(eventsMessages.upcomingTitle)}
          </h2>
          <div className="events__grid">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <h2
            className="section-title"
            style={{ marginBottom: "3rem", textAlign: "center" }}
          >
            {formatMessage(eventsMessages.pastTitle)}
          </h2>
          <div className="events__grid">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} showFullDetails={false} />
            ))}
          </div>
        </div>
      </section>

      <section className="hero hero--red" style={{ padding: "4rem 1rem" }}>
        <div
          className="container"
          style={{ maxWidth: "64rem", textAlign: "center" }}
        >
          <h2 className="events__subscribe-title">
            {formatMessage(eventsMessages.subscribeTitle)}
          </h2>
          <p className="events__subscribe-description">
            {formatMessage(eventsMessages.subscribeDescription)}
          </p>
          <div className="events__subscribe-form">
            <input
              type="email"
              placeholder={formatMessage(eventsMessages.subscribePlaceholder)}
              className="events__subscribe-input"
            />
            <button className="events__subscribe-button">
              {formatMessage(eventsMessages.subscribeButton)}
            </button>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container" style={{ maxWidth: "64rem" }}>
          <h2 className="events__guidelines-title">
            {formatMessage(eventsMessages.guidelinesTitle)}
          </h2>
          <div className="kannada-box" style={{ borderRadius: "0.75rem" }}>
            <ul className="events__guidelines-list">
              <li className="events__guidelines-item">
                {formatMessage(eventsMessages.guidelineArrival)}
              </li>
              <li className="events__guidelines-item">
                {formatMessage(eventsMessages.guidelineTickets)}
              </li>
              <li className="events__guidelines-item">
                {formatMessage(eventsMessages.guidelineAttire)}
              </li>
              <li className="events__guidelines-item">
                {formatMessage(eventsMessages.guidelinePhotography)}
              </li>
              <li className="events__guidelines-item">
                {formatMessage(eventsMessages.guidelineQueries)}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
