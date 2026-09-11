import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectsData } from "@/lib/data/projects";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { CTABanner } from "@/components/shared/CTA";
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, Building, Sparkles } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | HYLY",
    };
  }

  return {
    title: `${project.title} - ${project.categoryLabel}`,
    description: `${project.overview.slice(0, 160)}...`,
    openGraph: {
      title: `${project.title} | HYLY Craftsmanship`,
      description: project.subtitle,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    alternates: {
      canonical: `https://hyly.luxury/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Related projects in the same or other category
  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  return (
    <article className="pt-28 sm:pt-36 bg-[#090a0c]">
      {/* Back Link & Header */}
      <section className="pb-12 sm:pb-16 border-b border-white/[0.08]">
        <Container>
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9ea3b0] hover:text-[#c5a880] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio Archive
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="brass">{project.categoryLabel}</Badge>
            <span className="text-xs font-mono text-[#9ea3b0] bg-white/[0.04] px-3 py-1 border border-white/[0.06]">
              Completed {project.year}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.03em] text-[#f6f4f0] leading-[1.06] mb-6 max-w-5xl">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-light text-[#9ea3b0] leading-relaxed max-w-3xl">
            {project.subtitle}
          </p>
        </Container>
      </section>

      {/* 1. Cover Image */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#16191f] border border-white/[0.08]">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1400px"
              className="object-cover object-center brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </Container>
      </section>

      {/* 2. Project Overview & Meta Grid */}
      <section className="py-16 sm:py-24 border-t border-white/[0.08] bg-[#0b0d10]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Project Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="editorial-tag mb-3 block">Architectural Overview</span>
                <h2 className="text-3xl font-light text-[#f6f4f0] mb-6">
                  The Design Narrative
                </h2>
                <p className="text-base sm:text-lg font-light text-[#a8adba] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div className="p-8 bg-[#121418] border border-white/[0.08]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880] block mb-4">
                  Key Architectural Accomplishments
                </span>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm font-light text-[#f6f4f0]"
                    >
                      <Sparkles className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial Quote if present */}
              {project.quote && (
                <div className="p-8 bg-[#121418] border-l-2 border-[#c5a880]">
                  <p className="text-lg font-light italic text-[#f6f4f0] mb-4">
                    "{project.quote.text}"
                  </p>
                  <div className="text-xs font-mono text-[#c5a880]">
                    {project.quote.author}
                  </div>
                  <div className="text-[11px] text-[#9ea3b0]">
                    {project.quote.role}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Architectural Metadata Card */}
            <div className="lg:col-span-5">
              <div className="p-8 bg-[#111317] border border-white/[0.08] sticky top-32 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880] block pb-4 border-b border-white/[0.06]">
                  Commission Specifications
                </span>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex justify-between py-2 border-b border-white/[0.04]">
                    <span className="text-[#9ea3b0]">Location:</span>
                    <span className="text-[#f6f4f0] font-sans flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                      {project.location}
                    </span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-white/[0.04]">
                    <span className="text-[#9ea3b0]">Year:</span>
                    <span className="text-[#f6f4f0] font-sans">{project.year}</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-white/[0.04]">
                    <span className="text-[#9ea3b0]">Client Typology:</span>
                    <span className="text-[#f6f4f0] font-sans">{project.clientType}</span>
                  </div>

                  {project.architect && (
                    <div className="flex justify-between py-2 border-b border-white/[0.04]">
                      <span className="text-[#9ea3b0]">Architectural Partner:</span>
                      <span className="text-[#f6f4f0] font-sans">{project.architect}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <span className="text-[#9ea3b0] block mb-1">HYLY Scope of Work:</span>
                    <p className="text-xs font-sans text-[#e4d5be] leading-relaxed">
                      {project.scope}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <Button href="/contact" variant="brass" size="md" className="w-full" withArrow>
                    Commission Similar Work
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Materials Used Breakdown */}
      <section className="py-20 sm:py-28 border-t border-white/[0.08] bg-[#090a0c]">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="editorial-tag mb-2 block">Material Palette</span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#f6f4f0] mb-4">
              Materials Specified on this Commission
            </h2>
            <p className="text-sm text-[#9ea3b0] font-light">
              Each surface was hand-picked and calibrated to withstand site-specific environmental conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.materialsUsed.map((mat) => (
              <div
                key={mat.name}
                className="p-6 sm:p-8 bg-[#111317] border border-white/[0.08] hover:border-[#c5a880]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase text-[#c5a880]">
                      Discipline: {mat.serviceSlug.replace("-", " ")}
                    </span>
                  </div>
                  <h3 className="text-xl font-light text-[#f6f4f0] mb-2">
                    {mat.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-[#9ea3b0] leading-relaxed mb-6">
                    {mat.description}
                  </p>
                </div>
                <Link
                  href={`/services#${mat.serviceSlug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#e4d5be] hover:text-[#c5a880] transition-colors"
                >
                  Explore Discipline <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. High-Resolution Gallery */}
      <section className="py-20 sm:py-28 border-t border-white/[0.08] bg-[#0b0d10]">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="editorial-tag mb-2 block">Architectural Captures</span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#f6f4f0] mb-4">
              Commission Visual Documentation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#16191f] border border-white/[0.08]"
              >
                <Image
                  src={img}
                  alt={`${project.title} architectural detail ${idx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center brightness-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Related Projects */}
      <section className="py-20 sm:py-28 border-t border-white/[0.08] bg-[#090a0c]">
        <Container>
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="editorial-tag mb-2 block">Portfolio Continuity</span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#f6f4f0]">
                Related Commissions
              </h2>
            </div>
            <Button href="/projects" variant="outline" size="sm" withArrow>
              All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <ProjectCard key={rel.id} project={rel} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title={`Commission HYLY for Your ${project.categoryLabel} Architecture`}
        subtitle="Connect with our project engineering team to review joinery details, sample availability, and on-site delivery timelines."
      />
    </article>
  );
}
