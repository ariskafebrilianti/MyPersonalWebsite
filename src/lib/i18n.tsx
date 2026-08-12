import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { content, type Dictionary, type Lang } from "@/data/content";

type Ctx = { lang: Lang; t: Dictionary; toggle: () => void; setLang: (l: Lang) => void };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = useCallback(() => setLang((l) => (l === "en" ? "id" : "en")), []);
  const value = useMemo(() => ({ lang, t: content[lang], toggle, setLang }), [lang, toggle]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
