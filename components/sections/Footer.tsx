"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.div
            className="flex items-center gap-2 text-secondary text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>© {currentYear}</span>
            <span className="text-accent font-medium">Dylan Hacquard</span>
            <span>•</span>
            <span>Tous droits réservés</span>
          </motion.div>

          {/* Made with love */}
          <motion.div
            className="flex items-center gap-2 text-secondary text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span>Fait avec</span>
            <Heart
              size={16}
              className="text-danger fill-danger animate-pulse"
            />
            <span>et</span>
            <span className="text-accent font-medium">Next.js</span>
          </motion.div>

          {/* Version or additional info */}
          <motion.div
            className="text-secondary text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="https://github.com/h4wkzHD/Portfoliov2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              v2.0 • Code source
            </a>
          </motion.div>
        </div>

        {/* Back to top button */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-secondary hover:text-accent transition-colors text-sm flex items-center gap-2 mx-auto group"
          >
            <span>Retour en haut</span>
            <svg
              className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
