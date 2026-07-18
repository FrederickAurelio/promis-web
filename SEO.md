
Summary of what’s done and what you should do next:

---

## Part 1: What’s done in the code (SEO in Next.js)

### 1. **Root layout** (`src/app/layout.tsx`)
- **metadataBase** set to your site URL so all absolute URLs (OG, sitemap) are correct.
- **Title template**: `%s | Promis Conveyor Chain` so child pages get consistent titles.
- **Description & keywords** in Indonesian, focused on conveyor chain, sprocket, pabrik kelapa sawit.
- **Open Graph**: `type`, `locale` (`id_ID`), `url`, `siteName` for sharing (e.g. WhatsApp/Facebook).
- **Twitter card**: `summary_large_image` and matching title/description.
- **robots**: `index: true`, `follow: true`.
- **JSON-LD**: `Organization` (name, url, email, address) and `WebSite` (url, name, publisher) for Google.
- **`<html lang="id">`** so the language is correct for Indonesia.

### 2. **Sitemap** (`src/app/sitemap.ts`)
- Dynamic sitemap at `/sitemap.xml` with:
  - `/` (priority 1, weekly)
  - `/about`, `/products` (priority 0.9)
  - `/contact` (priority 0.8)
- Each entry has `lastModified`, `changeFrequency`, `priority`.

### 3. **Robots** (`src/app/robots.ts`)
- `robots.txt` allows all crawlers and points to `https://promischain.id/sitemap.xml`.

### 4. **Per-page metadata**
- **About** (`/about`): title “Tentang Kami”, description about profil & dedikasi industri.
- **Products** (`/products`): title “Produk”, description about katalog conveyor chain, sprocket, pulley.
- **Contact** (`/contact`): title “Kontak”, description about telepon, email, alamat, FAQ.

### 5. **Structured data (JSON-LD)**
- **Contact page**: `FAQPage` schema built from `FAQ_ITEMS` so Google can show FAQ rich results.

---

## Part 2: What you need to do outside the code (external SEO)

### A. **Google Search Console** (main tool for “being on Google”)

1. **Go to**: [Google Search Console](https://search.google.com/search-console).
2. **Add property**
   - Choose “URL prefix” and enter: `https://promischain.id` (or your real domain).
   - If you use `www`, add that too (e.g. `https://www.promischain.id`).
3. **Verify ownership** (pick one):
   - **HTML file**: Download the file Google gives you, put it in your site (e.g. `public/`), then deploy. Confirm in Search Console.
   - **HTML tag**: Add the meta tag they give you into your root layout `<head>`. Then click “Verify”.
   - **DNS**: Add the TXT record they give you at your domain registrar (where you bought the domain). Then verify.
4. **Submit sitemap**
   - In Search Console: **Sitemaps** → add: `https://promischain.id/sitemap.xml` → Submit.
   - Google will then crawl and index your pages over time.

After that you can:
- See which queries and pages are shown in Google.
- Request indexing for new/updated pages.
- See crawl errors and fix them.

### B. **Optional but useful**

- **Bing Webmaster Tools**
  [bing.com/webmasters](https://www.bing.com/webmasters) – add the same site and submit the same sitemap. Helps with Bing (and sometimes other search engines).
- **Google Business Profile**
  If you have a physical location (Medan, etc.), create/claim a [Google Business Profile](https://business.google.com) and link your site. Helps local search and maps.
- **Social / link**
  Share the site (e.g. from Facebook/Instagram/LinkedIn in your constants). Backlinks and shares can help discovery; no code change needed if links are correct.

### C. **After deployment**

- Open `https://yourdomain.com/sitemap.xml` and `https://yourdomain.com/robots.txt` and confirm they load.
- In Search Console, use “URL Inspection” and “Request indexing” for the homepage and main pages once.
- Check **Rich results** (e.g. [Rich Results Test](https://search.google.com/test/rich-results)) with your contact page URL to confirm FAQ schema is valid.

---

**Short version:**
- **In code**: Metadata, sitemap, robots, JSON-LD (Organization, WebSite, FAQ), and per-page titles/descriptions are in place.
- **Outside code**: Add and verify the site in Google Search Console, then submit `sitemap.xml`. Optionally add Bing and Google Business Profile.
