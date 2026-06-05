"use client";

import { useEffect, useRef, useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { useIntl } from "react-intl";
import {
  localeLabels,
  supportedLocales,
  type SupportedLocale,
} from "@/lib/i18n";

const languages: { code: SupportedLocale; name: string; nativeName: string }[] =
  [
    { code: "en", name: "English", nativeName: "English" },
    { code: "de", name: "German", nativeName: "Deutsch" },
    { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
    { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  ];

interface LocaleSwitcherProps {
  currentLocale: SupportedLocale;
  onLocaleChange: (locale: SupportedLocale) => void;
}

export default function LocaleSwitcher({
  currentLocale,
  onLocaleChange,
}: LocaleSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { formatMessage } = useIntl();

  const currentLanguage =
    languages.find((language) => language.code === currentLocale) ||
    languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (languageCode: SupportedLocale) => {
    onLocaleChange(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="navigation__locale-switcher" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="navigation__locale-button"
        aria-label={formatMessage(localeLabels.selectLanguage)}
      >
        <FaGlobe className="navigation__locale-icon" />
        <span className="navigation__locale-current">
          {currentLanguage.nativeName}
        </span>
      </button>

      {isOpen && (
        <div className="navigation__locale-menu">
          <div className="navigation__locale-menu-content">
            {supportedLocales.map((locale) => {
              const language =
                languages.find((item) => item.code === locale) || languages[0];

              return (
                <button
                  key={locale}
                  onClick={() => handleLanguageChange(locale)}
                  className={`navigation__locale-option ${currentLocale === locale ? "navigation__locale-option--active" : ""}`}
                >
                  <div className="navigation__locale-option-content">
                    <span className="navigation__locale-native-name">
                      {language.name}
                    </span>
                    <span className="navigation__locale-name">
                      {locale === "en"
                        ? formatMessage(localeLabels.english)
                        : locale === "de"
                          ? formatMessage(localeLabels.german)
                          : locale === "hi"
                            ? formatMessage(localeLabels.hindi)
                            : formatMessage(localeLabels.kannada)}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
