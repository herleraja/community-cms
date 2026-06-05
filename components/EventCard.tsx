"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUserPlus,
} from "react-icons/fa";
import { useIntl } from "react-intl";
import { Event } from "@/lib/content";
import { eventCardMessages } from "@/lib/i18n";

interface EventCardProps {
  event: Event;
  showFullDetails?: boolean;
}

export default function EventCard({
  event,
  showFullDetails = true,
}: EventCardProps) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className="event-card">
      <Link href={`/events/${event.id}`} className="event-card__link">
        {event.image && (
          <div className="event-card__image">
            <Image
              src={event.image}
              alt={event.title}
              width={800}
              height={600}
              className="event-card__img"
            />
          </div>
        )}
        <div className="event-card__content">
          <h3 className="event-card__title">{event.title}</h3>

          <div className="event-card__meta">
            <p className="event-card__meta-item">
              <FaCalendarAlt />
              {new Date(event.date).toLocaleDateString(locale, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            {showFullDetails && (
              <>
                <p className="event-card__meta-item">
                  <FaClock />
                  {event.time}
                </p>
                <p className="event-card__meta-item">
                  <FaMapMarkerAlt />
                  {event.venueAddress}
                </p>
              </>
            )}
          </div>

          <p className="event-card__description">{event.description}</p>
        </div>
      </Link>

      {event.registerLink && (
        <div className="event-card__action">
          <a
            href={event.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="event-card__button"
            onClick={(e) => e.stopPropagation()}
          >
            <FaUserPlus />
            {formatMessage(eventCardMessages.registerNow)}
          </a>
        </div>
      )}
    </div>
  );
}
