import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { upcomingEvents, pastEvents } from "@/lib/content";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUserPlus,
  FaArrowLeft,
} from "react-icons/fa";
import EventMap from "@/components/EventMap";

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await params as it's now a Promise in Next.js 15+
  const { id } = await params;

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
            Back to Events
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
                    <h3 className="event-details__meta-label">Date</h3>
                    <p className="event-details__meta-value">
                      {new Date(event.date).toLocaleDateString("en-US", {
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
                    <h3 className="event-details__meta-label">Time</h3>
                    <p className="event-details__meta-value">{event.time}</p>
                  </div>
                </div>

                <div className="event-details__meta-item">
                  <div className="event-details__meta-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="event-details__meta-label">Venue</h3>
                    <p className="event-details__meta-value">
                      {event.venueAddress}
                    </p>
                  </div>
                </div>
              </div>

              <div className="event-details__description">
                <h2 className="event-details__section-title">
                  About This Event
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
                    Register Now
                  </a>
                </div>
              )}

              {!isUpcoming && (
                <div className="event-details__past-badge">
                  <span>Past Event</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Made with Bob
