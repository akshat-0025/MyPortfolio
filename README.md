# MyPortfolio - Akshat Sharma's Portfolio

A world-class, premium personal portfolio website built for **Akshat Sharma**, Full Stack Web Developer. 

This website is designed with a premium, minimalist startup-founder aesthetic rejecting typical neon blue developer templates in favor of a sleek, dark metallic layout with gold accents.

---

## 🛠️ Technology Stack
- **Core**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first `@theme` variables configuration)
- **Animations**: Framer Motion (for entrance reveals, spring-lag cursors, and component tabs transitions)
- **Forms**: Formspree (POST API requests integration for real-time contact)
- **Audits**: 100% compliant with strict TypeScript checks

---

## ✨ Features
1. **Premium Aesthetic**: Curated slate colors (`#0F1117`, `#171A21`) and earth-toned gold elements (`#D4AF37`) with a subtle radial grid overlay.
2. **Circular Profile Frame**: Smooth rotating dashed gold orbit borders encircling your profile logo.
3. **Custom Trailing Cursor**: Desktop-only custom mouse ring trailing effect using spring physics that reacts on interactive hover states.
4. **Entrance Loader Screen**: Sophisticated character-by-character branding animations.
5. **Interactive Skill Tabs**: Categorized technical stacks (Frontend, Backend, Programming, Tools) displayed in clean minimalist grids.
6. **Project Showcase**: Display dashboard visual mockups for *Smart Waste Management* and *AgroGuardian* with category tags.
7. **Formspree Contact Form**: Fully validated fields with canvas-confetti success alerts linked to the Formspree endpoint.

---

## 🚀 Running Locally

### 1. Install Dependencies
Run the installation command in the project root:
```bash
npm install
```

### 2. Configure Formspree ID
Create a `.env` file in the root directory:
```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/mzdlejyz
```

### 3. Launch Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 📦 Production Builds

To compile and preview optimized static assets:
```bash
# Compile bundle
npm run build

# Preview static assets locally
npm run preview
```

---

## 🌐 Deployments
Refer to [DEPLOY.md](file:///d:/Portfolio/DEPLOY.md) in the project root for step-by-step instructions on publishing your website to **Vercel** and **Netlify**.
