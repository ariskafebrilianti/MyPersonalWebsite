import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { projectImages, type Project } from "@/data/content";

function ProjectCarousel({ images, title, slideLabel }: { images: string[]; title: string; slideLabel: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    const timer = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 4000);
    return () => {
      clearInterval(timer);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi} opts={{ loop: true }} className="group">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="overflow-hidden rounded-2xl border border-border bg-ivory shadow-soft">
                <img
                  src={src}
                  alt={`${title} — ${slideLabel} ${index + 1}`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 border-border bg-ivory/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        <CarouselNext className="right-3 border-border bg-ivory/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </Carousel>

      <div className="mt-4 flex items-center justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`${slideLabel} ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              current === index
                ? "w-7 bg-primary"
                : "w-1.5 bg-border hover:bg-accent-foreground/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <div className="mt-2 text-base leading-[1.75] text-muted-foreground">{children}</div>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const L = t.labels;
  const images = projectImages[project.id] ?? [];

  return (
    <article className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={cn(index % 2 === 1 && "lg:order-2")}>
        <ProjectCarousel images={images} title={project.title} slideLabel={L.slide} />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-1 text-[0.7rem] font-medium tracking-[0.16em] uppercase text-accent-foreground">
            {project.category === "data" ? L.categoryData : L.categoryFrontend}
          </span>
          <span className="text-sm tracking-wide text-muted-foreground">{project.stackLine}</span>
        </div>

        <h3 className="mt-5 text-2xl leading-snug text-foreground md:text-3xl">
          <span className="mr-3 font-sans text-xs align-super text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.title}
        </h3>

        <div className="mt-6 space-y-6">
          <Block label={L.overview}>{project.overview}</Block>

          {open && (
            <>
              <Block label={L.problem}>{project.problem}</Block>
              <Block label={L.methodology}>
                <ul className="space-y-2.5">
                  {project.methodology.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Block>
              {project.objectives && (
                <Block label={L.objectives}>
                  <ul className="space-y-2.5">
                    {project.objectives.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Block>
              )}
              <Block label={L.result}>{project.result}</Block>
            </>
          )}

          <Block label={L.stack}>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-ivory px-3 py-1 text-sm text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Block>
        </div>

        <div className="mt-8">
          <Button variant="outline" onClick={() => setOpen((v) => !v)}>
            {open ? L.hideDetail : L.viewDetail}
            <ChevronDown
              className={cn("transition-transform duration-300", open && "rotate-180")}
            />
          </Button>
        </div>
      </div>
    </article>
  );
}
