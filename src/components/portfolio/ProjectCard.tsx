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
import type { Project } from "@/data/portfolio";

function ProjectCarousel({ project }: { project: Project }) {
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
          {project.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="overflow-hidden rounded-2xl border border-border bg-ivory shadow-soft">
                <img
                  src={image.src}
                  alt={image.alt}
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
        {project.images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Slide ${index + 1}`}
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
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={cn(index % 2 === 1 && "lg:order-2")}>
        <ProjectCarousel project={project} />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-1 text-[0.65rem] font-medium tracking-[0.18em] uppercase text-accent-foreground">
            {project.category}
          </span>
          <span className="text-xs tracking-wide text-muted-foreground">
            {project.stackLine}
          </span>
        </div>

        <h3 className="mt-5 text-2xl leading-snug text-foreground md:text-3xl">
          <span className="mr-3 font-sans text-xs align-super text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.title}
        </h3>

        <div className="mt-6 space-y-6">
          <Block label="Overview">{project.overview}</Block>

          {open && (
            <>
              <Block label="Problem & Purpose">{project.problem}</Block>
              <Block label="Methodology & Fitur">
                <ul className="space-y-2">
                  {project.methodology.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Block>
              {project.objectives && (
                <Block label="Business & Analytical Objectives">
                  <ul className="space-y-2">
                    {project.objectives.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Block>
              )}
              <Block label="Result">{project.result}</Block>
            </>
          )}

          <Block label="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-ivory px-3 py-1 text-xs text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Block>
        </div>

        <div className="mt-8">
          <Button variant="outline" onClick={() => setOpen((v) => !v)}>
            {open ? "Sembunyikan Detail" : "Lihat Detail"}
            <ChevronDown
              className={cn("transition-transform duration-300", open && "rotate-180")}
            />
          </Button>
        </div>
      </div>
    </article>
  );
}
