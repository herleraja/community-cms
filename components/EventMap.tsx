"use client";

import { useEffect, useState } from "react";

interface EventMapProps {
  venueAddress: string;
}

interface Location {
  lat: number;
  lng: number;
}

export default function EventMap({ venueAddress }: EventMapProps) {
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const geocodeAddress = async () => {
      try {
        // Use Nominatim (OpenStreetMap's free geocoding service)
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(venueAddress)}&limit=1`,
        );
        const data = await response.json();

        if (data && data.length > 0) {
          setLocation({
            lat: parseFloat(data[0].lat),
            lng: parseFloat(data[0].lon),
          });
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Geocoding error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    geocodeAddress();
  }, [venueAddress]);

  if (loading) {
    return (
      <div className="event-details__map-section">
        <h2 className="event-details__section-title">Location</h2>
        <div className="event-details__map-loading">
          <p>Loading map...</p>
        </div>
      </div>
    );
  }

  if (error || !location) {
    return (
      <div className="event-details__map-section">
        <h2 className="event-details__section-title">Location</h2>
        <div className="event-details__map-error">
          <p>
            Unable to load map. Please use the address to find the location.
          </p>
          <a
            href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(venueAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="event-details__map-error-link"
          >
            View on OpenStreetMap
          </a>
        </div>
      </div>
    );
  }

  // Calculate bounding box for the map (zoom level)
  const bbox = {
    minLon: location.lng - 0.01,
    minLat: location.lat - 0.01,
    maxLon: location.lng + 0.01,
    maxLat: location.lat + 0.01,
  };

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox.minLon}%2C${bbox.minLat}%2C${bbox.maxLon}%2C${bbox.maxLat}&layer=mapnik&marker=${location.lat}%2C${location.lng}`;

  return (
    <div className="event-details__map-section">
      <h2 className="event-details__section-title">Location</h2>
      <div className="event-details__map-container">
        <iframe
          src={mapUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          title={`Map showing ${venueAddress}`}
        ></iframe>
        <div className="event-details__map-link">
          <a
            href={`https://www.openstreetmap.org/?mlat=${location.lat}&mlon=${location.lng}#map=15/${location.lat}/${location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Larger Map
          </a>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
