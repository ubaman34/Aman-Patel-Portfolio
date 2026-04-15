# Aman Patel – Portfolio

## 📁 File Structure
```
portfolio-aman/
├── index.html       ← All content
├── css/style.css    ← All styles
├── js/main.js       ← Animations & interactions
└── assets/          ← Put your images here
```

## ✏️ Quick Customization Checklist

### Add Your Photo (Hero Section)
1. Copy your photo to `assets/aman.jpg`
2. In `index.html`, find `hero-avatar-placeholder` and delete that `<div>`
3. Uncomment the `<img>` tag just above it

### Add Project Screenshots
Same pattern for each project:
1. Add image to `assets/` (e.g. `assets/kozygo.png`, `assets/devdisplay.png`)
2. Delete the `.featured-project-img-placeholder` div
3. Uncomment the `<img>` tag above it

### Update Social Links
Search for `href="https://github.com/"` and `href="https://linkedin.com/"` in `index.html`
and replace with your actual profile URLs.

### Update Project Links
Find `href="#"` on the "View Project →" and "View on GitHub →" buttons
and replace with real URLs.

## 🚀 Open in VS Code
1. Unzip → open `portfolio-aman/` folder in VS Code
2. Install **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**

## 📤 Deploy Free
- **Netlify**: Drag the folder to netlify.com/drop
- **Vercel**: vercel --cwd portfolio-aman
- **GitHub Pages**: Push to repo → enable Pages in Settings
