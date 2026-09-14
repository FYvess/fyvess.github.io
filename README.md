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

### Quick Setup Flow

#### 1. Clone & Install

```bash
git clone https://github.com/yourusername/fyvess.github.io.git
cd fyvess.github.io
npm install
```

#### 2. Customize Your Content

Edit `src/data/content.ts` with your info (name, email, projects, skills, etc.)

Replace images in `public/assets/`:
- `img/me.jpg` - Your profile photo
- `projects/*` - Your project screenshots
- `cert/*` - Your certificates

#### 3. Deploy Backend to Vercel (for chatbot)

```bash
npm install -g vercel
vercel login
vercel deploy
vercel --prod
```

**After deploy, go to Vercel Dashboard:**
1. Select your project → Settings → Environment Variables
2. Add:
   - `GEMINI_API_KEY` = your key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - `ALLOWED_ORIGIN` = `https://yourusername.github.io`
3. Run `vercel --prod` again to apply variables

**Copy your Vercel URL** (e.g., `https://my-app.vercel.app`)

#### 4. Configure Frontend

Create `.env.local` in project root:
```
VITE_API_URL=https://my-app.vercel.app
```

#### 5. Deploy Frontend to GitHub Pages

**Method A: GitHub Actions (Recommended - Auto-Deploy)**

Create `.github/workflows/deploy.yml`:
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

Then:
1. Go to GitHub repo Settings → Secrets and variables → Actions
2. Create secret: `VITE_API_URL` = your Vercel URL
3. Go to Settings → Pages → Source: **GitHub Actions**
4. Push to main - done! Auto-deploys on every push.

**Method B: Manual Deploy**
```bash
npm run build
npm install -g gh-pages
gh-pages -d dist
```
Then Settings → Pages → Source: **gh-pages branch**

### Verify It Works

1. Visit `https://yourusername.github.io`
2. Test: theme toggle, music, chatbot, navigation
3. Open browser console (F12) for any errors

### Troubleshooting

| Issue | Fix |
|-------|-----|
| **Chatbot not working** | Check Vercel logs, verify `GEMINI_API_KEY` is set, check `ALLOWED_ORIGIN` matches your GitHub URL exactly |
| **Build fails** | Run `npm install` again, check Node.js version (16+) |
| **Images not loading** | Verify file paths in `src/data/content.ts`, check `public/assets/` folder exists |
| **Theme not persisting** | localStorage is working — close/reopen browser to test |

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
