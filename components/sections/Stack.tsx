"use client";

import { motion } from "framer-motion";
import Marquee from "../ui/Marquee";
import SectionTitle from "../ui/SectionTitle";
import { TECH_STACK } from "@/lib/constants";

export default function Stack() {
  // Icônes simplifiées pour les technologies
  const techIcons: Record<string, string> = {
    // Réseaux
    "AdGuard": "🌐",
    "OPNSense": "🛡️",
    "Suricata": "🐉",
    "HAProxy": "⚖️",
    "Unbound": "🔒",
    "WireShark": "🦈",
    "Putty": "⌨️",
    "WinSCP": "📁",
    
    // Systèmes
    "Windows Server": "🪟",
    "Linux": "🐧",
    "Active Directory": "👥",
    "VMware": "☁️",
    "Proxmox": "📦",
    "Docker": "🐳",
    
    // Cybersécurité
    "Kali Linux": "🎭",
    "Metasploit": "💣",
    "Burp Suite": "🔓",
    "Nmap": "🔍",
    "Exegol": "🗡️",
    
    // Développement
    "Traefik": "📤​",
    "SSH": "⚡",
    "Python": "🐍",
    "Git": "📦",
    "VS Code": "💻",
    "GitHub": "🐙",

    //Supervision
    "Grafana": "📊",
    "Prometheus": "🔥",
    "Zabbix": "📡",
    "AlertManager": "📢​",
    "InfluxDB": "📝​",


    //Automatisation & cloud
    "Ansible": "⚙️",
    "Microsoft 365": "📧",
    "Restic": "💾",
    "Bash": "🖥️",
    "Cron": "⏰",
  };

  // Diviser les technologies en trois rangées pour un meilleur effet
  const reseauxEtSystemes = TECH_STACK.filter(
    (tech) => tech.category === "reseaux" || tech.category === "systemes"
  );
  const securiteEtDev = TECH_STACK.filter(
    (tech) => tech.category === "securite" || tech.category === "dev"
  );
  const supervisionEtCloud = TECH_STACK.filter(
  (tech) => tech.category === "supervision" || tech.category === "cloud"
  );
  const mixRandom = TECH_STACK.slice(0, 12);

  const TechItem = ({ name }: { name: string }) => (
    <motion.div
      className="group flex items-center gap-3 px-6 py-3 bg-surface border border-border rounded-lg hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 whitespace-nowrap"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-3xl group-hover:scale-110 transition-transform">
        {techIcons[name] || "🔧"}
      </span>
      <span className="text-primary font-medium group-hover:text-accent transition-colors">
        {name}
      </span>
    </motion.div>
  );

  return (
    <section id="stack" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12">
        <SectionTitle subtitle="Technologies et outils que j'utilise au quotidien">
          Ma Stack Technique
        </SectionTitle>
      </div>

      <div className="space-y-8">
        {/* Première rangée - défilement vers la gauche */}
        <Marquee>
          {reseauxEtSystemes.map((tech, index) => (
            <TechItem key={`tech-1-${index}`} name={tech.name} />
          ))}
        </Marquee>

        {/* Deuxième rangée - défilement vers la droite */}
        <Marquee reverse>
          {securiteEtDev.map((tech, index) => (
            <TechItem key={`tech-2-${index}`} name={tech.name} />
          ))}
        </Marquee>

        {/* Troisième rangée - vers la droite */}
        <Marquee>
          {supervisionEtCloud.map((tech, index) => (
            <TechItem key={`tech-3-${index}`} name={tech.name} />
          ))}
        </Marquee>
        {/* 4e rangée - mix de tout*/}
        <Marquee reverse>
          {mixRandom.map((tech, index) => (
            <TechItem key={`tech-2-${index}`} name={tech.name} />
          ))}
        </Marquee>
      </div>

      {/* Gradient overlays pour effet de fondu sur les bords */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </section>
  );
}
