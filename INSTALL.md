# 📖 Guide d'Installation

## Prérequis

- Node.js 18.x ou supérieur
- npm ou yarn
- Git

## Installation Rapide

```bash
# 1. Cloner le projet
git clone https://github.com/h4wkzHD/myportfolio.git
cd myportfolio

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
npm run dev
```

Votre portfolio sera accessible sur `http://localhost:3000`

## Configuration

### 1. Personnaliser vos informations

Ouvrez `lib/constants.ts` et modifiez :

```typescript
export const PERSONAL_INFO = {
  name: "Votre Nom",           // Changez ici
  fullName: "Votre Nom Complet",
  role: "Votre Rôle",
  tagline: "Votre phrase d'accroche",
  description: "Votre description",
  email: "votre@email.com",
  location: "Votre Ville, Pays",
  github: "https://github.com/votre-pseudo",
  linkedin: "https://linkedin.com/in/votre-profil",
  twitter: "https://twitter.com/votre-pseudo",
};
```

### 2. Ajouter vos projets

Dans le même fichier :

```typescript
export const PROJECTS = [
  {
    id: 1,
    title: "Nom du projet",
    description: "Description du projet",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/...",
    demo: "https://...",
    image: "/images/project1.jpg", // Optionnel
  },
  // Ajoutez d'autres projets...
];
```

### 3. Personnaliser votre stack technique

```typescript
export const TECH_STACK = [
  { name: "React", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "MongoDB", category: "database" },
  { name: "Docker", category: "tools" },
  // Ajoutez vos technologies...
];
```

### 4. Modifier la section À Propos

```typescript
export const ABOUT_CONTENT = {
  intro: "Votre introduction...",
  paragraphs: [
    "Premier paragraphe...",
    "Deuxième paragraphe...",
  ],
  skills: [
    "Compétence 1",
    "Compétence 2",
    // ...
  ],
};
```

## Personnalisation Avancée

### Changer les couleurs

Éditez `tailwind.config.ts` :

```typescript
colors: {
  background: "#0d1117",    // Couleur de fond
  surface: "#161b22",       // Couleur des cartes
  border: "#30363d",        // Couleur des bordures
  accent: "#58a6ff",        // Couleur principale
  "accent-hover": "#1f6feb",
  primary: "#c9d1d9",       // Texte principal
  secondary: "#8b949e",     // Texte secondaire
  success: "#3fb950",
  danger: "#f85149",
}
```

### Modifier les animations

Les animations sont dans `components/animations/`. Vous pouvez :

- Changer la durée : `duration={0.6}`
- Modifier la direction : `direction="up"` | `"down"` | `"left"` | `"right"`
- Ajuster le délai : `delay={0.2}`

### Ajouter des images de projets

1. Placez vos images dans `public/images/`
2. Référencez-les dans `PROJECTS` : `image: "/images/mon-projet.jpg"`

## Résolution de Problèmes

### Erreur "Module not found"

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Erreur de build

```bash
# Nettoyer le cache
rm -rf .next
npm run build
```

### Port 3000 déjà utilisé

```bash
# Utiliser un autre port
PORT=3001 npm run dev
```

## Déploiement

### Sur Vercel (Recommandé)

1. Push votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Cliquez sur "Import Project"
4. Sélectionnez votre repository
5. Déployez (c'est automatique !)

### Sur Netlify

```bash
npm run build
# Déployez le dossier .next
```

### Avec Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Support

Si vous rencontrez des problèmes :

1. Vérifiez que Node.js est à jour : `node --version`
2. Vérifiez les logs d'erreur dans la console
3. Consultez la [documentation Next.js](https://nextjs.org/docs)
4. Ouvrez une issue sur GitHub

## Prochaines Étapes

1. ✅ Personnalisez vos informations
2. ✅ Ajoutez vos projets
3. ✅ Testez en local (`npm run dev`)
4. ✅ Déployez sur Vercel
5. ✅ Partagez votre portfolio !

---

Besoin d'aide ? Contactez-moi sur [GitHub](https://github.com/h4wkzHD)
