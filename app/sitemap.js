// Werk de datum van een pagina bij wanneer de inhoud écht wijzigt.
const lastModified = {
  "": "2026-08-10",
  "/over-ons": "2026-08-10",
  "/apps": "2026-08-10",
  "/apps/harmoneaz": "2026-08-10",
  "/contact": "2026-08-10",
};

export default function sitemap() {
  const base = "https://mjoyit.com";
  return Object.entries(lastModified).map(([path, date]) => ({
    url: `${base}${path}`,
    lastModified: new Date(date),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
