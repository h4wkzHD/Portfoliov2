"use client";

import Card from "../ui/Card";
import ScrollReveal from "../animations/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Une sélection de mes réalisations récentes">
          Mes Projets
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <Card
                title={project.title}
                description={project.description}
                tags={project.tags}
                github={project.github}
                demo={project.demo}
                image={project.image}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA pour voir plus de projets */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="https://wiki.hawkzhd.ovh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors group"
            >
              <span className="text-lg font-medium">
                Consulter mon Wiki
              </span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
