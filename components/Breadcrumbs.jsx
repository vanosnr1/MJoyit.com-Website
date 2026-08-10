/**
 * Renders a BreadcrumbList JSON-LD script tag.
 *
 * Usage:
 *   <Breadcrumbs items={[
 *     { name: "Home", href: "/" },
 *     { name: "Apps", href: "/apps" },
 *     { name: "Harmoneaz" },          // last item: no href = current page
 *   ]} />
 */
export default function Breadcrumbs({ items }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href && { item: `https://mjoyit.com${item.href}` }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
