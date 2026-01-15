"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";
import { ABOUT_CONTENT } from "@/lib/constants";

export default function About() {
  const features = [
    {
      icon: Code2,
      title: "Administration Réseaux",
      description: "Configuration et maintenance d'infrastructures",
    },
    {
      icon: Rocket,
      title: "Cybersécurité",
      description: "Pentest et sécurisation des SI",
    },
    {
      icon: Sparkles,
      title: "Virtualisation",
      description: "Déploiement et gestion de VMs",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Qui je suis et ce que je fais">
          À propos de moi
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-lg text-primary leading-relaxed">
                {ABOUT_CONTENT.intro}
              </p>

              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-secondary leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Mes compétences :
                </h3>
                <div className="space-y-2">
                  {ABOUT_CONTENT.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 text-secondary"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right side - Features */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group bg-surface border border-border rounded-xl p-6 hover:border-accent transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <feature.icon
                        className="text-accent"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-secondary">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { label: "Projets réalisés", value: "15+" },
              { label: "Technologies maîtrisées", value: "20+" },
              { label: "Certifications", value: "3" },
              { label: "Années d'expérience", value: "2+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
