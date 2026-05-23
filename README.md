# Ankara PERT - Next.js Website

Professional Next.js website for Ankara PERT vehicle purchase services with comprehensive analytics integration.

## 🚀 Features

- ✅ **SEO Optimized** - Meta tags, structured data, sitemap
- ✅ **Analytics Ready** - GTM, GA4, Google Ads conversion tracking
- ✅ **Component-Based Architecture** - Modular, reusable components
- ✅ **TypeScript** - Full type safety
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Performance Optimized** - Next.js Image optimization, lazy loading
- ✅ **Conversion Focused** - Multiple CTAs with tracking
- ✅ **Easy Theme Customization** - Separate CSS files for design changes

## 📁 Project Structure

```
ankara-pert/
├── public/              # Static assets
│   ├── images/         # Image files
│   ├── banner.webp     # Hero images
│   ├── kazali.webp
│   ├── hasarli.webp
│   ├── pert.webp
│   ├── hurda.webp
│   └── sitemap.xml
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Homepage
│   │   └── [service]/  # Service pages
│   ├── components/     # React components
│   │   ├── layout/     # Header, Footer, etc.
│   │   ├── sections/   # Page sections
│   │   ├── ui/         # UI components
│   │   └── analytics/  # Analytics components
│   ├── lib/            # Utilities
│   ├── styles/         # CSS files (easy customization)
│   ├── types/          # TypeScript types
│   ├── data/           # Content data
│   └── config/         # Configuration
└── package.json
```

## 🛠️ Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Step 1: Create Next.js Project

```bash
npx create-next-app@latest ankara-pert --typescript --tailwind --app --src-dir
cd ankara-pert
```

### Step 2: Install Dependencies

```bash
npm install react-gtm-module next-seo
npm install -D @types/react-gtm-module
```

### Step 3: Copy Project Files

Copy all files from the artifacts into your project directory:

- Copy all files from `src/` directory
- Copy all files from `public/` directory
- Replace `package.json`, `next.config.js`, etc.

### Step 4: Environment Variables

Create `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://ankarapert.com.tr
NEXT_PUBLIC_SITE_NAME=Ankara PERT

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Ads Conversion
NEXT_PUBLIC_ADS_CONVERSION_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_ADS_PHONE_CONVERSION_LABEL=XXXXX
NEXT_PUBLIC_ADS_WHATSAPP_CONVERSION_LABEL=XXXXX
NEXT_PUBLIC_ADS_FORM_CONVERSION_LABEL=XXXXX

# Facebook Pixel (Optional)
NEXT_PUBLIC_FB_PIXEL_ID=

# Contact Information
NEXT_PUBLIC_PHONE=+905392260180
NEXT_PUBLIC_WHATSAPP=905392260180
NEXT_PUBLIC_EMAIL=info@ankarapert.com.tr

# Social Media
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/doruk.hasarli.araclar/
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/dorukhasarliaraclar/
```

### Step 5: Add Images

Place your images in the `public/` directory:
- Banner images (banner.webp, kazali.webp, hasarli.webp, pert.webp, hurda.webp)
- Gallery images in `public/images/`

### Step 6: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website.

## 📊 Analytics Setup

### Google Tag Manager (GTM)

1. Create a GTM account at [tagmanager.google.com](https://tagmanager.google.com)
2. Create a new container
3. Copy your GTM ID (GTM-XXXXXXX)
4. Add it to `.env.local` as `NEXT_PUBLIC_GTM_ID`

The GTM component is already integrated and will automatically load on all pages.

### Google Analytics 4 (GA4)

1. Create a GA4 property in Google Analytics
2. Copy your Measurement ID (G-XXXXXXXXXX)
3. Add it to `.env.local` as `NEXT_PUBLIC_GA_ID`

### Google Ads Conversion Tracking

1. In Google Ads, go to Tools → Conversions
2. Create conversion actions for:
   - Phone calls
   - WhatsApp clicks
   - Form submissions
3. Copy the Conversion ID and Labels
4. Add them to `.env.local`

### Tracking Events

The following events are automatically tracked:

- **Phone Clicks**: `trackPhoneClick()` / `trackPhoneConversion()`
- **WhatsApp Clicks**: `trackWhatsAppClick()` / `trackWhatsAppConversion()`
- **CTA Clicks**: `trackCTAClick(name, location)`
- **Page Views**: Automatic with GA4
- **Service Views**: `trackServiceView(serviceName)`

## 🎨 Customizing Design

All styles are organized in separate files for easy customization:

### 1. Change Colors

Edit `src/styles/variables.css`:

```css
:root {
  --main-blue: #002B5B;      /* Primary brand color */
  --main-orange: #F9A826;    /* Accent color */
  --main-red: #d73362;       /* Secondary accent */
}
```

### 2. Modify Component Styles

Edit `src/styles/components.css`:
- Button styles
- Card styles
- Hero banner styles
- All component-specific styles

### 3. Adjust Layout

Edit `src/styles/layout.css`:
- Section spacing
- Grid layouts
- Responsive breakpoints

### 4. Update Typography

Edit `src/styles/variables.css`:

```css
:root {
  --font-base: 1rem;
  --font-scale-ratio: 1.2;
}
```

## 📝 Content Management

### Update Services

Edit `src/data/services.ts` to modify service information:

```typescript
export const services: Service[] = [
  {
    id: 'kazali',
    title: 'Kazalı Araç Alımı',
    slug: 'kazali-arac-alim-satim',
    description: 'Your description...',
    // ... more fields
  },
];
```

### Update Testimonials

Edit `src/data/testimonials.ts`:

```typescript
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Customer Name',
    location: 'City',
    rating: 5,
    comment: 'Testimonial text...',
    service: 'kazali',
  },
];
```

### Update FAQ

Edit `src/data/faq.ts`:

```typescript
export const faqData: Record<string, FAQItem[]> = {
  kazali: [
    {
      question: 'Your question?',
      answer: 'Your answer...',
      category: 'genel',
    },
  ],
};
```

### Update Contact Info

Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: 'Ankara PERT',
  phone: '+905392260180',
  whatsapp: '905392260180',
  email: 'info@ankarapert.com.tr',
  // ... more config
};
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables from `.env.local`
6. Click "Deploy"

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

### Deploy to Other Platforms

```bash
# Build the project
npm run build

# Start production server
npm start
```

The build output will be in `.next` folder.

## 📱 Adding New Pages

### Create a Service Page

1. Create folder: `src/app/[service-slug]/`
2. Create file: `src/app/[service-slug]/page.tsx`
3. Use the template from `kazali-arac-alim-satim/page.tsx`

Example:

```typescript
// src/app/new-service/page.tsx
import { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';

export const metadata: Metadata = {
  title: 'New Service | Ankara PERT',
  description: 'Service description...',
};

export default function NewServicePage() {
  return (
    <div>
      <HeroBanner
        variant="default"
        tagline="Your tagline"
        title="Your title"
        subtitle="Your subtitle"
      />
      {/* Add more sections */}
    </div>
  );
}
```

## 🔧 Troubleshooting

### Images Not Loading

1. Make sure images are in `public/` directory
2. Check file names match exactly (case-sensitive)
3. Verify image formats are supported (.webp, .jpg, .png)

### Analytics Not Working

1. Check environment variables are set correctly
2. Verify GTM/GA IDs are correct
3. Open browser console for errors
4. Check Network tab for GTM/GA requests

### Build Errors

1. Clear `.next` folder: `rm -rf .next`
2. Clear node_modules: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npm run build`

## 📞 Support & Contact

For questions about this project:
- Email: info@ankarapert.com.tr
- Phone: 0 (539) 226 01 80

## 📄 License

This project is proprietary software for Ankara PERT.

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format and proper sizing
2. **Lazy Loading**: Images automatically lazy load with Next.js
3. **Code Splitting**: Automatic with Next.js App Router
4. **Caching**: Configure in `next.config.js`
5. **CDN**: Use Vercel or Cloudflare for global distribution

## 🔒 Security

- Environment variables are never exposed to client
- XSS protection enabled
- HTTPS enforced in production
- Security headers configured in `next.config.js`

## 📈 SEO Checklist

- [x] Meta tags on all pages
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Canonical URLs
- [x] Alt tags on images
- [x] Semantic HTML
- [x] Mobile responsive

## 🎨 Design System

Colors:
- Primary: #002B5B (Blue)
- Accent: #F9A826 (Orange)
- Success: #25D366 (WhatsApp Green)
- Danger: #d73362 (Red)

Typography:
- Base: 1rem (16px)
- Scale: 1.2 ratio
- Font: System fonts

Spacing:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 32px
- xl: 64px

## 🔄 Version History

- v1.0.0 - Initial release with full analytics integration# ankaraertlattestnextjs
