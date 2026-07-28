import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./scss/main.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/font/icomoon/style.css" />
        <title>Flockdesk</title>
        <link rel="icon" href="/favicon-1.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Marcellus&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// // import "./globals.css";
// import "./scss/main.scss";

// import Header from "./components/ui/header";
// import Footer from "./components/ui/Footer";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// export const metadata: Metadata = {
//   title: {
//     default: "FlockDesk - Customer Support Platform",
//     template: "%s | FlockDesk",
//   },
//   description:
//     "Deliver outstanding support and achieve new goals with FlockDesk. Streamline ticket management, automate workflows, and build lasting customer relationships.",
//   keywords: [
//     "helpdesk",
//     "customer support",
//     "ticket management",
//     "support automation",
//     "customer service",
//   ],
//   authors: [{ name: "FlockDesk Team" }],
//   openGraph: {
//     title: "FlockDesk - Customer Support Platform",
//     description:
//       "Deliver outstanding support and achieve new goals with FlockDesk.",
//     url: "https://flockdesk.com",
//     siteName: "FlockDesk",
//     images: [
//       {
//         url: "/images/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "FlockDesk - Customer Support Platform",
//       },
//     ],
//     type: "website",
//     locale: "en_US",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "FlockDesk - Customer Support Platform",
//     description:
//       "Deliver outstanding support and achieve new goals with FlockDesk.",
//     images: ["/images/og-image.png"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// };
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="stylesheet" href="/font/icomoon/style.css" />
//       </head>
//       <body className={`${inter.variable}`}>
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }
