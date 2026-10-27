# Coeur Sans Frontière (CSF) - Site Officiel

Site web institutionnel pour l'organisation humanitaire camerounaise **Coeur Sans Frontière** ([coeursansfrontieres.org](https://coeursansfrontieres.org)).

## 🚀 Technologies
- **Framework** : Next.js 16 (App Router & Turbopack)
- **Styling** : Tailwind CSS v4 & Lucide Icons
- **Langage** : TypeScript

## 🛠️ Démarrage Local
```bash
npm install
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🌐 Déploiement Vercel & Configuration DNS Hostinger

### 1. Déploiement sur Vercel
1. Rendez-vous sur [vercel.com/new](https://vercel.com/new).
2. Importez le dépôt GitHub `blinksoft123/coeurngo`.
3. Cliquez sur **Deploy**.

### 2. Configuration du Domaine Hostinger (`coeursansfrontieres.org`)
Dans le panneau **Hostinger hPanel** > **Domaines** > **coeursansfrontieres.org** > **Zone DNS** :

| Type | Nom / Hôte | Valeur / Cible | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | `300` |
| **CNAME** | `www` | `cname.vercel-dns.com.` | `300` |

### 3. Association dans Vercel
Dans votre projet Vercel > **Settings** > **Domains**, ajoutez :
- `coeursansfrontieres.org`
- `www.coeursansfrontieres.org` (avec redirection recommandée vers le domaine racine).

