"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  icon?: ReactNode;
}

export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30",
    secondary:
      "bg-surface text-primary border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20",
    outline:
      "border-2 border-accent text-accent hover:bg-accent hover:text-white",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}
