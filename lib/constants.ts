export const PERSONAL_INFO = {
  name: "Dylan Hacquard",
  fullName: "Dylan Hacquard",
  role: "Administrateur Réseaux & Système",
  tagline: "Passionné par les infrastructures et la cybersécurité",
  description:
    "Actuellement à la recherche d'une alternance pour une troisième année de licence en informatique suite à l'obtention de mon BTS SIO option SISR. Passionné par les nouvelles technologies depuis de nombreuses années, je suis animé par une réelle volonté de rester à la pointe des innovations informatiques.",
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
  { name: "HTML/CSS", category: "dev" },
  { name: "JavaScript", category: "dev" },
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
    tags: ["Kali Linux", "Metasploit", "Burp Suite", "TryHackMe"],
    github: "#",
    demo: "https://tryhackme.com/p/hawkzhd",
    image: "/images/project1.jpg",
  },
  {
    id: 2,
    title: "Infrastructure Cisco",
    description:
      "Configuration et administration de routeurs et switches Cisco. Mise en place de VLANs, routage inter-VLAN, protocoles de routage (OSPF, EIGRP). Certification Cisco obtenue.",
    tags: ["Cisco", "VLAN", "Routage", "Switch"],
    github: "#",
    demo: "#",
    image: "/images/project2.jpg",
  },
  {
    id: 3,
    title: "Virtualisation VMware & Proxmox",
    description:
      "Déploiement et gestion d'environnements virtualisés. Configuration de clusters, snapshots, migration de VMs, optimisation des ressources.",
    tags: ["VMware", "Proxmox", "Virtualisation", "Linux"],
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
    image: "/images/project4.jpg",
  },
  {
    id: 5,
    title: "Supervision & Monitoring",
    description:
      "Mise en place de solutions de supervision réseau et système avec PRTG, Zabbix. Alertes automatisées, dashboards personnalisés.",
    tags: ["PRTG", "Zabbix", "Monitoring", "Nagios"],
    github: "#",
    demo: "#",
    image: "/images/project5.png",
  },
  {
    id: 6,
    title: "Portfolio Web Responsive",
    description:
      "Réalisation de mon portfolio personnel en HTML/CSS/JavaScript avec design responsive et animations modernes.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    github: "https://github.com/h4wkzHD/myportfolio",
    demo: "https://hawkzhd.ovh",
    image: "/images/project6.jpg",
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
    "Administration Linux (Debian, Ubuntu, CentOS)",
    "Développement Web (HTML, CSS, JavaScript, Python)",
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
    url: "dylanhacquard@gmail.com",
    icon: "Mail",
  },
];
