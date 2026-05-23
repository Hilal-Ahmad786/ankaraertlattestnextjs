# Tracking Setup Documentation

This document outlines the current tracking implementation for the Next.js application, including how Google Ads and GTM are configured, how clicks are tracked, and how to implement Enhanced Conversions in the future.

## 1. What was found in the existing setup
- The site relies entirely on phone clicks (`tel:`) and WhatsApp links for lead generation.
- **There are no lead/contact forms** (`<form>` or `<input>`) on the website.
- Tracking was sending a basic `dataLayer.push` for clicks but did not pass detailed metadata.
- Google Ads conversion tracking was returning a "Needs attention" warning for "Phone New For Ankarapert", suggesting the implementation of in-page code (Enhanced Conversions).
- Because pure link clicks do not collect customer first-party data (like name, phone, or email), **Enhanced Conversions cannot be used for these existing actions**.

## 2. What was changed
- Created a centralized, typed `/src/lib/tracking.ts` file to handle all tracking logic cleanly.
- Updated `/src/lib/gtm.ts` to delegate tracking to the new utility.
- Added strict `typeof window !== 'undefined'` checks to prevent Server-Side Rendering (SSR) errors.
- Separated tracking into three distinct categories: Clicks, Real Calls (Forwarding), and Lead Forms.
- Added support for Enhanced Conversions `user_data` in the codebase so it is ready whenever a lead form is added.
- Created `.env.example` with clear placeholders for all GTM and Google Ads tracking variables.

## 3. Which files were modified
- `src/lib/tracking.ts` (New file)
- `src/lib/gtm.ts` (Updated to use `tracking.ts`)
- `src/lib/analytics.ts` (Deprecated old methods, redirected to new ones)
- `src/config/analytics.ts` (Added Google Ads configurations)
- `.env.example` (New file with required variables)

## 4. Which environment variables are required
Please copy `.env.example` to `.env.local` or set these in your hosting environment (e.g., Vercel):
```env
NEXT_PUBLIC_GTM_ID=GTM-K7Z2X293
NEXT_PUBLIC_GA_ID=G-74E9FNT713
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL=YOUR_LABEL
NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL=YOUR_LABEL
NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL=YOUR_LABEL
```
*(Only use `NEXT_PUBLIC_` for IDs that are safe to expose to the client browser).*

---

## 5. Tracking Architecture & Separation

### A) Tracking Clicks (Current Setup)
We are currently pushing clean events to the GTM DataLayer when a user clicks a Phone or WhatsApp button.
- **Events**: `phone_click`, `whatsapp_click`
- **Metadata sent**: `location` (where the button is), `page_path` (current URL), `button_text`, `destination_type`.
- **Note on PII**: We **do not** include the business phone number as `user_data`, as it does not belong to the customer. No PII is sent for these events.

### B) Tracking Real Calls (Google Forwarding Number)
Currently, tracking is only measuring *clicks* on the phone number, not actual connected calls.
To track real calls, you need to configure **Google Website Call Conversions** using a Google forwarding number:
1. In Google Ads, create a new Conversion Action: **Phone calls > Calls to a phone number on your website**.
2. Google will provide a specific snippet (or GTM configuration).
3. If using GTM, use the **Google Ads Calls from Website Conversion** tag type. Provide the displayed phone number (`0532 506 31 12`) and it will automatically swap it with a forwarding number dynamically for users who arrived via Google Ads.
4. **No code changes** are required in Next.js if you implement this via Google Tag Manager.

### C) Tracking Lead Forms (Enhanced Conversions)
Enhanced Conversions require actual customer data (first-party data) to be submitted. **Because your site has no forms, you cannot solve the Google Ads warning for "Phone New For Ankarapert" with Enhanced Conversions.**

#### Recommendation for the Future
To fully leverage Enhanced Conversions and get better attribution, we recommend adding a Lead Form to your website with the following fields:
- Name
- Phone
- Email (optional)
- City
- Vehicle Condition/Message

When you add this form, you can simply call the pre-built function:
```typescript
import { trackLeadFormSubmit } from '@/lib/tracking';

// Call this ONLY on successful form submission
trackLeadFormSubmit('Hero Form', {
  first_name: 'John',
  last_name: 'Doe',
  phone_number: '05551234567',
  email: 'john@example.com',
  city: 'Ankara'
});
```
This function will automatically format the data, strip non-numeric characters from the phone number, lowercase the email, and send it as `user_data` to GTM (and fallback to direct `gtag`) for Enhanced Conversions.

---

## 6. How to test in GTM Preview / Tag Assistant
1. Open [Google Tag Assistant](https://tagassistant.google.com/).
2. Enter your website URL and connect.
3. Click on a "Hemen Teklif Al" (Phone) button or a WhatsApp button.
4. Look at the Tag Assistant timeline for the `phone_click` or `whatsapp_click` event.
5. Click on the event and look at the **DataLayer** tab. You should see the clean event data (e.g., `location`, `destination_type`) without any PII.
6. Verify that your Google Ads Conversion tags (set up inside GTM) fire on these triggers.

## 7. What you still need to configure inside Google Ads or GTM
1. **GTM Triggers**: Ensure you have triggers in GTM that listen for the custom events: `phone_click`, `whatsapp_click`, and `lead_form_submit`.
2. **GTM Tags**: Connect those triggers to your Google Ads Conversion Tracking tags.
3. **Google Ads Diagnostics**: You can safely ignore the Enhanced Conversions warning for "Phone New For Ankarapert", as it is a phone-click conversion and no first-party data exists to send.
