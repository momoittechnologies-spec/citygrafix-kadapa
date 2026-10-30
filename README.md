# City Grafix Kadapa - Modern Website & PWA

A high-performance, modern website and Progressive Web App (PWA) built for **City Grafix**, Kadapa's premier flex printing, 3D LED glow signage, digital printing, and personalized gifting studio at Seven Roads Circle, Ganagapeta, Kadapa.

---

## 🌟 Key Features

1. **Interactive Flex & Print Price Estimator (`#calculator`)**:
   - Real-time instant quotation engine for customers and business owners.
   - Supports Star Flex, Normal Flex, Backlit Flex, LED Glow Boards, 3D Acrylic Letters, Vinyl Stickers, Visiting Cards, Custom Mugs, and Photo Frames.
   - Dimension calculations (Width × Height in feet, square footage, quantity, letter counts).
   - Finishing add-ons: Brass Eyelets (రింగులు), Welded Iron Pipe Frame, Wooden Beeding, Lamination.
   - **1-Tap "Send Quote to WhatsApp"**: Automatically formats the exact dimensions, finishing, and estimated price into a polite message sent directly to City Grafix on `+91 76010 43674`.

2. **Progressive Web App (PWA) Offline Ready**:
   - **Web App Manifest (`public/manifest.webmanifest`)**: Configured for `standalone` native-app feel on Android, iOS, Windows, and macOS.
   - **Service Worker (`public/sw.js`)**: Caches critical application shells and static assets so customers can calculate prices and view contact details even with intermittent Kadapa mobile data connectivity.
   - **PWA Smart Install Prompt (`PwaInstallPrompt.jsx`)**: 1-click install on Android/Chrome, plus guided step-by-step instructions for iOS Safari users (*"Tap Share → Add to Home Screen"*).
   - **App Shortcuts**: Quick launch into Calculator, WhatsApp Order, and Location from the mobile home screen.

3. **Filterable Services Catalog (`#services`)**:
   - Categorized by Flex & Large Format, Sign Boards & 3D Letters, Stickers & Glass Film, Custom Gifts & Frames, Commercial Offset, and Graphic Design Studio.
   - Turnaround times (e.g., 2–4 hours urgent dispatch), technical specifications, and direct WhatsApp inquiry buttons for each item.

4. **Showcase Portfolio Gallery (`#portfolio`)**:
   - Filterable projects with real Kadapa client examples (Seven Roads storefronts, wedding arches, clinic glass branding, luxury business cards).
   - Lightbox image zoom modal with direct WhatsApp inquiry.

5. **Seven Roads Kadapa Local Hub (`#contact`)**:
   - Precise address: #21/135, Seven Roads Circle, opp. Tirumala / Palla Hospital, beside New AF Automart street, Ganagapeta, Kadapa - 516001.
   - Direct Call: `076010 43674` / `+91 76010 43674`.
   - WhatsApp: `+91 72878 67584`.
   - Instagram: `@citygrafix1`.
   - Embedded interactive Google Map iframe with directions.

6. **Mobile-First Floating Action Dock (`MobileBottomDock.jsx`)**:
   - Sticky bottom bar on mobile screens with quick access to Call Shop, WhatsApp Chat, Estimate Price, and Install App.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS with custom CMYK printing palette & Glassmorphism
- **Icons**: Lucide React + custom SVG icons
- **PWA**: Native Web App Manifest + Service Worker (`sw.js`)
- **Fonts**: Google Plus Jakarta Sans

---

## 🚀 Getting Started

### Development Mode
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run preview
```
The optimized production bundle will be generated in the `dist/` directory ready to deploy to any static host (Firebase Hosting, Vercel, Netlify, Cloudflare Pages).
