import { siteConfig } from '@/config/site';

const BASE_URL = siteConfig.url;
const ORG_ID = `${BASE_URL}/#organization`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Ankara PERT',
    alternateName: ['Ankara Pert', 'AnkaraPert'],
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/logo-trimmed.png`,
      width: 400,
      height: 100,
    },
    description: siteConfig.description,
    telephone: '+905369298606',
    email: siteConfig.email,
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    areaServed: {
      '@type': 'Country',
      name: 'Türkiye',
    },
    knowsAbout: [
      'Kazalı araç alımı',
      'Hasarlı araç alımı',
      'Pert araç alımı',
      'Hurda araç alımı',
      'Araç ekspertizi',
    ],
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: siteConfig.name,
    url: BASE_URL,
    publisher: { '@id': ORG_ID },
    inLanguage: 'tr-TR',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function localBusinessSchema(cityName?: string, citySlug?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['AutoDealer', 'LocalBusiness'],
    '@id': citySlug
      ? `${BASE_URL}/sehirler/${citySlug}/#localbusiness`
      : `${BASE_URL}/#localbusiness`,
    name: cityName ? `Ankara PERT - ${cityName}` : 'Ankara PERT',
    url: citySlug ? `${BASE_URL}/sehirler/${citySlug}` : BASE_URL,
    telephone: '+905369298606',
    email: siteConfig.email,
    image: `${BASE_URL}/images/logo-trimmed.png`,
    logo: `${BASE_URL}/images/logo-trimmed.png`,
    priceRange: '₺₺',
    currenciesAccepted: 'TRY',
    paymentAccepted: 'Nakit, Havale, EFT',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: cityName
      ? { '@type': 'City', name: cityName }
      : { '@type': 'Country', name: 'Türkiye' },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TR',
      ...(cityName ? { addressLocality: cityName } : {}),
    },
    hasMap: `https://www.google.com/maps/search/Ankara+Pert`,
    knowsAbout: [
      'Kazalı araç alımı',
      'Hasarlı araç alımı',
      'Pert araç alımı',
      'Hurda araç alımı',
    ],
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  imageUrl?: string;
}) {
  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    author: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Ankara PERT',
    },
    publisher: { '@id': ORG_ID },
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    inLanguage: 'tr-TR',
    ...(post.imageUrl ? { image: `${BASE_URL}${post.imageUrl}` } : {}),
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}${service.url}#service`,
    name: service.name,
    description: service.description,
    url: `${BASE_URL}${service.url}`,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    serviceType: 'Araç Alım Satım',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: { '@type': 'Country', name: 'Türkiye' },
    },
  };
}

export function howToSchema(
  title: string,
  steps: { name: string; text: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description:
      'Ankara PERT ile kazalı, hasarlı, pert veya hurda aracınızı satmak için adım adım süreç.',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
