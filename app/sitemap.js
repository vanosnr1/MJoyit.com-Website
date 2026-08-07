export default function sitemap() {
  const base = "https://mjoyit.com";
  const routes = ["", "/over-ons", "/product", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
  return routes;
}
