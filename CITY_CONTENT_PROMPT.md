# Şehir Sayfası İçerik Üretim Prompt'u — ankarapert.com.tr

Bu dosyayı bir LLM'e (ChatGPT / Claude) verip şehir içeriklerini ürettir.
Çıktıyı `city-content.json` olarak proje kök dizinine kaydet — ben okuyup
`/sehirler/[slug]` sayfalarına yerleştireceğim.

**Neden bu iş yapılıyor:** Şehir sayfaları sitenin gösterim (impression)
trafiğinin çoğunu getiriyor ve Search Console'da ortalama sıra ~8. Yani Google
sayfaları alakalı buluyor ama ilk 3'e koymuyor. Sayfa başına özgün metin şu an
sadece ~68 kelime; geri kalanı 30 şehirde birebir aynı. İlk 3'e çıkmanın yolu
gerçek, yerel, kopyalanamaz içerik.

---

## PROMPT (bu satırdan aşağısını kopyala)

Sen Türkiye'de hasarlı araç alım sektöründe 15 yıldır çalışan, aynı zamanda
Türkçe SEO içeriği yazan bir uzmansın. Ankara PERT (ankarapert.com.tr) için
şehir sayfası içerikleri yazacaksın.

### Firma hakkında (içerikte tutarlı kullan)
- Hasarlı, kazalı, pert, hurda ve motor arızalı araçları **satın alan** firma.
  Pazar yeri veya ilan sitesi DEĞİL — doğrudan alıcı.
- Hizmetler: ücretsiz ekspertiz, ücretsiz çekici, noterde devir, devirle eş
  zamanlı ödeme.
- Türkiye geneli alım yapılır; merkez Ankara'dadır.

### Kesin kurallar (ihlal etme)
1. **Uydurma rakam yasak.** "5000+ mutlu müşteri", "%100 memnuniyet", "500 araç
   aldık" gibi doğrulanamayan sayı YAZMA. Sadece firmanın kontrol ettiği
   taahhütleri yaz (ücretsiz ekspertiz, ücretsiz çekici, noterde ödeme).
2. **Sahte yorum/referans yasak.** Müşteri ismi, yorumu, puanı uydurma.
3. **Şablon yasak.** Cümleyi yazıp şehir adını değiştirme. Her şehrin metni
   kendi gerçekliğinden çıkmalı; iki şehrin paragrafı birbirine benzemeyecek.
4. **Süre taahhüdü verme.** "30 dakikada", "1 saatte", "aynı gün" gibi kesin
   süreler yazma — bunlar sitede zaten çelişkili. "Hızlı dönüş" gibi ifadeler
   kullan.
5. Doğal Türkçe yaz. Anahtar kelime doldurma yapma. Bir cümlede aynı kelimeyi
   tekrarlama.

### Her şehir için üretmen gerekenler

| Alan | Uzunluk | Ne olmalı |
|---|---|---|
| `metaTitle` | 55–60 karakter | Şehir adı + hizmet. Marka sonda. |
| `metaDescription` | 150–158 karakter | Şehre özgü bir detay içermeli. Şablon olmayacak. |
| `heroTitle` | 6–10 kelime | H1. Şehir adı geçmeli. |
| `heroSubtitle` | 15–25 kelime | Şehre özgü giriş cümlesi. |
| `intro` | 60–90 kelime | Bu şehirde hasarlı araç piyasasının nasıl işlediği. |
| `body` | 2 paragraf, her biri 90–130 kelime | Aşağıdaki "yerel gerçeklik" listesinden besle. |
| `localPoints` | 4 madde, her biri 5–9 kelime | Bu şehre özgü lojistik/pazar avantajı. |
| `districtNotes` | Her ilçe için 25–40 kelime | İlçenin kendi özelliği. Genel cümle olmayacak. |
| `faqs` | 3 soru-cevap. Soru 8–14 kelime, cevap 45–75 kelime | Cevap ilk cümlede net yanıt versin (AI Overviews için). |

### "Yerel gerçeklik" — içeriği bundan besle

Her şehir için şu açılardan **en az üçünü** kullan, ama hepsini her şehirde
kullanma (yoksa yine şablon olur):

- **Coğrafya ve lojistik:** İki yakalı mı? Dağ geçidi var mı? Adaya/uzak ilçeye
  çekici nasıl gider? Şehirler arası otoyol geçiyor mu?
- **İklim hasarı:** Sahilde tuz korozyonu, iç bölgede buzlanma kazası, güneyde
  aşırı sıcak motor arızası, Karadeniz'de yağış ve kayganlık, sel riski.
- **Ekonomi:** Sanayi kenti mi (ticari araç yoğun)? Tarım kenti mi (pikap)?
  Turizm kenti mi (sezonluk, kiralama filosu)? Liman var mı?
- **Trafik:** Hangi karayolu/otoyol geçiyor, transit kaza yoğunluğu var mı?
  Şehir dışından geçerken kaza yapanlar için uzaktan satış anlatılabilir.
- **Araç parkı:** Yaşlı/bakımlı araçlar mı, filo araçları mı, öğrenci şehri mi?
- **Parça piyasası:** Sanayi sitesi güçlü mü? (Parça değeri yüksek olur.)

### Örnek kalite seviyesi (Bursa)

> Bursa'da bir hasarlı aracın değeri çoğu şehirden yüksek çıkar, çünkü sökülen
> parçanın alıcısı aynı şehirdedir. Otomotiv yan sanayisinin merkezi olması,
> özellikle pert kayıtlı ve ağır hasarlı araçlarda kalan değeri yukarı çeker;
> aracın onarılamaz olması Bursa'da değersiz olduğu anlamına gelmez.

Dikkat: şehre özgü bir **neden** anlatıyor, genel pazarlama cümlesi değil.
Bu seviyeyi tuttur.

### Çıktı formatı

Tek bir JSON dosyası. Kök seviyede `"cities"` anahtarı, içinde slug'a göre
nesneler:

```json
{
  "cities": {
    "istanbul": {
      "metaTitle": "...",
      "metaDescription": "...",
      "heroTitle": "...",
      "heroSubtitle": "...",
      "intro": "...",
      "body": ["birinci paragraf", "ikinci paragraf"],
      "localPoints": ["...", "...", "...", "..."],
      "districtNotes": { "Kadıköy": "...", "Beşiktaş": "..." },
      "faqs": [
        { "question": "...", "answer": "..." },
        { "question": "...", "answer": "..." },
        { "question": "...", "answer": "..." }
      ]
    }
  }
}
```

Sadece JSON döndür, açıklama yazma. Türkçe karakterleri (ı ğ ş İ ç ö ü) doğru
kullan. Slug'ları birebir aşağıdaki listeden al.

### Üretilecek 30 şehir (slug | şehir | bölge | ilçe sayısı)

```
istanbul       | İstanbul      | Marmara            | 12
ankara         | Ankara        | İç Anadolu         | 9
izmir          | İzmir         | Ege                | 8
bursa          | Bursa         | Marmara            | 6
antalya        | Antalya       | Akdeniz            | 6
adana          | Adana         | Akdeniz            | 6
konya          | Konya         | İç Anadolu         | 5
gaziantep      | Gaziantep     | Güneydoğu Anadolu  | 4
sanliurfa      | Şanlıurfa     | Güneydoğu Anadolu  | 5
kocaeli        | Kocaeli       | Marmara            | 6
mersin         | Mersin        | Akdeniz            | 6
diyarbakir     | Diyarbakır    | Güneydoğu Anadolu  | 5
hatay          | Hatay         | Akdeniz            | 5
manisa         | Manisa        | Ege                | 5
kayseri        | Kayseri       | İç Anadolu         | 4
samsun         | Samsun        | Karadeniz          | 5
balikesir      | Balıkesir     | Marmara            | 5
kahramanmaras  | Kahramanmaraş | Akdeniz            | 4
van            | Van           | Doğu Anadolu       | 4
aydin          | Aydın         | Ege                | 5
tekirdag       | Tekirdağ      | Marmara            | 5
sakarya        | Sakarya       | Marmara            | 5
denizli        | Denizli       | Ege                | 4
mugla          | Muğla         | Ege                | 5
eskisehir      | Eskişehir     | İç Anadolu         | 4
mardin         | Mardin        | Güneydoğu Anadolu  | 4
trabzon        | Trabzon       | Karadeniz          | 5
malatya        | Malatya       | Doğu Anadolu       | 4
ordu           | Ordu          | Karadeniz          | 4
erzurum        | Erzurum       | Doğu Anadolu       | 4
```

**İlçe adlarını `districtNotes` için `src/data/cities.json` dosyasındaki
`districts` dizisinden al** — birebir aynı yazımı kullan, yoksa eşleşmez.

### Parça parça üretim (önerilir)

Hepsini tek seferde isteme; kalite düşer. 5–6 şehirlik gruplar hâlinde iste,
her grubu ayrı dosyaya kaydet (`city-content-1.json`, `-2.json` …). Ben
birleştiririm.

---

## Bittiğinde

JSON dosyalarını proje kök dizinine koy ve bana haber ver. Ben:
1. JSON'u doğrularım (eksik alan, bozuk Türkçe karakter, şablon tekrarı kontrolü)
2. `src/data/city-content.ts` dosyasına dönüştürürüm
3. `/sehirler/[slug]` sayfasına bağlarım (intro, body, localPoints, ilçe notları)
4. FAQ'ları hem görünür akordiyona hem FAQPage şemasına bağlarım (Google
   şemanın görünen içerikle eşleşmesini şart koşuyor)
5. Build alıp doğrularım
