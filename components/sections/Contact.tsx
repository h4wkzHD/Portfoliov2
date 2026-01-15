"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import Button from "../ui/Button";
import ScrollReveal from "../animations/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";
import { PERSONAL_INFO } from "@/lib/constants";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@h4wkzHD",
      href: PERSONAL_INFO.github,
    },
    {
      icon: MapPin,
      label: "Location",
      value: PERSONAL_INFO.location,
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle subtitle="Une idée de projet ? Travaillons ensemble !">
          Contactez-moi
        </SectionTitle>

        <ScrollReveal>
          <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 shadow-2xl">
            {/* Main CTA */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Prêt à démarrer votre projet ?
              </h3>
              <p className="text-secondary text-lg mb-8">
                Je suis toujours ouvert à discuter de nouvelles opportunités,
                de projets créatifs ou de partenariats.
              </p>
              <Button href={`mailto:${PERSONAL_INFO.email}`} variant="primary">
                <Mail size={18} />
                Envoyez-moi un message
              </Button>
            </div>

            {/* Contact methods */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex flex-col items-center gap-3 p-6 bg-background border border-border rounded-xl hover:border-accent transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <method.icon
                      className="text-accent group-hover:scale-110 transition-transform"
                      size={24}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-secondary mb-1">
                      {method.label}
                    </div>
                    <div className="font-medium text-primary group-hover:text-accent transition-colors">
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional info */}
            <motion.div
              className="mt-12 pt-8 border-t border-border text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-secondary">
                Temps de réponse moyen:{" "}
                <span className="text-success font-medium">24 heures</span>
              </p>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Social proof or testimonial could go here */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-secondary italic">
              {/* "La meilleure façon de prédire l'avenir est de le créer." */}
              {/* LIGNE MODIFIÉE CI-DESSOUS : Échappement des guillemets et de l'apostrophe */}
              &quot;La meilleure façon de prédire l&apos;avenir est de le créer.&quot;
            </p>
            <p className="text-secondary text-sm mt-2">— Peter Drucker</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
