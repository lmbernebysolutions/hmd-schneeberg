# 🚀 Deployment Guide — HMD GmbH Landingpage

## Vor dem Deployment

### ✅ Checkliste: Assets & Inhalte

Stelle sicher, dass alle Kundendaten eingepflegt sind:

#### 1. Kontaktdaten aktualisieren
- [ ] `src/components/sections/Contact.tsx` — CONTACT_INFO Objekt
- [ ] `src/app/layout.tsx` — Structured Data (Adresse, Telefon, URL)
- [ ] `src/components/sections/Footer.tsx` — Footer-Links prüfen

#### 2. Logo & Bilder hochladen
- [ ] `/public/images/logo-hmd.svg` (farbig, für hellen Hintergrund)
- [ ] `/public/images/logo-hmd-white.svg` (weiß, für dunklen Hintergrund)
- [ ] `/public/images/projects/projekt-01.webp` (mindestens 3 Bilder)
- [ ] `/public/og-image.jpg` (1200×630 px für Social Sharing)
- [ ] `/public/favicon.ico` (32×32 px)

#### 3. Rechtliche Seiten vervollständigen
- [ ] `/src/app/impressum/page.tsx` — Platzhalter mit echten Daten ersetzen
- [ ] `/src/app/datenschutz/page.tsx` — Rechtssichere Datenschutzerklärung einfügen

#### 4. Texte anpassen (falls nötig)
- [ ] Services-Beschreibungen in `src/components/sections/Services.tsx`
- [ ] About-Text in `src/components/sections/About.tsx`
- [ ] Stats-Zahlen in `src/components/sections/Stats.tsx`

---

## Deployment-Optionen

### Option 1: Vercel (Empfohlen, kostenlos)

**Vorteile:**
- Automatisches Deployment bei Git Push
- Kostenlose SSL-Zertifikate
- CDN worldwide
- Preview Deployments für Pull Requests

**Schritte:**

1. **Repository auf GitHub pushen**
   ```bash
   cd hmd-schneeberg
   git init
   git add .
   git commit -m "Initial commit: HMD Schneeberg Landingpage"
   git remote add origin [DEIN-GITHUB-REPO]
   git push -u origin main
   ```

2. **Vercel-Account erstellen**
   - Gehe zu [vercel.com](https://vercel.com)
   - Registriere dich mit deinem GitHub-Account

3. **Projekt importieren**
   - "New Project" → GitHub-Repo auswählen
   - Framework Preset: **Next.js** (wird automatisch erkannt)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `out`

4. **Domain verbinden**
   - In den Vercel-Einstellungen unter "Domains"
   - Eigene Domain hinzufügen (z.B. `www.hmd-schneeberg.de`)
   - DNS-Einträge beim Domain-Provider setzen (Vercel gibt Anleitung)

5. **Fertig!**
   - Jeder Git-Push auf `main` löst automatisch ein Deployment aus

---

### Option 2: Netlify

1. **Build lokal erstellen**
   ```bash
   npm run build
   ```

2. **Netlify-Account erstellen**
   - Gehe zu [netlify.com](https://netlify.com)
   - Registriere dich kostenlos

3. **Deployment**
   - Drag & Drop des `out/` Ordners in Netlify UI
   - Oder: CLI verwenden:
     ```bash
     npm install -g netlify-cli
     netlify deploy --prod --dir=out
     ```

4. **Domain verbinden**
   - In den Netlify-Einstellungen unter "Domain Management"
   - Eigene Domain hinzufügen

---

### Option 3: Traditionelles Webhosting (FTP)

Falls der Kunde bereits einen Webhoster hat (z.B. IONOS, Strato, All-Inkl):

1. **Build erstellen**
   ```bash
   npm run build
   ```

2. **Inhalt des `out/` Ordners hochladen**
   - Mit FileZilla oder einem anderen FTP-Client
   - Hochladen in das Root-Verzeichnis (meist `public_html/` oder `htdocs/`)

3. **`.htaccess` erstellen** (falls Apache-Server)
   ```apache
   # Erzwinge HTTPS
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

   # Trailing Slash entfernen (optional)
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^(.*)/$ /$1 [L,R=301]

   # Custom Error Pages
   ErrorDocument 404 /404.html
   ```

4. **DNS prüfen**
   - Stelle sicher, dass die Domain auf die IP des Servers zeigt

---

## Nach dem Deployment

### ✅ Testing-Checkliste

- [ ] Alle Links funktionieren (Navigation, Footer, Buttons)
- [ ] Bilder werden korrekt geladen
- [ ] Kontaktformular sendet E-Mails
- [ ] Mobile Ansicht getestet (Chrome DevTools)
- [ ] Lighthouse-Score testen: Performance >90
- [ ] SEO: Google Search Console einrichten

### 🔍 SEO & Analytics

1. **Google Search Console**
   - Website bei [search.google.com/search-console](https://search.google.com/search-console) anmelden
   - Sitemap URL eintragen: `https://www.hmd-schneeberg.de/sitemap.xml`

2. **Google Analytics (optional)**
   - Bei Google Analytics registrieren
   - Tracking-Code in `src/app/layout.tsx` einbauen

3. **Google Business Profile**
   - Firmenprofil bei Google My Business anlegen
   - Adresse, Öffnungszeiten, Bilder hinterlegen

---

## 🛠️ Wartung & Updates

### Code-Änderungen

```bash
# Änderungen vornehmen
git add .
git commit -m "Update: [Beschreibung]"
git push
# → Bei Vercel/Netlify: Automatisches Deployment
```

### Inhalte aktualisieren

- **Projektbilder:** Neue Bilder in `public/images/projects/` hochladen
- **Texte:** Komponenten in `src/components/sections/` bearbeiten
- **Kontaktdaten:** `Contact.tsx` und `layout.tsx` anpassen

### Dependencies aktuell halten

```bash
# Alle Packages auf neueste Versionen prüfen
npm outdated

# Updates installieren
npm update

# Sicherheits-Patches
npm audit fix
```

---

## 🚨 Troubleshooting

### Build schlägt fehl
```bash
# Cache löschen
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Bilder werden nicht geladen
- Prüfe, ob Dateien in `public/images/` liegen
- Pfade müssen mit `/` beginnen: `/images/logo.svg`

### Kontaktformular funktioniert nicht
- Standard: `mailto:` Link (öffnet E-Mail-Client)
- Alternative: API-Route mit E-Mail-Service (z.B. SendGrid, Resend)

### Domain zeigt nicht auf die Seite
- DNS-Propagation kann 24-48h dauern
- Prüfe DNS mit `nslookup www.hmd-schneeberg.de`

---

## 📞 Support

Bei technischen Problemen:
1. Dokumentation prüfen: `README.md` und `IMPLEMENTATION_PLAN.md`
2. Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
3. Vercel Support: [vercel.com/support](https://vercel.com/support)

---

**Viel Erfolg beim Deployment! 🚀**
