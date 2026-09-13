# FYvess Portfolio

A modern, animated TypeScript React portfolio featuring an AI chatbot powered by Gemini API, dark/light mode toggle, background music, and full SEO optimization.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Smooth Animations**: Marquee animations, scroll effects, typing animations
- **AI Chatbot**: Gemini-powered assistant answering questions about your background and projects
- **Theme Toggle**: Dark/light mode with localStorage persistence
- **Background Music**: Optional ambient music with toggle control
- **Responsive Design**: Mobile-first approach, fully responsive
- **SEO Optimized**: Meta tags, structured data, sitemap, geographic optimization
- **Performance**: Lighthouse 90+, lazy loading, code splitting
- **Accessible**: WCAG 2.1 Level AA compliance
- **Design System**: Poppins font, #050505 + #D7FFE0 color palette, Phosphor icons

## 🎯 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Git
- A Gemini API key (get one at [Google AI Studio](https://makersuite.google.com/app/apikey))
- Vercel account (free tier works)
- GitHub account

### Step-by-Step Setup

#### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone https://github.com/yourusername/fyvess.github.io.git
cd fyvess.github.io

# Install all dependencies
npm install

# Install missing type definitions (if needed)
npm install --save-dev @types/node
```

#### 2. Customize Your Content

Edit `src/data/content.ts` to add your information:
- Personal details (name, email, phone, location)
- Social media links
- Skills and statistics
- Projects with descriptions and links
- Certificates
- Tech stack

Replace images in `public/assets/`:
- `img/profile.jpg` - Your profile photo
- `cv/resume.pdf` - Your CV/resume
- `projects/*` - Your project screenshots
- `cert/*` - Your certificate images

#### 3. Local Development (Optional - Frontend Only)

```bash
# Start development server
npm run dev

# Open browser to http://localhost:5173
```

**Note:** Chatbot won't work locally without backend setup. See step 4 for full setup.

#### 4. Deploy Backend to Vercel (Required for Chatbot)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy backend
vercel deploy

# Follow prompts:
# - Link to existing project or create new
# - Set project name
# - Deploy to production: vercel --prod
```

**Set Environment Variables in Vercel Dashboard:**

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Environment Variables
4. Add these variables:
   - `GEMINI_API_KEY` = Your Gemini API key from Google AI Studio
   - `ALLOWED_ORIGIN` = `https://yourusername.github.io` (replace with your GitHub Pages URL)

5. Redeploy: `vercel --prod` to apply environment variables

**Copy your Vercel backend URL** (e.g., `https://your-project.vercel.app`)

#### 5. Configure Frontend to Connect to Backend

Create `.env.local` file in project root:

```bash
# .env.local (do NOT commit this file)
VITE_API_URL=https://your-project.vercel.app
```

Replace `your-project.vercel.app` with your actual Vercel backend URL from step 4.

#### 6. Build for Production

```bash
# Build the frontend
npm run build

# This creates a dist/ folder with optimized production files
```

#### 7. Deploy Frontend to GitHub Pages

**Option A: Using GitHub Actions (Recommended)**

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}
      - uses: actions/upload-pages-artifact@v1
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v1
```

2. Add `VITE_API_URL` secret in GitHub:
   - Go to repository Settings → Secrets and variables → Actions
   - Add new secret: `VITE_API_URL` = your Vercel backend URL

3. Enable GitHub Pages in repository settings:
   - Settings → Pages
   - Source: GitHub Actions

4. Push to main branch - automatic deployment!

**Option B: Manual Deployment**

```bash
# Build the project
npm run build

# Install gh-pages
npm install -g gh-pages

# Deploy to gh-pages branch
gh-pages -d dist
```

Enable GitHub Pages in repository settings (Settings → Pages → Source: gh-pages branch).

### Verify Deployment

1. Visit your GitHub Pages URL: `https://yourusername.github.io`
2. Test all features:
   - Theme toggle (dark/light mode)
   - Music toggle
   - Smooth scrolling navigation
   - Portfolio tabs
   - **Chatbot** (click floating button, send a message)
   - CV download
   - All links

### Troubleshooting

**Chatbot not responding?**
- Check Vercel deployment logs
- Verify `GEMINI_API_KEY` is set in Vercel dashboard
- Verify `ALLOWED_ORIGIN` matches your GitHub Pages URL exactly
- Check browser console for CORS errors

**Build failing?**
- Run `npm install --save-dev @types/node` to fix TypeScript errors
- Check Node.js version (needs 16+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

**Images not loading?**
- Check file paths in `src/data/content.ts`
- Verify images exist in `public/assets/`
- Check browser console for 404 errors

## 🏗️ Architecture

### Frontend
- **Deployment**: GitHub Pages
- **Technology**: React 18 + TypeScript + Vite
- **Styling**: CSS Modules with design tokens
- **State**: React Context (Theme, Music)
- **Components**: Navigation, Hero, About, Portfolio, Contact, Footer, Marquee, Loader, Chatbot

### Backend
- **Deployment**: Vercel serverless functions
- **API**: POST /api/chat endpoint
- **Integration**: Gemini API
- **Security**: API key in environment variables, CORS configured

## 📁 Project Structure

```
.
├── src/
│   ├── components/        # React components
│   ├── context/           # Theme and Music context
│   ├── hooks/             # Custom hooks
│   ├── styles/            # CSS modules and tokens
│   ├── types/             # TypeScript interfaces
│   ├── data/              # Static content
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── assets/
│       ├── img/           # Images
│       ├── cert/          # Certificates
│       ├── projects/      # Project screenshots
│       ├── cv/            # CV file
│       └── music/         # Background music
├── api/
│   └── chat.ts            # Vercel serverless function
├── .kiro/specs/           # Spec documents (design, requirements, tasks)
└── vite.config.ts
```

## 🎨 Design System

### Colors
- **Primary Dark**: #050505
- **Primary Accent**: #D7FFE0 (Mint Green)
- **Background Light**: #FFFFFF
- **Background Dark**: #1A1A1A

### Typography
- **Font Family**: Poppins
- **Weights**: 400 (Regular), 600 (Semibold), 700 (Bold)

### Icons
- **Library**: Phosphor Icons

## 📊 Performance

Target metrics:
- Lighthouse Performance: ≥90
- First Contentful Paint: <1.8s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

Optimizations:
- Lazy loading for images
- Code splitting
- CSS Modules (no CSS-in-JS)
- Native Web APIs (IntersectionObserver, matchMedia, localStorage)
- Prefers-reduced-motion support

## ♿ Accessibility

- WCAG 2.1 Level AA compliance
- Semantic HTML5
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast ratios ≥4.5:1
- Skip-to-content link

## 🔒 Security

- API key stored in Vercel environment variables (never in frontend)
- CORS configured to allow only your GitHub Pages domain
- Rate limiting on chatbot (2 second minimum between requests)
- No sensitive data in frontend code

## 📝 License

Exclusive Rights to FYvess. See [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by FYvess**
