import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./scss/main.scss";
import Script from "next/script";
import { FAQData } from "./data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flockdesk.com"),
  alternates: {
    canonical: "https://flockdesk.com",
  },
  title: {
    default: "FlockDesk - Help Desk, Ticketing & Customer Support Software",
    template: "%s | FlockDesk",
  },
  description:
    "Manage customer support from one workspace with FlockDesk. Automate workflows, track SLAs, and help your team resolve issues faster. Start free.",
  keywords: [
    "help desk",
    "ticketing software",
    "customer support",
    "helpdesk",
    "SLA management",
    "customer service",
    "support automation",
    "ticket management",
  ],
  openGraph: {
    title: "FlockDesk - Help Desk, Ticketing & Customer Support Software",
    description:
      "Manage customer support from one workspace with FlockDesk. Automate workflows, track SLAs, and help your team resolve issues faster. Start free.",
    url: "https://flockdesk.com",
    siteName: "FlockDesk",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FlockDesk - Help Desk, Ticketing & Customer Support Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlockDesk - Help Desk, Ticketing & Customer Support Software",
    description:
      "Manage customer support from one workspace with FlockDesk. Automate workflows, track SLAs, and help your team resolve issues faster. Start free.",
    images: ["/logo-2.svg"],
  },
  icons: {
    icon: "/favicon-1.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FlockDesk",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Help Desk & Customer Support Software",
    operatingSystem: "Web",
    url: "https://flockdesk.com",
    image: "https://flockdesk.com/logo-2.svg",

    description:
      "Manage customer support from one workspace with FlockDesk. Automate workflows, track SLAs, and help your team resolve issues faster.",
    publisher: {
      "@type": "Organization",
      name: "FlockDesk",
      url: "https://flockdesk.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://flockdesk.com",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "120",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQData.map((faq) => ({
      "@type": "Question",
      name: faq.qustion,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const GTM_ID = "GTM-T337963F";
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/font/icomoon/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Marcellus&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.variable}>
        {/* Google Tag Manager - Body */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {/* Software Application Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />

        {/* FAQ Schema */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

        {/* Google Tag Manager - Head */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./scss/main.scss";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="stylesheet" href="/font/icomoon/style.css" />
//         <title>Flockdesk</title>
//         <link rel="icon" href="/favicon-1.svg" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Marcellus&display=swap"
//           rel="stylesheet"
//         ></link>
//       </head>
//       <body className={inter.variable}>{children}</body>
//     </html>
//   );
// }
