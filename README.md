# HMD GmbH — Landingpage

> **Ästhetik:** Industrial Precision ("Werkstatt Weiß")
> **Framework:** Next.js 15 (App Router) + TypeScript
> **Styling:** Tailwind CSS v3.4
> **Animationen:** Framer Motion v11

---

## 📋 Projekt-Übersicht

Dies ist die offizielle Landingpage für **HMD GmbH**, ein Spezialist für Innenausbau und Trockenbau in Schneeberg, Erzgebirge.

Das Design folgt der "Industrial Precision"-Ästhetik — saubere Linien, präzise Typografie, und die charakteristische **Foundation Line** als durchgängiges Brand-Element.

---

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Die Seite läuft dann unter `http://localhost:3000`.

### Build (Static Export)

```bash
npm run build
```

Die statische Version wird in den `out/` Ordner exportiert und kann direkt auf jedem Webhost deployed werden.

---

## 📁 Projekt-Struktur

```
hmd-schneeberg/
├── public/
│   └── images/              ← Logos, Projektbilder, OG-Image
├── src/
│   ├── app/                 ← Pages & Routes
│   ├── components/
│   │   ├── atoms/           ← Wiederverwendbare UI-Elemente
│   │   ├── sections/        ← Sektionen der Landingpage
│   │   └── layout/          ← Layout-Wrapper
│   ├── lib/                 ← Utilities (z.B. cn() Helper)
│   └── hooks/               ← Custom React Hooks
├── tailwind.config.ts       ← HMD Design System Config
└── package.json
```

---

## 🎨 Design System

### Farben (Corporate Identity)

| Name               | Hex       | Verwendung                      |
| ------------------ | --------- | ------------------------------- |
| **HMD Dark Red**   | `#bb2624` | Akzente, linke Hälfte des Split |
| **HMD Light Red**  | `#e43e22` | Verläufe, rechte Hälfte         |
| **Construction Grey** | `#686968` | Fließtext, Labels             |
| **White**          | `#ffffff` | Haupthintergrund                |
| **Surface**        | `#f8fafc` | Alternierende Sektionen         |
| **Dark Surface**   | `#1a1a1a` | Footer, Stats-Sektion           |

### Typografie

| Font              | Weights      | Verwendung              |
| ----------------- | ------------ | ----------------------- |
| **Archivo**       | 700, 800, 900| Headlines (Display)     |
| **DM Sans**       | 400, 500     | Fließtext (Body)        |
| **JetBrains Mono**| 400          | Labels, Nummern (Technical) |

### UI-Signaturen

1. **Foundation Line:** 3px Gradient-Linie (`#bb2624 → #e43e22`)
2. **The Split:** Dual-Tone-Effekt (diagonal) auf Buttons und Bildern
3. **Sharp Edges:** `rounded-[2px]` für ein industrielles Aussehen

---

## ✅ TODO: Assets vom Kunden benötigt

Bevor das Projekt live gehen kann, müssen folgende Inhalte bereitgestellt werden:

### Bilder
- [ ] Logo als SVG (2 Varianten: farbig + weiß)
- [ ] Team- oder Geschäftsführer-Foto (für "Über Uns")
- [ ] 3-6 Projektbilder (WebP, min. 1200px breit)
- [ ] Favicon (32×32 px)
- [ ] OpenGraph-Bild (1200×630 px)

### Texte
- [ ] Leistungsbeschreibungen (6× ca. 2-3 Sätze)
- [ ] Firmenbeschreibung "Über Uns" (3-5 Sätze)
- [ ] Projektnamen und -typen
- [ ] Kontaktdaten (Adresse, Telefon, E-Mail, Öffnungszeiten)
- [ ] Impressum-Text (rechtlich vollständig)
- [ ] Datenschutzerklärung (rechtssicher, ggf. von Generator)

### Firmendaten (für SEO & Structured Data)
- [ ] Genaue Adresse
- [ ] Telefon & E-Mail
- [ ] Handelsregisternummer
- [ ] Umsatzsteuer-ID
- [ ] Name Geschäftsführer

---

## 🌐 Deployment

Das Projekt ist für **statische Hosting-Lösungen** optimiert:

### Vercel (empfohlen)
1. Repository auf GitHub pushen
2. Vercel-Account verbinden
3. Deploy — automatisch bei jedem Push

### Netlify
```bash
npm run build
# Upload des out/ Ordners via Netlify UI
```

### Traditionelles Hosting (FTP)
```bash
npm run build
# Upload des out/ Ordners auf den Webserver
```

---

## 📊 Performance-Ziele (Lighthouse)

- ✅ Performance: **>95**
- ✅ Accessibility: **>95**
- ✅ Best Practices: **>95**
- ✅ SEO: **>95**

---

## 🛠️ Technische Details

- **Next.js 15:** App Router, Static Site Generation
- **TypeScript:** Strikte Typisierung
- **Tailwind CSS:** Utility-first CSS mit Custom Theme
- **Framer Motion:** Deklarative Animationen
- **Iconify:** Solar Duotone Icon-Set
- **Deployment:** Static Export (`output: 'export'`)

---

## 📝 Hinweise für Entwickler

1. **Keine AI-Slop-Ästhetik:** Kein Purple/Pink Gradient, keine runden Pills
2. **Präzise Typografie:** Alle Font-Größen sind mit `clamp()` responsive
3. **Foundation Line:** Wird automatisch animiert via `useScrollReveal`
4. **Reduced Motion:** Alle Animationen respektieren `prefers-reduced-motion`
5. **Semantic HTML:** Korrekte Hierarchie (h1 → h2 → h3), ARIA-Labels

---

## 📞 Support

Bei Fragen oder Problemen:
- **Dokumentation:** `IMPLEMENTATION_PLAN.md` im Projekt-Root
- **Design-Richtlinien:** `CLAUDE.md` im Projekt-Root

---

**Entwickelt mit Präzision. Gebaut mit Claude Code.**
