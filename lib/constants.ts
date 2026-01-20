export const PERSONAL_INFO = {
  name: "Dylan Hacquard",
  fullName: "Dylan Hacquard",
  role: "Administrateur Réseaux & Système",
  tagline: "Passionné par les infrastructures et la cybersécurité",
  description:
    "Actuellement à la recherche d'une alternance pour une première année de Master en CyberSécurité suite à l'obtention de mon BTS SIO option SISR et mon actuelle 3ème année de licence informatique. Passionné par les nouvelles technologies depuis de nombreuses années, je suis animé par une réelle volonté de rester à la pointe des innovations informatiques.",
  email: "dylanhacquard@gmail.com",
  location: "Provence Côte d'Azur, France",
  github: "https://github.com/h4wkzHD",
  linkedin: "https://www.linkedin.com/in/dylan-hacquard/",
  // twitter: "#",
};

export const TECH_STACK = [
  // Réseaux
  { name: "AdGuard", category: "reseaux" },
  { name: "Ansible", category: "reseaux" },
  { name: "pfSense", category: "reseaux" },
  { name: "WireShark", category: "reseaux" },
  { name: "Putty", category: "reseaux" },
  { name: "WinSCP", category: "reseaux" },
  
  // Systèmes
  { name: "Windows Server", category: "systemes" },
  { name: "Linux", category: "systemes" },
  { name: "Active Directory", category: "systemes" },
  { name: "VMware", category: "systemes" },
  { name: "Proxmox", category: "systemes" },
  { name: "Docker", category: "systemes" },
  
  // Cybersécurité
  { name: "Kali Linux", category: "securite" },
  { name: "Metasploit", category: "securite" },
  { name: "Burp Suite", category: "securite" },
  { name: "Nmap", category: "securite" },
  { name: "Exegol", category: "securite" },
  
  // Développement
  { name: "Traefik", category: "dev" },
  { name: "SSH", category: "dev" },
  { name: "Python", category: "dev" },
  { name: "Git", category: "dev" },
  { name: "VS Code", category: "dev" },
  { name: "GitHub", category: "dev" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Pentest & Hacking Éthique",
    description:
      "Apprentissage et exploitation de failles de sécurité sur des machines virtuelles dédiées (TryHackMe, HackTheBox). Utilisation d'outils comme Metasploit, Burp Suite, Nmap.",
    tags: ["Kali Linux", "Metasploit", "Exegol", "TryHackMe"],
    github: "#",
    demo: "https://tryhackme.com/p/hawkzhd",
    image: "/images/project1.jpg",
  },
  {
    id: 2,
    title: "Configuration réseaux",
    description:
      "Configuration et administration de routeurs et switches Cisco. Mise en place de VLANs, routage inter-VLAN, protocoles de routage (OSPF, EIGRP). Certification Cisco obtenue.",
    tags: ["Cisco", "VLAN", "Routage", "Switch"],
    github: "#",
    demo: "#",
    image: "/images/project2.png",
  },
  {
    id: 3,
    title: "Virtualisation VMware & Proxmox",
    description:
      "Déploiement et gestion d'environnements virtualisés. Configuration de clusters, snapshots, backups, homelab.",
    tags: ["VMware", "Proxmox", "Virtualisation", "Docker"],
    github: "#",
    demo: "#",
    image: "/images/project3.jpg",
  },
  {
    id: 4,
    title: "Active Directory & Windows Server",
    description:
      "Administration de domaines Active Directory, gestion des utilisateurs, GPO, serveurs de fichiers, déploiement automatisé avec WDS/MDT.",
    tags: ["Active Directory", "Windows Server", "GPO", "PowerShell"],
    github: "#",
    demo: "#",
    image: "/images/project4.png",
  },
  {
    id: 5,
    title: "Supervision & Monitoring",
    description:
      "Mise en place de solutions de supervision réseau et système avec Zabbix. Alertes automatisées, dashboards personnalisés.",
    tags: ["Grafana", "Zabbix", "Alertmanager", "Prometheus"],
    github: "#",
    demo: "#",
    image: "/images/project5.png",
  },
  {
    id: 6,
    title: "Infrastructure Automatisée avec Backup",
    description:
      "Automatisation pour mon homelab basée sur Ansible. Déploiement automatique de services Docker et système de backup intelligent.",
    tags: ["AWS", "Ansible", "Cron", "Restic"],
    github: "https://github.com/h4wkzHD/ansible-homelab",
    demo: "#",
    image: "/images/project6.png",
  },
];

export const ABOUT_CONTENT = {
  intro:
    "Passionné par les nouvelles technologies depuis de nombreuses années, je suis animé par une réelle volonté de rester à la pointe des innovations informatiques et de contribuer activement à des projets ambitieux et stimulants.",
  paragraphs: [
    "Titulaire d'un BTS SIO option SISR, je me spécialise dans l'administration des infrastructures réseaux et systèmes. Mon parcours m'a permis d'acquérir une solide expertise en configuration de matériels Cisco, virtualisation, et sécurité informatique.",
    "Mon objectif est de continuer à développer mes compétences techniques tout en contribuant à des projets concrets qui font la différence. Je suis particulièrement intéressé par la cybersécurité et le pentest.",
  ],
  skills: [
    "Configuration & Administration Cisco (Routeurs, Switches, Firewall)",
    "Pentest & Exploitation de vulnérabilités (Kali Linux, Metasploit)",
    "Virtualisation (VMware, Proxmox, Docker)",
    "Administration Windows Server & Active Directory",
    "Administration Linux (Debian, Ubuntu, Mint)",
    "Développement Web (HTML, CSS, Python)",
  ],
};

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/h4wkzHD",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dylan-hacquard/",
    icon: "Linkedin",
  },
  // {
  //   name: "Twitter",
  //   url: "#",
  //   icon: "Twitter",
  // },
  {
    name: "Email",
    url: "mailto:dylanhacquard@gmail.com",
    icon: "Mail",
  },
];
