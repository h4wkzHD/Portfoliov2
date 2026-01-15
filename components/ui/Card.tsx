"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  children?: ReactNode;
}

export default function Card({
  title,
  description,
  tags,
  github,
  demo,
  image,
  children,
}: CardProps) {
  return (
    <motion.div
      className="group relative bg-surface border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Images Projets */}
      {image && (
        <div className="relative h-48 overflow-hidden bg-surface/50">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Overlay gradient pour la transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="flex gap-2">
            {github && github !== "#" && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-accent hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
              </motion.a>
            )}
            {demo && demo !== "#" && (
              <motion.a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-accent hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-secondary mb-4 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-background text-accent rounded-full border border-accent/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {children}
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0" />
      </div>
    </motion.div>
  );
}