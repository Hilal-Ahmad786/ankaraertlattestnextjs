/**
 * IndexNow submitter — notifies Bing/Yandex/Seznam that URLs changed.
 * Google does not support IndexNow, but Bing's index feeds ChatGPT search,
 * so fast Bing coverage matters for AI visibility.
 *
 * Usage:  node scripts/indexnow.mjs                 (every sitemap URL)
 *         node scripts/indexnow.mjs /sehirler/ankara (specific paths)
 */
const HOST = "ankarapert.com.tr";
const KEY = "ac948db823fe48ccad96f5fbb7e0cc5e";
const BASE = `https://${HOST}`;

async function sitemapUrls() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const urlList = args.length
  ? args.map((p) => (p.startsWith("http") ? p : `${BASE}${p}`))
  : await sitemapUrls();

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${BASE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status}`);
if (!res.ok) console.error(await res.text());
