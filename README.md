# ⚡ Fitball Shop — Website

A bold, dark-themed sports & gym store website built with **React + Tailwind CSS**.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## 📁 Project Structure

```
fitball/
├── index.html
├── vite.config.js
├── tailwind.config.js       ← Colour palette, fonts, animations
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx              ← Router + layout shell
    ├── index.css            ← Tailwind + custom animations & utilities
    │
    ├── assets/
    │   └── images/
    │       └── README.md    ← Instructions for adding photos
    │
    ├── data/
    │   └── siteData.js      ← ⭐ ALL content lives here (categories, contact, images)
    │
    ├── components/
    │   ├── Navbar.jsx        ← Fixed dark navbar, mobile hamburger
    │   ├── Footer.jsx        ← Links, socials, contact info
    │   ├── ImageBox.jsx      ← Smart image / animated dark placeholder
    │   └── TickerBand.jsx    ← Animated horizontal scrolling ticker
    │
    └── pages/
        ├── Home.jsx          ← Hero, featured categories, stats, why us, CTA
        ├── Categories.jsx    ← All 12 categories with filter tabs
        └── Contact.jsx       ← Location info, hours, form, map slot
```

---

## 🖼️ Adding Images

1. Drop photos into `src/assets/images/`
2. Open `src/data/siteData.js`
3. Uncomment import lines at the top and assign to matching keys

See `src/assets/images/README.md` for the full table.

---

## 🏷️ Editing Categories

All categories are in `src/data/siteData.js → CATEGORIES` array.

Each item has:
- `id` – matches key in `CATEGORY_IMAGES`
- `icon` – emoji for placeholder
- `title` / `subtitle`
- `desc` – shown on card
- `items` – list of products in that category
- `accent` – hex colour for the accent line (`#C8F400`, `#00D4FF`, or `#FF4D1A`)

---

## 🎨 Colour Palette

Edit `tailwind.config.js → theme.extend.colors`:

| Token         | Value     | Used for              |
|---------------|-----------|-----------------------|
| `lime`        | `#C8F400` | Primary accent / CTA  |
| `carbon`      | `#0D0D0D` | Main background       |
| `graphite`    | `#1A1A1A` | Card / section bg     |
| `steel`       | `#2A2A2A` | Elevated surfaces     |
| `ash`         | `#8A8A8A` | Muted text            |
| `chalk`       | `#E8E8E8` | Body text             |
| `fire`        | `#FF4D1A` | Danger / highlight    |
| `cyan`        | `#00D4FF` | Secondary accent      |

---

## 🔤 Fonts

| Role    | Font               | Class        |
|---------|--------------------|--------------|
| Display | Bebas Neue         | `font-display`|
| Heading | Barlow Condensed   | `font-heading`|
| Body    | Barlow             | `font-body`  |

---

## 📦 Build

```bash
npm run build   # → dist/
npm run preview # local preview of build
```

---

Built for Champions ⚡
