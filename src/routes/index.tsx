import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  MessageCircle,
  ArrowRight,
  BadgeCheck,
  GraduationCap,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { LanguageProvider, useLang } from "@/lib/i18n";
import { profile } from "@/data/content";
import { cn } from "@/lib/utils";
import heroCutout from "@/assets/hero-cutout.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ariska Febrilianti — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Ariska Febrilianti, Data Analyst in Jakarta: commercial data audits, SQL, Python, Power BI, and WebGIS for measurable business decisions.",
      },
      { property: "og:title", content: "Ariska Febrilianti — Data Analyst Portfolio" },
      {
        property: "og:description",
        content:
          "Data Analyst with experience auditing commercial data across 10+ business units — SQL, Python, Power BI, plus a frontend web development skillset.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndexPage,
});

const SECTION_IDS = ["hero", "about", "education", "experience", "portfolio", "contact"] as const;

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "background",
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  tone?: "background" | "cream" | "ivory";
}) {
  const bg =
    tone === "cream" ? "bg-cream" : tone === "ivory" ? "bg-ivory" : "bg-background";
  return (
    <section id={id} className={`${bg} scroll-section px-6 py-24 md:py-32`}>
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 text-3xl leading-tight text-foreground md:text-4xl">{title}</h2>
          {description && (
            <p className="mt-5 text-base leading-[1.75] text-muted-foreground">{description}</p>
          )}
        </header>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

function Navbar() {
  const { t, lang, toggle } = useLang();
  const [active, setActive] = useState<string>("hero");

  const items = useMemo(
    () => [
      { id: "hero", label: t.nav.home },
      { id: "about", label: t.nav.about },
      { id: "education", label: t.nav.education },
      { id: "experience", label: t.nav.experience },
      { id: "portfolio", label: t.nav.portfolio },
      { id: "contact", label: t.nav.contact },
    ],
    [t],
  );

  useEffect(() => {
    const onScroll = () => {
      const offset = 140;
      let current = "hero";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#hero"
          onClick={(e) => go(e, "hero")}
          className="font-display text-base tracking-wide text-foreground"
        >
          Ariska<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => go(e, item.id)}
              className={cn(
                "text-xs tracking-[0.18em] uppercase transition-colors",
                active === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label="Switch language"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-ivory px-3 py-1.5 text-xs font-medium tracking-[0.12em] uppercase text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <span aria-hidden>{lang === "en" ? "🇬🇧" : "🇮🇩"}</span>
            <Languages className="h-3.5 w-3.5 text-primary" />
            {t.langLabel}
          </button>
          <Button asChild size="sm" className="hidden rounded-full sm:inline-flex">
            <a href={`#contact`} onClick={(e) => go(e, "contact")}>
              {t.hero.ctaContact}
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}

function Portfolio() {
  const { t } = useLang();
  const [sending, setSending] = useState(false);

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    t.contact.mailSubject,
  )}&body=${encodeURIComponent(`${t.contact.mailBody}\n\n`)}`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    const form = event.currentTarget;
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success(t.contact.toast, {
        description: `${t.contact.toastDetail} ${profile.email}.`,
      });
    }, 600);
  };

  const scrollTo = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Toaster />
      <Navbar />

      {/* Hero */}
      <section id="hero" className="scroll-section relative overflow-hidden bg-gradient-blush">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="eyebrow flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {profile.location}
              </p>
              <h1 className="mt-8 text-5xl leading-[1.05] text-foreground md:text-7xl">
                {t.hero.heading}
              </h1>
              <div className="mt-8 hairline max-w-xs" />
              <p className="mt-8 font-display text-xl leading-[1.5] text-foreground/90 md:text-2xl">
                {t.hero.tagline}
              </p>
              <p className="mt-5 max-w-xl text-base leading-[1.75] text-muted-foreground">
                {t.hero.subTagline}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <a href="#portfolio" onClick={(e) => scrollTo(e, "portfolio")}>
                    {t.hero.ctaPortfolio} <ArrowRight />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href="#contact" onClick={(e) => scrollTo(e, "contact")}>
                    {t.hero.ctaContact}
                  </a>
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" /> {profile.email}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" /> {profile.linkedinLabel}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Github className="h-4 w-4" /> {profile.githubLabel}
                </a>
              </div>
            </div>

            {/* Cutout photo placeholder — swap src with your transparent PNG */}
            <div className="relative flex justify-center lg:justify-end">
              <div
                aria-hidden
                className="absolute bottom-6 left-1/2 h-[70%] w-[78%] -translate-x-1/2 rounded-full bg-blush/70 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute top-6 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full border border-primary/20 md:h-72 md:w-72"
              />
              <img
                src={heroCutout}
                alt={t.hero.photoAlt}
                width={900}
                height={1200}
                className="relative z-10 h-auto max-h-[360px] w-auto max-w-full object-contain drop-shadow-[0_28px_40px_oklch(0.55_0.06_20/0.28)] md:max-h-[460px] lg:max-h-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section
        id="about"
        eyebrow={t.about.eyebrow}
        title={t.about.heading}
        tone="ivory"
      >
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <p className="text-base leading-[1.8] text-foreground/85 md:text-lg">{t.about.text}</p>
          <div className="grid gap-6 self-start">
            {t.about.stats.map((stat) => (
              <div key={stat.label} className="border-b border-border pb-4">
                <p className="font-display text-3xl text-primary">{stat.value}</p>
                <p className="mt-1 text-xs tracking-[0.14em] uppercase text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section
        id="skills"
        eyebrow={t.skills.eyebrow}
        title={t.skills.heading}
        description={t.skills.description}
        tone="cream"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-ivory p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe"
            >
              <h3 className="text-lg text-foreground">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-accent px-3 py-1.5 text-sm text-accent-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section
        id="education"
        eyebrow={t.education.eyebrow}
        title={t.education.heading}
        tone="ivory"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {t.education.items.map((item) => (
            <div key={item.degree} className="rounded-2xl border border-border p-7">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="mt-5 text-xl text-foreground">{item.degree}</h3>
              <p className="mt-2 text-base leading-[1.7] text-muted-foreground">{item.school}</p>
              <p className="mt-3 text-xs tracking-[0.16em] uppercase text-muted-foreground">
                {item.period}
              </p>
              {item.note && <p className="mt-3 text-base text-foreground/70">{item.note}</p>}
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section
        id="experience"
        eyebrow={t.experience.eyebrow}
        title={t.experience.heading}
        tone="cream"
      >
        <div className="relative border-l border-border pl-8 md:pl-12">
          {t.experience.items.map((job) => (
            <div key={job.company} className="relative pb-14 last:pb-0">
              <span className="absolute -left-[calc(2rem+4.5px)] top-2 h-2 w-2 rounded-full bg-primary md:-left-[calc(3rem+4.5px)]" />
              <p className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
                {job.period}
              </p>
              <h3 className="mt-3 text-xl text-foreground md:text-2xl">{job.role}</h3>
              <p className="mt-1 text-base text-primary">{job.company}</p>
              <ul className="mt-5 space-y-3">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-base leading-[1.75] text-muted-foreground"
                  >
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Portfolio */}
      <Section
        id="portfolio"
        eyebrow={t.portfolio.eyebrow}
        title={t.portfolio.heading}
        description={t.portfolio.description}
        tone="ivory"
      >
        <div className="space-y-28 md:space-y-36">
          {t.portfolio.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section
        id="certifications"
        eyebrow={t.certifications.eyebrow}
        title={t.certifications.heading}
        tone="cream"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.certifications.items.map((cert) => (
            <div
              key={cert.title}
              className="flex gap-4 rounded-2xl border border-border bg-ivory p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe"
            >
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-base font-medium text-foreground">{cert.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{cert.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        eyebrow={t.contact.eyebrow}
        title={t.contact.heading}
        description={t.contact.description}
        tone="ivory"
      >
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            <Button asChild size="lg" className="rounded-full">
              <a href={mailto}>
                {t.contact.cta} <Mail />
              </a>
            </Button>

            <div className="space-y-4">
              {[
                { icon: Mail, label: profile.email, href: `mailto:${profile.email}`, name: "Email" },
                {
                  icon: Linkedin,
                  label: profile.linkedinLabel,
                  href: profile.linkedin,
                  name: "LinkedIn",
                },
                { icon: Github, label: profile.githubLabel, href: profile.github, name: "GitHub" },
                {
                  icon: MessageCircle,
                  label: t.contact.whatsapp,
                  href: profile.whatsapp,
                  name: "WhatsApp",
                },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                    <item.icon className="h-4 w-4 text-accent-foreground" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.16em] uppercase text-muted-foreground">
                      {item.name}
                    </span>
                    <span className="text-base text-foreground">{item.label}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <p className="text-base leading-[1.75] text-muted-foreground">{t.contact.formNote}</p>
            <div className="space-y-2">
              <Label htmlFor="name">{t.contact.name}</Label>
              <Input id="name" name="name" required placeholder={t.contact.namePlaceholder} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t.contact.email}</Label>
              <Input id="email" name="email" type="email" required placeholder="name@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t.contact.message}</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={t.contact.messagePlaceholder}
              />
            </div>
            <Button type="submit" size="lg" variant="outline" className="rounded-full" disabled={sending}>
              {sending ? t.contact.sending : t.contact.send}
            </Button>
          </form>
        </div>
      </Section>

      <footer className="bg-cream px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
          <div className="hairline max-w-sm" />
          <p className="font-display text-lg text-foreground">{profile.name}</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name} · {t.footer.role}
          </p>
        </div>
      </footer>
    </main>
  );
}

function IndexPage() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}
