"use client";

import React from "react";
import "@/styles/globals.css";
import { ViewTransitions } from "next-view-transitions";
import useLenisScroll from "@/hooks/useLenisScroll";
import Preloader from "./preloader/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Smooth Scroll
  useLenisScroll();

  // SEO variables for easy change
  const seo = {
    title: "Evana Martinez — Freelance Photographer in Barcelona, Spain",
    description:
      "Evana Martinez is a professional freelance photographer based in Barcelona, Spain. Specializing in portrait, event, and lifestyle photography. Book your session today!",
    keywords:
      "Evana Martinez, freelance photographer, Barcelona, Spain, portrait photography, event photography, lifestyle photography, women photographers, creative photography",
    author: "Evana Martinez",
    url: "https://your-portfolio-domain.com", // Change this to your actual domain
    image: "/og-image.jpg", // Add your Open Graph image in the public folder
    locale: "en_ES",
    twitterHandle: "@evanaphoto", // Change as needed
  };

  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <meta name="author" content={seo.author} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={seo.url} />
          <meta property="og:image" content={seo.image} />
          <meta property="og:locale" content={seo.locale} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image} />
          <meta name="twitter:site" content={seo.twitterHandle} />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="canonical" href={seo.url} />
        </head>
        <body>
          <Preloader />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
