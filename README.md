# MJoy-IT website

Next.js + Tailwind site voor mjoyit.com. Vier pagina's: Home, Over ons,
Product (Harmoneaz), Contact. Geen CMS/backend nodig — puur statisch/code.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deployen naar Vercel

Optie A — via GitHub (aanbevolen):
1. Maak een nieuwe repo aan op GitHub en push deze map:
   ```bash
   git init
   git add .
   git commit -m "MJoy-IT website"
   git branch -M main
   git remote add origin <jouw-repo-url>
   git push -u origin main
   ```
2. Ga naar https://vercel.com/new en importeer de GitHub-repo.
3. Vercel herkent Next.js automatisch — geen extra configuratie nodig.
4. Na deploy: ga naar Project → Settings → Domains en voeg `mjoyit.com` toe.
   Volg de DNS-instructies van Vercel bij je domeinregistrar.

Optie B — direct met de Vercel CLI:
```bash
npm install -g vercel
vercel login
vercel --prod
```

## Structuur

- `app/page.js` — Home
- `app/over-ons/page.js` — Over ons
- `app/product/page.js` — Harmoneaz
- `app/contact/page.js` — Contact
- `components/` — Header, Footer, StageLine (signature visual)
- `tailwind.config.js` — kleuren, fonts, design tokens

## Content aanpassen

Alle teksten staan direct in de `page.js`-bestanden — geen CMS, dus
aanpassen doe je door de tekst in het bestand te wijzigen en opnieuw te
deployen (bij een GitHub-koppeling gebeurt dat automatisch na een push).
