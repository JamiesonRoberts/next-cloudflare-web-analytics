# Next Cloudflare Web Analytics &middot; [![npm](https://img.shields.io/npm/v/next-cloudflare-web-analytics?style=flat)](https://www.npmjs.com/package/next-cloudflare-web-analytics)

Simple Integration for Next.js (https://nextjs.org) and Cloudflare Web
Analytics (https://www.cloudflare.com/web-analytics). Cloudflare Web Analytics is a simple and lightweight privacy-first
analytics and performance metrics service.

[Cloudflare Web Analytics Overview](https://developers.cloudflare.com/analytics/web-analytics/)

> Cloudflare Web Analytics provides free, privacy-first analytics for your website... All you need to enable
> Cloudflare Web Analytics is a Cloudflare account and a JavaScript snippet on your page to start getting information
> on page views and visitors.

## Usage

### `CloudflareWebAnalyticsProvider` Props

| Name          | Type    | Description                                                                                                                                                                                      |
|---------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| token         | string  | The token provided by Cloudflare Web Analytics of the site you want to monitor. **Required**                                                                                                     |
| spaIsDisabled | boolean | Set this to `true` to disable Cloudflare Web Analytics [Single Page Application measurements](https://developers.cloudflare.com/analytics/web-analytics/getting-started/web-analytics-spa/).     |
| enabled       | boolean | Use this to explicitly decide whether or not to render script. If not passed the script will be rendered in production environments only based on either `NODE_ENV` or `NEXT_PUBLIC_VERCEL_ENV`. |

### App Router Implementation

If you are using the Next.js [App Router](https://nextjs.org/docs/app), to enable Cloudflare Web Analytics you will
need to add the `<CloudflareWebAnalyticsProvider />` into the
root [`layout.js`](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required):

```jsx
// app/layout.js
import CloudflareWebAnalyticsProvider from 'next-cloudflare-web-analytics'

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <CloudflareWebAnalyticsProvider token={'XXXXXXXXX'}/>
      <body>{children}</body>
    </html>
  )
}
```

### Pages Router Implementation

If you are using the Next.js Next.js [Pages Router](https://nextjs.org/docs/pages), to enable Cloudflare Web Analytics
you'll need to add the `<CloudflareWebAnalyticsProvider />`at the top level of your application
inside a custom [`_app.js`](https://nextjs.org/docs/pages/building-your-application/routing/custom-app):

```jsx
// pages/_app.js
import CloudflareWebAnalyticsProvider from 'next-cloudflare-web-analytics'

export default function MyApp({Component, pageProps}) {
  return (
    <CloudflareWebAnalyticsProvider token={'XXXXXXXXX'}>
      <Component {...pageProps} />
    </CloudflareWebAnalyticsProvider>
  )
}
```

## Developing

- `npm run build` will build the project to the `dist` folder
- `npm run watch` will watch and build the project to the `dist` folder
