# ⚡ Commandes Rapides

## 🚀 Installation & Démarrage

```bash
# Installation
cd portfolio-nextjs
npm install

# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint
```

## 📝 Personnalisation Express (Copier/Coller)

### Changement Rapide des Infos

```bash
# Ouvrir le fichier de configuration
code lib/constants.ts
# ou
nano lib/constants.ts
```

### Template de Configuration Minimale

```typescript
// Copiez ceci dans lib/constants.ts

export const PERSONAL_INFO = {
  name: "VotreNom",
  fullName: "Votre Nom Complet",
  role: "Votre Rôle",
  tagline: "Votre phrase d'accroche",
  description: "Votre description en une phrase",
  email: "votre@email.com",
  location: "Votre Ville, Pays",
  github: "https://github.com/votre-pseudo",
  linkedin: "https://linkedin.com/in/votre-profil",
  twitter: "https://twitter.com/votre-pseudo",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Projet 1",
    description: "Description courte du projet",
    tags: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/...",
    demo: "https://...",
    image: "/images/project1.jpg",
  },
];
```

## 🎨 Changement de Couleur Ultra-Rapide

```typescript
// tailwind.config.ts - ligne 14
accent: "#58a6ff", // ← Remplacez par votre couleur
```

### Palettes Prêtes à l'Emploi

```typescript
// Bleu GitHub (défaut)
accent: "#58a6ff"

// Violet
accent: "#8b5cf6"

// Vert
accent: "#10b981"

// Orange
accent: "#f59e0b"

// Rose
accent: "#ec4899"

// Rouge
accent: "#ef4444"
```

## 🔧 Commandes Git

```bash
# Initialiser Git (si pas déjà fait)
git init
git add .
git commit -m "Initial commit - Portfolio Next.js"

# Lier à GitHub
git remote add origin https://github.com/votre-pseudo/votre-repo.git
git branch -M main
git push -u origin main

# Mises à jour futures
git add .
git commit -m "Update: description du changement"
git push
```

## 🚀 Déploiement Vercel (1 minute)

### Via CLI
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Production
vercel --prod
```

### Via GitHub (Recommandé)
1. Push sur GitHub
2. Aller sur [vercel.com](https://vercel.com)
3. Import Project → Sélectionner le repo
4. Deploy (automatique)

## 🐛 Dépannage Rapide

```bash
# Problème de dépendances
rm -rf node_modules package-lock.json
npm install

# Problème de cache
rm -rf .next
npm run dev

# Voir les erreurs
npm run build
```

## 📦 Commandes npm Utiles

```bash
# Ajouter une dépendance
npm install nom-package

# Supprimer une dépendance
npm uninstall nom-package

# Mettre à jour les dépendances
npm update

# Vérifier les packages obsolètes
npm outdated

# Auditer la sécurité
npm audit
npm audit fix
```

## 🎯 Workflow Recommandé

```bash
# 1. Personnaliser
code lib/constants.ts

# 2. Tester
npm run dev
# → Vérifier sur http://localhost:3000

# 3. Vérifier le build
npm run build

# 4. Commit
git add .
git commit -m "Personnalisation du portfolio"

# 5. Push
git push

# 6. Auto-deploy sur Vercel (si configuré)
```

## 🔍 Recherche dans le Code

```bash
# Trouver où un élément est utilisé
grep -r "recherche" .

# Trouver dans des fichiers spécifiques
grep -r "PERSONAL_INFO" . --include="*.tsx"

# Avec VS Code
# Cmd/Ctrl + Shift + F
```

## 📊 Performance Check

```bash
# Analyser le bundle
npm run build

# Lighthouse (dans Chrome DevTools)
# 1. npm run build && npm start
# 2. Ouvrir Chrome DevTools
# 3. Onglet Lighthouse
# 4. Generate report
```

## 🎨 Commandes Tailwind

```bash
# Générer les classes Tailwind
npx tailwindcss init

# Voir la config Tailwind
npx tailwindcss --help
```

## 📝 Scripts Personnalisés Utiles

### Ajouter à package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "clean": "rm -rf .next node_modules",
    "fresh": "npm run clean && npm install",
    "preview": "npm run build && npm start"
  }
}
```

### Utilisation
```bash
npm run clean    # Nettoyer
npm run fresh    # Réinstallation complète
npm run preview  # Build + Preview
```

## 🔄 Mise à Jour du Portfolio

```bash
# 1. Modifier constants.ts
code lib/constants.ts

# 2. Tester
npm run dev

# 3. Si OK, commit
git add .
git commit -m "Update: ajout nouveau projet"
git push

# Vercel redéploie automatiquement !
```

## 💡 One-Liners Pratiques

```bash
# Port déjà utilisé ? Tuer le processus
lsof -ti:3000 | xargs kill

# Ouvrir dans VS Code
code .

# Ouvrir dans navigateur
open http://localhost:3000
# ou sur Linux
xdg-open http://localhost:3000

# Build size
npm run build | grep "First Load JS"

# Compter les lignes de code
find . -name "*.tsx" -o -name "*.ts" | xargs wc -l
```

## 🎯 Checklist Rapide de Mise en Ligne

```bash
# ✅ Personnaliser
code lib/constants.ts

# ✅ Tester localement
npm run dev

# ✅ Build OK
npm run build

# ✅ Commit & Push
git add . && git commit -m "Portfolio ready" && git push

# ✅ Vérifier sur Vercel
# → Auto-deploy si configuré
```

## 📱 Test Responsive Rapide

```bash
# Ouvrir DevTools dans Chrome
# Cmd/Ctrl + Shift + M (Toggle device toolbar)

# Tester sur :
# - iPhone 12/13 (390x844)
# - iPad (768x1024)
# - Desktop (1920x1080)
```

## 🔐 Variables d'Environnement (si nécessaire)

```bash
# Créer .env.local
touch .env.local

# Ajouter vos variables
echo "NEXT_PUBLIC_API_KEY=votre_clé" >> .env.local

# Ne jamais commit .env.local !
# (déjà dans .gitignore)
```

## 🎓 Commandes d'Apprentissage

```bash
# Documentation Next.js
npm run dev
# puis visiter http://localhost:3000/docs (si configuré)

# Explorer la structure
tree -L 3 -I "node_modules|.next"

# Voir les dépendances
npm list --depth=0
```

---

## 🚀 La Commande Magique du Débutant

```bash
# Tout en un : Install + Dev
npm install && npm run dev
```

Voilà ! Vous êtes prêt à coder 🎉

---

**Besoin d'aide ?**
- 📖 Consultez `README.md`
- 📚 Lisez `GUIDE_COMPLET.md`
- 🔍 Cherchez dans le code avec `grep`

**Bon développement ! ⚡**
