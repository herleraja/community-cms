"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import CmsIntlProvider from "@/lib/intl-provider";
import { getInitialLocale, persistLocale } from "@/lib/locale";
import { defaultLocale, type SupportedLocale } from "@/lib/i18n";

interface AppProvidersProps {
  children: React.ReactNode;
}

interface LocaleContextValue {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within AppProviders");
  }

  return context;
}

export default function AppProviders({ children }: AppProvidersProps) {
  const [locale, setLocaleState] = useState<SupportedLocale>(() =>
    getInitialLocale(),
  );

  const setLocale = (nextLocale: SupportedLocale) => {
    setLocaleState(nextLocale);
    persistLocale(nextLocale);
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>
      <CmsIntlProvider locale={locale}>{children}</CmsIntlProvider>
    </LocaleContext.Provider>
  );
}
