"use client";

import React from "react";
import "@/styles/globals.css";
import { ViewTransitions } from "next-view-transitions";
import useLenisScroll from "@/hooks/useLenisScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Smooth Scroll
  useLenisScroll();

  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <title>Evana Portfolio</title>
          <link rel="icon" type="icon/icon" href="/favicon.ico" />
        </head>
        <body>{children}</body>
      </html>
    </ViewTransitions>
  );
}
