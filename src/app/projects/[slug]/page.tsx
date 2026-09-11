import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectsData } from "@/lib/data/projects";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
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
      title: `${project.title} | HYLY Luxury`,
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

  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  return (
    <article className="pt-36 sm:pt-44 md:pt-48 bg-[#F7F5F2]">
      {/* Header */}
      <section className="pb-12 sm:pb-16 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#6B6B6B] hover:text-[#171717] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio Archive
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs bg-white text-[#171717] px-4 py-1 rounded-full border border-[#E5E5E5]">
                {project.categoryLabel}
              </span>
              <span className="text-xs font-mono text-[#6B6B6B] bg-white px-3 py-1 rounded-full border border-[#E5E5E5]">
                Completed {project.year}
              </span>
            </div>

            <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] text-[#171717] tracking-tight mb-6">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-[#6B6B6B] leading-relaxed max-w-3xl">
              {project.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Hero Cover Image (Rounded 28px) */}
      <section className="py-12 sm:py-16">
        <Container size="wide">
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-[16/9.5] w-full rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-[0_20px_45px_rgba(0,0,0,0.06)]">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1200px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Project Overview & Meta Grid */}
      <section className="py-16 sm:py-24 border-t border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] mb-3 block">
                  The Design Narrative
                </span>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171717] font-normal mb-6">
                  Architectural Synthesis
                </h2>
                <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Highlights Card */}
              <div className="p-8 bg-white rounded-[28px] border border-[#E5E5E5]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] block mb-4">
                  Key Accomplishments
                </span>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[#171717]"
                    >
                      <Sparkles className="w-4 h-4 text-[#8B6A4D] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              {project.quote && (
                <div className="p-8 bg-white rounded-[28px] border-l-4 border-[#8B6A4D] border-y border-r border-[#E5E5E5]">
                  <p className="font-serif-editorial text-xl sm:text-2xl italic text-[#171717] mb-4">
                    "{project.quote.text}"
                  </p>
                  <div className="text-sm font-medium text-[#171717]">
                    {project.quote.author}
                  </div>
                  <div className="text-xs text-[#6B6B6B]">
                    {project.quote.role}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Specifications Card */}
            <div className="lg:col-span-5">
              <div className="p-8 bg-white rounded-[28px] border border-[#E5E5E5] sticky top-36 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] block pb-4 border-b border-[#E5E5E5]">
                  Commission Specifications
                </span>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex justify-between py-2 border-b border-[#F7F5F2]">
                    <span className="text-[#6B6B6B]">Location:</span>
                    <span className="text-[#171717] font-sans flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#8B6A4D]" />
                      {project.location}
                    </span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-[#F7F5F2]">
                    <span className="text-[#6B6B6B]">Year:</span>
                    <span className="text-[#171717] font-sans">{project.year}</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-[#F7F5F2]">
                    <span className="text-[#6B6B6B]">Client Typology:</span>
                    <span className="text-[#171717] font-sans">{project.clientType}</span>
                  </div>

                  {project.architect && (
                    <div className="flex justify-between py-2 border-b border-[#F7F5F2]">
                      <span className="text-[#6B6B6B]">Architectural Lead:</span>
                      <span className="text-[#171717] font-sans">{project.architect}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <span className="text-[#6B6B6B] block mb-1">HYLY Scope:</span>
                    <p className="text-xs font-sans text-[#171717] leading-relaxed">
                      {project.scope}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E5E5]">
                  <Button href="/contact" variant="pill-dark" size="md" className="w-full">
                    Commission Similar Work
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Materials Specified Grid */}
      <section className="py-20 sm:py-28 border-t border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-3 block">
                Material Palette
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171717]">
                Materials Specified on this Project
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.materialsUsed.map((mat) => (
                <div
                  key={mat.name}
                  className="p-8 bg-white rounded-[28px] border border-[#E5E5E5] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono uppercase text-[#8B6A4D] mb-2 block">
                      {mat.serviceSlug.replace("-", " ")}
                    </span>
                    <h3 className="font-serif-editorial text-2xl font-normal text-[#171717] mb-3">
                      {mat.name}
                    </h3>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                      {mat.description}
                    </p>
                  </div>
                  <Link
                    href={`/services#${mat.serviceSlug}`}
                    className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#171717] hover:text-[#8B6A4D] transition-colors"
                  >
                    View Discipline <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-20 sm:py-28 border-t border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-3 block">
                Visual Documentation
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171717]">
                Commission Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-[0_10px_25px_rgba(0,0,0,0.03)]"
                >
                  <Image
                    src={img}
                    alt={`${project.title} detail ${idx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Projects */}
      <section className="py-20 sm:py-28 border-t border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-2 block">
                  Continuity
                </span>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171717]">
                  Related Commissions
                </h2>
              </div>
              <Button href="/projects" variant="pill-outline" size="sm">
                All Projects
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((rel) => (
                <ProjectCard key={rel.id} project={rel} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title={`Commission HYLY for Your ${project.categoryLabel} Architecture`}
      />
    </article>
  );
}
