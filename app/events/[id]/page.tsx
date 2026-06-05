"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { useIntl } from "react-intl";
import { upcomingEvents, pastEvents } from "@/lib/content";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUserPlus,
  FaArrowLeft,
} from "react-icons/fa";
import EventMap from "@/components/EventMap";
import { eventDetailsMessages } from "@/lib/i18n";

export default function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { formatMessage, locale } = useIntl();
  const { id } = use(params);

  // Find event in both upcoming and past events
  const allEvents = [...upcomingEvents, ...pastEvents];
  const event = allEvents.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const isUpcoming = upcomingEvents.some((e) => e.id === id);

  return (
    <div className="event-details">
      <section className="hero hero--yellow">
        <div className="hero-container">
          <Link href="/events" className="event-details__back-link">
            <FaArrowLeft />
            {formatMessage(eventDetailsMessages.backToEvents)}
          </Link>
          <h1 className="hero-title" style={{ color: "#111827" }}>
            {event.title}
          </h1>
          {event.titleKannada && (
            <p className="event-details__title-kannada">{event.titleKannada}</p>
          )}
        </div>
      </section>

      <section className="section section--white">
        <div className="container event-details__container">
          <div className="event-details__content">
            {event.image && (
              <div className="event-details__image-wrapper">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={1200}
                  height={600}
                  className="event-details__image"
                  priority
                />
              </div>
            )}

            <div className="event-details__info">
              <div className="event-details__meta">
                <div className="event-details__meta-item">
                  <div className="event-details__meta-icon">
                    <FaCalendarAlt />
                  </div>
                  <div>
                    <h3 className="event-details__meta-label">
                      {formatMessage(eventDetailsMessages.date)}
                    </h3>
                    <p className="event-details__meta-value">
                      {new Date(event.date).toLocaleDateString(locale, {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <div className="event-details__meta-item">
                  <div className="event-details__meta-icon">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="event-details__meta-label">
                      {formatMessage(eventDetailsMessages.time)}
                    </h3>
                    <p className="event-details__meta-value">{event.time}</p>
                  </div>
                </div>

                <div className="event-details__meta-item">
                  <div className="event-details__meta-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="event-details__meta-label">
                      {formatMessage(eventDetailsMessages.venue)}
                    </h3>
                    <p className="event-details__meta-value">
                      {event.venueAddress}
                    </p>
                  </div>
                </div>
              </div>

              <div className="event-details__description">
                <h2 className="event-details__section-title">
                  {formatMessage(eventDetailsMessages.aboutThisEvent)}
                </h2>
                <p className="event-details__text">{event.description}</p>
              </div>

              {event.venueAddress && (
                <EventMap venueAddress={event.venueAddress} />
              )}

              {isUpcoming && event.registerLink && (
                <div className="event-details__actions">
                  <a
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-details__register-button"
                  >
                    <FaUserPlus />
                    {formatMessage(eventDetailsMessages.registerNow)}
                  </a>
                </div>
              )}

              {!isUpcoming && (
                <div className="event-details__past-badge">
                  <span>{formatMessage(eventDetailsMessages.pastEvent)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
