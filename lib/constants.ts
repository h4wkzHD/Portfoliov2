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
  { name: "Unbound", category: "reseaux" },
  { name: "OPNSense", category: "reseaux" },
  { name: "HAProxy", category: "reseaux" },
  { name: "Suricata", category: "reseaux" },
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

  //Supervision
  { name: "Grafana", category: "supervision" },
  { name: "Prometheus", category: "supervision" },
  { name: "Zabbix", category: "supervision" },
  { name: "AlertManager", category: "supervision" },
  { name: "InfluxDB", category: "supervision" },

  //Automatisation & Cloud
  { name: "Ansible", category: "cloud" },
  { name: "Microsoft 365", category: "cloud" },
  { name: "Restic", category: "cloud" },
  { name: "Bash", category: "cloud" },
  { name: "Cron", category: "cloud" },
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
  title: "Création d'un outil d'audit de sécurité automatisé",
  description:
    "Outil d'audit de sécurité automatisé 'VulnScan Pro' développé en Python. Avec génération de PDF.",
  tags: ["Python", "Nmap", "CVE", "Pentest"],
  github: "https://github.com/h4wkzHD/vulnscan-pro",
  demo: "#",
  image: "/images/project2.png",
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
    {
  id: 3,
  title: "Hackathon — Infrastructure Sécurisée",
  description:
    "Infra réseau complète en équipe: OPNsense redondant, HAProxy, Suricata IDS/IPS, segmentation LAN/WAN/DMZ, ect...",
  tags: ["OPNsense", "HAProxy", "Suricata", "Travail d'équipe"],
  github: "#",
  demo: "https://wiki.hawkzhd.ovh",
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
    demo: "https://wiki.hawkzhd.ovh",
    image: "/images/project5.png",
  },
];

export const ABOUT_CONTENT = {
  intro:
    "Passionné par les nouvelles technologies depuis de nombreuses années, je suis animé par une réelle volonté de rester à la pointe des innovations informatiques et de contribuer activement à des projets ambitieux et stimulants.",
  paragraphs: [
     "Je suis quelqu'un de curieux avant tout, j'aime explorer de nouveaux outils, comprendre comment les choses fonctionnent et ne pas rester sur mes acquis. C'est cette curiosité qui m'a poussé à construire mon homelab, automatiser mes infrastructures avec Ansible, ou encore déployer sur un Raspberry Pi un serveur DNS maison qui filtre pubs et trackers sur l'ensemble des appareils du réseau, sans toucher à chaque machine individuellement.",
    "Mes projets couvrent la sécurité offensive, l'administration système, la supervision et l'automatisation — autant de domaines où j'ai pu me confronter à des problématiques réelles et continuer à progresser.",
  ],
skills: [
    "Configuration & Administration Cisco (Routeurs, Switches, Firewall)",
    "Pentest & Exploitation de vulnérabilités (Kali Linux, Metasploit, Exegol)",
    "Sécurité réseau (OPNsense, HAProxy, Suricata IDS/IPS, VPN)",
    "Virtualisation (VMware, Proxmox, Docker)",
    "Administration Windows Server & Active Directory (GPO, WDS/MDT)",
    "Administration Linux (Debian, Ubuntu, Kali)",
    "Automatisation & DevOps (Ansible, scripts Bash/Python)",
    "Supervision & Monitoring (Grafana, Prometheus, Zabbix)",
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
