import { useState, type ReactNode } from "react";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import {
  about,
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ariska Febrilianti — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Portofolio Ariska Febrilianti, Data Analyst di Jakarta: audit data komersial, SQL, Python, Power BI, dan WebGIS untuk keputusan bisnis terukur.",
      },
      { property: "og:title", content: "Ariska Febrilianti — Data Analyst Portfolio" },
      {
        property: "og:description",
        content:
          "Data Analyst dengan pengalaman audit data komersial 10+ unit bisnis, SQL, Python, Power BI, dan skillset frontend web development.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

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
    <section id={id} className={`${bg} px-6 py-24 md:py-32`}>
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 text-3xl leading-tight text-foreground md:text-4xl">{title}</h2>
          {description && (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
          )}
        </header>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

function Index() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    const form = event.currentTarget;
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Terima kasih! Pesan Anda sudah tercatat.", {
        description: `Saya akan membalas ke email Anda secepatnya — atau langsung ke ${profile.email}.`,
      });
    }, 600);
  };

  return (
    <main className="min-h-screen bg-background">
      <Toaster />

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="font-display text-base tracking-wide text-foreground">
            Ariska<span className="text-primary">.</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-[0.18em] uppercase text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
          <Button asChild size="sm" className="rounded-full">
            <a href={`mailto:${profile.email}`}>Hubungi Saya</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden bg-gradient-blush">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
          <div className="max-w-3xl">
            <p className="eyebrow flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {profile.location}
            </p>
            <h1 className="mt-8 text-5xl leading-[1.05] text-foreground md:text-7xl">
              {profile.name}
            </h1>
            <div className="mt-8 hairline max-w-xs" />
            <p className="mt-8 font-display text-xl leading-relaxed text-foreground/90 md:text-2xl">
              {profile.tagline}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {profile.subTagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href="#portfolio">
                  Lihat Portofolio <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="#contact">Hubungi Saya</a>
              </Button>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
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
        </div>
      </section>

      {/* About */}
      <Section
        id="about"
        eyebrow="About"
        title="Data yang rapi, keputusan yang terukur."
        tone="ivory"
      >
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <p className="font-display text-lg leading-relaxed text-foreground/85 md:text-xl">
            {about}
          </p>
          <div className="grid gap-6 self-start">
            {[
              { value: "10+", label: "Unit bisnis diaudit" },
              { value: "99%", label: "Akurasi data komersial" },
              { value: "12–40%", label: "Efisiensi biaya logistik" },
              { value: "8", label: "Unit kompetensi BNSP" },
            ].map((stat) => (
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
        eyebrow="Skills"
        title="Toolkit analitik & pengembangan web."
        description="Kombinasi kemampuan analisis data end-to-end dengan keterampilan membangun antarmuka dan visualisasi berbasis web."
        tone="cream"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-ivory p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe"
            >
              <h3 className="text-lg text-foreground">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-accent px-3 py-1.5 text-xs text-accent-foreground"
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
      <Section id="education" eyebrow="Education" title="Latar pendidikan." tone="ivory">
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div key={item.degree} className="rounded-2xl border border-border p-7">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="mt-5 text-xl text-foreground">{item.degree}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.school}</p>
              <p className="mt-3 text-xs tracking-[0.16em] uppercase text-muted-foreground">
                {item.period}
              </p>
              {item.note && <p className="mt-3 text-sm text-foreground/70">{item.note}</p>}
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section
        id="experience"
        eyebrow="Experience"
        title="Perjalanan profesional."
        tone="cream"
      >
        <div className="relative border-l border-border pl-8 md:pl-12">
          {experience.map((job) => (
            <div key={job.company} className="relative pb-14 last:pb-0">
              <span className="absolute -left-[calc(2rem+4.5px)] top-2 h-2 w-2 rounded-full bg-primary md:-left-[calc(3rem+4.5px)]" />
              <p className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
                {job.period}
              </p>
              <h3 className="mt-3 text-xl text-foreground md:text-2xl">{job.role}</h3>
              <p className="mt-1 text-sm text-primary">{job.company}</p>
              <ul className="mt-5 space-y-2.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
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
        eyebrow="Portfolio"
        title="Proyek terpilih."
        description="Disusun dari proyek paling relevan untuk peran Data Analyst menuju proyek Frontend/WebGIS. Klik “Lihat Detail” untuk membaca problem, metodologi, dan hasilnya."
        tone="ivory"
      >
        <div className="space-y-28 md:space-y-36">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section
        id="certifications"
        eyebrow="Certifications"
        title="Sertifikasi & pelatihan."
        tone="cream"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex gap-4 rounded-2xl border border-border bg-ivory p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe"
            >
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">{cert.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{cert.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        eyebrow="Contact"
        title="Mari berkolaborasi."
        description="Terbuka untuk peran Data Analyst, proyek analitik, maupun pengembangan dashboard interaktif."
        tone="ivory"
      >
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Nama</Label>
              <Input id="name" name="name" required placeholder="Nama Anda" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="nama@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Pesan</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Tulis pesan Anda…" />
            </div>
            <Button type="submit" size="lg" className="rounded-full" disabled={sending}>
              {sending ? "Mengirim…" : "Kirim Pesan"}
            </Button>
          </form>

          <div className="space-y-4">
            {[
              { icon: Mail, label: profile.email, href: `mailto:${profile.email}`, name: "Email" },
              { icon: Linkedin, label: profile.linkedinLabel, href: profile.linkedin, name: "LinkedIn" },
              { icon: Github, label: profile.githubLabel, href: profile.github, name: "GitHub" },
              { icon: MessageCircle, label: "Chat via WhatsApp", href: profile.whatsapp, name: "WhatsApp" },
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
                  <span className="text-sm text-foreground">{item.label}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      <footer className="bg-cream px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
          <div className="hairline max-w-sm" />
          <p className="font-display text-lg text-foreground">Ariska Febrilianti</p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ariska Febrilianti · Data Analyst · Jakarta, Indonesia
          </p>
        </div>
      </footer>
    </main>
  );
}
