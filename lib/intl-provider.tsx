"use client";

import { IntlProvider } from "react-intl";
import messagesEn from "@/messages/en.json";
import messagesDe from "@/messages/de.json";
import messagesHi from "@/messages/hi.json";
import messagesKn from "@/messages/kn.json";
import { defaultLocale, type SupportedLocale } from "@/lib/i18n";

const messages = {
  en: messagesEn as Record<string, string>,
  de: messagesDe as Record<string, string>,
  hi: messagesHi as Record<string, string>,
  kn: messagesKn as Record<string, string>,
} satisfies Record<SupportedLocale, Record<string, string>>;

interface CmsIntlProviderProps {
  children: React.ReactNode;
  locale: SupportedLocale;
}

export default function CmsIntlProvider({
  children,
  locale,
}: CmsIntlProviderProps) {
  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages[locale] ?? messages[defaultLocale]}
    >
      {children}
    </IntlProvider>
  );
}
