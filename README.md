# Zion Nishikawa — Engineering Portfolio Website

A cozy, warm, and professional personal portfolio for **Zion Nishikawa** (Mechanical Engineering @ Olin College of Engineering).

The design features:
- **Meiji Chocorooms Aesthetic**: Warm cream and biscuit beiges (`#F8F3E9`, `#E8D8BF`), rich milk and dark chocolate accents (`#59331E`, `#2A1810`), and sweet caramel highlights (`#C47935`).
- **Floating Top Bar with Resume Download**: Persistent rounded pill navigation bar with the `[↓ Resume]` download button placed in the top right.
- **Polaroid Headshot with Chocorooms Candies**: Soft rounded polaroid frame with custom floating SVG mushroom candies and cute badges.
- **Top About & Workshop Section**: "Welcome to my workshop, come check it out!" alongside hobbies in woodworking, fishing, and working out.
- **5 Complete Work Experiences**: Verbatim from your resume (Owl Vision AI, Olin Baja SAE, Olympic Collectible AI, Fresh Consulting, MIRAI Cultural Alliance).
- **3 Expandable Projects with 3-Photo Galleries**: Interactive cards with expandable modals containing a 3-image carousel, project highlights, and detailed engineering narratives.
- **One-Click Contact**: Direct email copy button and LinkedIn link.

---

## Getting Started Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How to Customize

### 1. Replacing Project Photos
Place your project photos into `public/images/projects/` and update the image paths in:
`src/data/projects.ts`

Each project has a dedicated 3-photo array:
```ts
images: [
  { src: "/images/projects/your-photo-1.jpg", caption: "Photo caption", alt: "Description" },
  { src: "/images/projects/your-photo-2.jpg", caption: "Photo caption", alt: "Description" },
  { src: "/images/projects/your-photo-3.jpg", caption: "Photo caption", alt: "Description" }
]
```

### 2. Updating Resume PDF
Simply overwrite `public/Zion_Nishikawa_Resume.pdf` with any new version of your resume. The download link in the top bar and contact section will automatically serve the updated file.

### 3. Deploying to Vercel
1. Initialize a git repository and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Zion Nishikawa portfolio"
   ```
2. Push to your GitHub account (`https://github.com/zion-nishikawa/portfolio`).
3. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
4. Select your GitHub repository and click **Deploy**. Vercel will automatically detect Next.js and build it in seconds!
