#!/usr/bin/env node
// Markdown blog → generated TS data (no dependencies).
//
// Daily publishing: add content/blog/<slug>.md with a front-matter header:
//   ---
//   title: Hasarlı Aracımı Nasıl Satarım?
//   description: 150–160 karakterlik özet (meta description + liste özeti)
//   date: 2026-11-14            # yayın tarihi; ileri tarihli yazılar o güne kadar gizli kalır
//   category: Hasarlı Araç
//   image: /images/blog/ornek.jpg   # isteğe bağlı
//   ---
//   ## Başlık
//   Paragraf, **kalın**, *italik*, [bağlantı](/hasarli-arac-alim), listeler (- / 1.), tablolar, > alıntı,
//   görsel: ![açıklama](/images/blog/dosya.webp) — dosyayı public/images/blog/ içine koyun.
//
// Runs automatically before `dev` and `build` (package.json predev/prebuild).
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'content', 'blog');
const OUT = path.join(ROOT, 'src', 'data', 'blog-md.generated.ts');
const today = new Date().toISOString().slice(0, 10);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const img = (alt, src) => `<img src="${src}" alt="${alt}" loading="lazy" decoding="async" />`;
const inline = (s) => esc(s)
  .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_, alt, src) => img(alt, src))
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, '$1<em>$2</em>')
  .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, href) => {
    const external = /^https?:\/\//.test(href);
    return `<a href="${href}"${external ? ' target="_blank" rel="noopener nofollow"' : ''}>${t}</a>`;
  });

function mdToHtml(md) {
  const lines = md.replace(/\r/g, '').split('\n');
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    let m;
    if ((m = line.match(/^!\[([^\]]*)\]\(([^)\s]+)\)\s*$/))) { out.push(`<figure>${img(esc(m[1]), m[2])}${m[1] ? `<figcaption>${esc(m[1])}</figcaption>` : ''}</figure>`); i++; continue; }
    if ((m = line.match(/^(#{2,4})\s+(.*)$/))) { const n = m[1].length; out.push(`<h${n}>${inline(m[2].trim())}</h${n}>`); i++; continue; }
    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) items.push(`<li>${inline(lines[i++].replace(/^\s*[-*]\s+/, ''))}</li>`);
      out.push(`<ul>${items.join('')}</ul>`); continue;
    }
    if (/^\s*\d+[.)]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) items.push(`<li>${inline(lines[i++].replace(/^\s*\d+[.)]\s+/, ''))}</li>`);
      out.push(`<ol>${items.join('')}</ol>`); continue;
    }
    if (/^\s*\|/.test(line) && i + 1 < lines.length && /^\s*\|?\s*:?-{3,}/.test(lines[i + 1])) {
      const cells = (l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => inline(c.trim()));
      const head = cells(line); i += 2;
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(cells(lines[i++]));
      out.push(`<div class="table-wrap"><table><thead><tr>${head.map((c) => `<th>${c}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if (/^>\s?/.test(line)) {
      const q = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) q.push(lines[i++].replace(/^>\s?/, ''));
      out.push(`<blockquote><p>${inline(q.join(' '))}</p></blockquote>`); continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,4}\s|\s*[-*]\s|\s*\d+[.)]\s|>|\s*\|)/.test(lines[i])) para.push(lines[i++].trim());
    out.push(`<p>${inline(para.join(' '))}</p>`);
  }
  return out.join('\n');
}

function parse(file) {
  const raw = fs.readFileSync(path.join(SRC, file), 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error(`${file}: front-matter (--- … ---) eksik`);
  const meta = {};
  for (const l of m[1].split('\n')) {
    const k = l.match(/^(\w+):\s*(.*)$/);
    if (k) meta[k[1]] = k[2].replace(/^["']|["']$/g, '').trim();
  }
  for (const req of ['title', 'description', 'date']) if (!meta[req]) throw new Error(`${file}: "${req}" alanı eksik`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) throw new Error(`${file}: date YYYY-MM-DD olmalı`);
  const body = m[2].replace(/^\s*#\s+.*\n/, ''); // the page renders the title as its single <h1>
  if (/^#\s/m.test(body)) throw new Error(`${file}: gövdede "# " (H1) kullanmayın; ## ile başlayın`);
  const words = body.split(/\s+/).filter(Boolean).length;
  return {
    slug: meta.slug || file.replace(/\.md$/, ''),
    title: meta.title,
    description: meta.description,
    date: meta.date,
    category: meta.category || 'Rehber',
    image: meta.image || '',
    html: mdToHtml(body),
    readTime: Math.max(1, Math.round(words / 200)),
  };
}

const files = fs.existsSync(SRC) ? fs.readdirSync(SRC).filter((f) => f.endsWith('.md') && !f.startsWith('_') && f !== 'README.md') : [];
const posts = files.map(parse).filter((p) => p.date <= today).sort((a, b) => b.date.localeCompare(a.date));
const slugs = new Set();
for (const p of posts) { if (slugs.has(p.slug)) throw new Error(`Aynı slug iki kez: ${p.slug}`); slugs.add(p.slug); }

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `// GENERATED by scripts/build-blog.mjs from content/blog/*.md — do not edit by hand.
export type MdPost = { slug: string; title: string; description: string; date: string; category: string; image: string; html: string; readTime: number };
export const mdPosts: MdPost[] = ${JSON.stringify(posts, null, 2)};
`);
console.log(`blog: ${posts.length} markdown post(s) published, ${files.length - posts.length} scheduled for later`);
