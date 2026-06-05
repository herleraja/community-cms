"use client";

import {
  defaultLocale,
  supportedLocales,
  type SupportedLocale,
} from "@/lib/i18n";

const STORAGE_KEY = "preferredLocale";

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return supportedLocales.includes(locale as SupportedLocale);
}

export function getInitialLocale(): SupportedLocale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const savedLocale = window.localStorage.getItem(STORAGE_KEY);
  if (savedLocale && isSupportedLocale(savedLocale)) {
    return savedLocale;
  }

  const browserLocale = window.navigator.language;
  if (isSupportedLocale(browserLocale)) {
    return browserLocale;
  }

  const languageCode = browserLocale.split("-")[0];
  if (isSupportedLocale(languageCode)) {
    return languageCode;
  }

  return defaultLocale;
}

export function persistLocale(locale: SupportedLocale) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, locale);
  }
}
