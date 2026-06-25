# Deploying Akshat Sharma's Portfolio

This guide outlines how to deploy the portfolio website to high-performance static hosting platforms: **Vercel** and **Netlify**.

---

## 1. Environment Variables Configuration

Before deploying, configure your Formspree endpoint. In local development, you can use a `.env` file in the root of the project:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/mzdlejyz
```

When deploying to Vercel or Netlify, you must add this variable in the **Environment Variables** settings of the respective dashboards.

---

## 2. Deploying to Vercel

Vercel offers native out-of-the-box support for Vite React applications.

### Option A: Via Vercel Web Dashboard (Recommended)
1. Push your project code to a git repository (GitHub, GitLab, or Bitbucket).
2. Go to [Vercel Dashboard](https://vercel.com/) and click **Add New** > **Project**.
3. Import your project repository.
4. Vercel will automatically auto-detect **Vite** as the framework preset and preconfigure the build settings:
   - **Build Command**: `npm run build` or `vite build`
   - **Output Directory**: `dist`
5. Expand **Environment Variables** and enter the three keys listed above.
6. Click **Deploy**.

### Option B: Via Vercel CLI
1. Install the Vercel CLI globally if you haven't already:
   ```bash
   npm install -g vercel
   ```
2. Run the deployment command in the project root:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to log in, link the project, and deploy.
4. Add environment variables using the dashboard or via:
   ```bash
   vercel env add VITE_FORMSPREE_ENDPOINT production
   ```
5. Deploy to production:
   ```bash
   vercel --prod
   ```

### Single Page Application (SPA) Routing Redirects
Vercel handles client-side routes natively, but to make sure any deep-links do not return a 404 error, create a `vercel.json` file in the root of the project (already configured if deploying standard Vite):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 3. Deploying to Netlify

Netlify is another premium platform optimized for static frontend frameworks.

### Option A: Via Netlify Web Dashboard (Recommended)
1. Push code to your git repository.
2. Go to the [Netlify Dashboard](https://app.netlify.com/) and select **Add new site** > **Import an existing project**.
3. Select your git provider and authorize.
4. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Click **Add Environment Variable** and enter the Formspree endpoint variable.
6. Click **Deploy [Site Name]**.

### Option B: Netlify SPA Redirects
To handle fallback routing on Netlify, Vite compiles standard routes, but you should have a redirects rule. Create a file named `_redirects` inside the `public` directory so it is copied into `dist` during the build:
```text
/*    /index.html   200
```
This is already configured in the build directory.

---

## 4. Local Build & Test Checklist
Before deploying, verify everything locally by running:
```bash
# 1. Clean build
npm run build

# 2. Preview local build server
npm run dev
# or
npx.cmd vite preview
```
This runs the compiled static assets in `dist` on a local server (`http://localhost:4173` by default) to inspect exactly what will serve in production.
