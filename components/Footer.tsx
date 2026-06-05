"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useIntl } from "react-intl";
import { siteConfig } from "@/lib/content";
import { footerMessages, navigationMessages } from "@/lib/i18n";

export default function Footer() {
  const { formatMessage } = useIntl();
  const getSocialIcon = (iconName: string) => {
    const icons: Record<string, React.ReactElement> = {
      FaFacebook: <FaFacebook size={24} />,
      FaInstagram: <FaInstagram size={24} />,
      FaYoutube: <FaYoutube size={24} />,
      FaTwitter: <FaTwitter size={24} />,
      FaLinkedin: <FaLinkedin size={24} />,
    };
    return icons[iconName] || null;
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div>
            <h3 className="footer__section-title">{siteConfig.name}</h3>
            <p className="footer__description">{siteConfig.description}</p>
          </div>

          <div>
            <h3 className="footer__section-title">
              {formatMessage(footerMessages.quickLinks)}
            </h3>
            <ul className="footer__links">
              <li className="footer__link-item">
                <Link href="/" className="footer__link">
                  {formatMessage(navigationMessages.home)}
                </Link>
              </li>
              <li className="footer__link-item">
                <Link href="/about" className="footer__link">
                  {formatMessage(navigationMessages.about)}
                </Link>
              </li>
              <li className="footer__link-item">
                <Link href="/events" className="footer__link">
                  {formatMessage(navigationMessages.events)}
                </Link>
              </li>
              <li className="footer__link-item">
                <Link href="/contact" className="footer__link">
                  {formatMessage(navigationMessages.contact)}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__section-title">
              {formatMessage(footerMessages.contactUs)}
            </h3>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <FaEnvelope />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li className="footer__contact-item">
                <FaPhone />
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              </li>
              <li className="footer__contact-item">
                <FaMapMarkerAlt />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <div className="footer__social-links">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
            <p className="footer__copyright">
              © {new Date().getFullYear()} {siteConfig.name}.{" "}
              {formatMessage(footerMessages.allRightsReserved)}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
