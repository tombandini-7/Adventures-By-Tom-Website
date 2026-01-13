# Google Analytics 4 Setup Guide

This guide walks you through setting up Google Analytics 4 (GA4) for the Adventures By Tom website.

## Table of Contents

1. [Creating a Google Analytics 4 Property](#1-creating-a-google-analytics-4-property)
2. [Getting Your Measurement ID](#2-getting-your-measurement-id)
3. [Local Development Setup](#3-local-development-setup)
4. [Vercel Production Setup](#4-vercel-production-setup)
5. [Testing Your Implementation](#5-testing-your-implementation)
6. [Setting Up Conversion Goals](#6-setting-up-conversion-goals)
7. [Creating Custom Reports](#7-creating-custom-reports)
8. [Google Search Console Integration](#8-google-search-console-integration)

---

## 1. Creating a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **Admin** (gear icon in bottom left)
4. In the Account column, click **Create Account** (or use an existing account)
5. Enter account name: `Adventures By Tom`
6. Click **Next**
7. Enter property name: `Adventures By Tom Website`
8. Select your timezone and currency
9. Click **Next**
10. Fill in business details and click **Create**
11. Accept the terms of service

---

## 2. Getting Your Measurement ID

1. In Google Analytics, go to **Admin** > **Data Streams**
2. Click **Add stream** > **Web**
3. Enter your website URL: `https://adventuresbytom.com`
4. Enter stream name: `Adventures By Tom Web`
5. Click **Create stream**
6. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

> **Important:** Keep this ID secure. You'll need it for the next steps.

---

## 3. Local Development Setup

Create a `.env` file in the project root (this file is gitignored):

```bash
# Copy from .env.example
cp .env.example .env
```

Edit `.env` and add your Measurement ID:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

**Note:** The site will work without this configured - analytics simply won't fire.

---

## 4. Vercel Production Setup

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select the **Adventures By Tom** project
3. Go to **Settings** > **Environment Variables**
4. Add a new variable:
   - **Name:** `VITE_GA_MEASUREMENT_ID`
   - **Value:** `G-XXXXXXXXXX` (your Measurement ID)
   - **Environment:** Select all (Production, Preview, Development)
5. Click **Save**
6. **Redeploy** your site for changes to take effect:
   - Go to **Deployments**
   - Click the three dots on the latest deployment
   - Select **Redeploy**

---

## 5. Testing Your Implementation

### Local Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open the site in your browser

3. Open **Developer Tools** (F12 or right-click > Inspect)

4. Go to the **Network** tab

5. Filter by `google` or `gtag`

6. You should see requests to `googletagmanager.com`

### GA4 Real-Time Testing

1. Open [Google Analytics](https://analytics.google.com/)
2. Go to **Reports** > **Realtime**
3. Navigate around your site
4. You should see:
   - **Users in last 30 minutes** incrementing
   - **Page views** appearing
   - **Events** when you click buttons

### Testing Events

Perform these actions and verify they appear in GA4 Realtime:

| Action | Expected Event |
|--------|---------------|
| Click "Get a Free Quote" button | `quote_click` |
| Click destination card | `destination_click` |
| Navigate using menu | `nav_click` |
| Scroll to 50% of page | `scroll_depth` |

---

## 6. Setting Up Conversion Goals

Mark `quote_click` as a conversion (your main business goal):

1. In GA4, go to **Admin** > **Events**
2. Find the `quote_click` event (after it's been triggered at least once)
3. Toggle **Mark as conversion** to ON

Or create the event manually:

1. Go to **Admin** > **Events** > **Create event**
2. Event name: `quote_click`
3. Click **Create**
4. Toggle **Mark as conversion**

---

## 7. Creating Custom Reports

### Quote Funnel Report

1. Go to **Explore** > **Create new exploration**
2. Select **Funnel exploration**
3. Add steps:
   - Step 1: `page_view` (any page)
   - Step 2: `scroll_depth` (25% or more)
   - Step 3: `quote_click`
4. Save the report

### Traffic Sources Report

1. Go to **Reports** > **Acquisition** > **Traffic acquisition**
2. View which sources drive the most quote clicks

### Page Performance Report

1. Go to **Reports** > **Engagement** > **Pages and screens**
2. See which pages have highest engagement

---

## 8. Google Search Console Integration

### Setting Up Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add property**
3. Choose **URL prefix**
4. Enter: `https://adventuresbytom.com`
5. Verify ownership (Vercel automatically handles this via DNS)

### Submitting Your Sitemap

1. In Search Console, go to **Sitemaps**
2. Enter: `sitemap.xml`
3. Click **Submit**

The sitemap is automatically generated at:
`https://adventuresbytom.com/sitemap.xml`

### Linking GA4 to Search Console

1. In GA4, go to **Admin** > **Product links** > **Search Console links**
2. Click **Link**
3. Select your Search Console property
4. Click **Next** > **Submit**

This enables:
- Search query data in GA4
- Landing page performance from organic search
- Click and impression data

---

## Event Reference

These events are automatically tracked:

| Event Name | Category | Trigger | Location |
|------------|----------|---------|----------|
| `page_view` | navigation | Route change | App.tsx |
| `quote_click` | conversion | Quote CTA clicked | Hero, Contact, Header |
| `destination_click` | engagement | Destination card clicked | Destinations.tsx |
| `nav_click` | navigation | Menu item clicked | Header.tsx |
| `scroll_depth` | engagement | 25%, 50%, 75%, 100% scroll | useAnalytics hook |
| `section_view` | engagement | Section enters viewport | Components with tracking |
| `promotion_view` | engagement | Promotion carousel viewed | Promotions.tsx |
| `promotion_click` | engagement | Promotion clicked | Promotions.tsx |

---

## Troubleshooting

### Analytics not loading

1. Check `.env` file exists with correct `VITE_GA_MEASUREMENT_ID`
2. Restart dev server after changing `.env`
3. Check browser console for errors
4. Verify ad blockers are disabled for testing

### Events not appearing in GA4

1. Events can take up to 24 hours to appear in standard reports
2. Use **Realtime** view for immediate feedback
3. Check **DebugView** in GA4 for detailed event debugging

### Vercel not using env variable

1. Ensure variable name is exactly `VITE_GA_MEASUREMENT_ID`
2. Redeploy after adding environment variables
3. Check **Functions** logs in Vercel for any errors

---

## Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [Search Console Help](https://support.google.com/webmasters)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
