# 🚀 Portfolio HawkzHD v2.0

Portfolio moderne et interactif construit avec Next.js 15, TypeScript, Tailwind CSS et Framer Motion.

## ✨ Fonctionnalités

- 🎨 **Design moderne** inspiré de GitHub avec thème sombre élégant
- ⚡ **Performance optimisée** avec Next.js 15 et App Router
- 🎬 **Animations fluides** avec Framer Motion
- 📱 **Responsive** sur tous les appareils
- 🔄 **Marquee infini** style GitHub pour afficher les technologies
- 🎯 **SEO optimisé** avec métadonnées complètes
- ♿ **Accessible** avec support ARIA
- 🎨 **Tailwind CSS** pour un styling rapide et maintenable

## 🛠️ Stack Technique

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Déploiement**: Vercel (recommandé)

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/h4wkzHD/Portfoliov2.git
cd myportfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎨 Personnalisation

### 1. Informations personnelles

Modifiez le fichier `lib/constants.ts` pour ajouter vos informations :

```typescript
export const PERSONAL_INFO = {
  name: "Votre Nom",
  role: "Votre Rôle",
  // ... autres infos
};
```

### 2. Projets

Ajoutez vos projets dans le même fichier :

```typescript
export const PROJECTS = [
  {
    title: "Mon Projet",
    description: "Description",
    tags: ["React", "Node.js"],
    github: "https://github.com/...",
    demo: "https://...",
  },
];
```

### 3. Technologies

Personnalisez votre stack technique :

```typescript
export const TECH_STACK = [
  { name: "React", category: "frontend" },
  // ... autres technologies
];
```

### 4. Couleurs

Modifiez les couleurs dans `tailwind.config.ts` :

```typescript
colors: {
  background: "#0d1117",
  accent: "#58a6ff",
  // ... autres couleurs
}
```

## 📁 Structure du Projet

```
portfolio-nextjs/
├── app/                    # Next.js App Router
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/
│   ├── animations/        # Composants d'animation
│   ├── sections/          # Sections du portfolio
│   └── ui/               # Composants UI réutilisables
├── lib/
│   ├── constants.ts      # Données du portfolio
│   └── utils.ts          # Fonctions utilitaires
└── public/               # Assets statiques
```

## 🚀 Déploiement

### Vercel (Recommandé)

1. Push votre code sur GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Déployez automatiquement

### Netlify

```bash
npm run build
# Deploy le dossier .next
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Scripts Disponibles

```bash
npm run dev      # Démarrer le serveur de développement
npm run build    # Créer une build de production
npm run start    # Démarrer le serveur de production
npm run lint     # Lancer le linter
```

## 🎯 Optimisations

- ✅ Images optimisées avec next/image
- ✅ Fonts optimisées avec next/font
- ✅ Code splitting automatique
- ✅ Lazy loading des composants
- ✅ Animations performantes avec Framer Motion
- ✅ SEO avec métadonnées complètes

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 License

Ce projet est sous licence MIT.

## 👤 Auteur

**HawkzHD**

- GitHub: [@h4wkzHD](https://github.com/h4wkzHD)
- Website: [hawkzhd.ovh](https://hawkzhd.ovh)

## 🙏 Remerciements

- Design inspiré de GitHub
- Animations avec Framer Motion
- Icons par Lucide

---

Fait avec ❤️ et Next.js
