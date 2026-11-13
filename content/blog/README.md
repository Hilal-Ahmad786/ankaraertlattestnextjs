# Günlük blog yazıları

1. Bu klasöre her yazı için bir `.md` dosyası ekleyin. Dosya adı = adres (ör. `hasarli-aracimi-nasil-satarim.md` → `/blog/hasarli-aracimi-nasil-satarim`).
2. Dosyanın başında `title`, `description` (150–160 karakter), `date` (YYYY-MM-DD) ve `category` olmalı. `_ORNEK.md` dosyasını kopyalayıp başlayın.
3. İleri tarihli yazılar o tarihe kadar yayınlanmaz (bir sonraki yayın/deploy o tarihten sonra yapıldığında görünür).
4. Gövdede `#` (H1) kullanmayın, `##` ve `###` ile başlayın. Desteklenen: paragraf, **kalın**, *italik*, [bağlantı](/adres), `-` ve `1.` listeler, tablolar, `>` alıntı ve görsel: `![açıklama](/images/blog/dosya.webp)`.
6. Görseller: dosyaları `public/images/blog/` klasörüne koyun (WebP, 1200 px genişlik). Kapak görseli için başlığa `image: /images/blog/kapak.webp` satırını ekleyin.
5. `git push` yapın; site otomatik derlenir, yazı sitemap'e ve blog listesine eklenir.

Altı çizgiyle başlayan dosyalar (`_ORNEK.md`) ve bu README yayınlanmaz.
