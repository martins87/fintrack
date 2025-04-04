"use client";

// import type { Metadata } from "next";
import localFont from "next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SessionProvider from "@/app/components/SessionProvider";
import "./globals.css";

const sora = localFont({
  src: "./assets/fonts/Sora-SemiBold.ttf",
  variable: "--font-sora",
  weight: "600",
});

const neueMontreal = localFont({
  src: [
    {
      path: "./assets/fonts/NeueMontreal-Regular.otf",
      weight: "400",
    },
    {
      path: "./assets/fonts/NeueMontreal-Medium.otf",
      weight: "500",
    },
    {
      path: "./assets/fonts/NeueMontreal-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-neue-montreal",
});

// export const metadata: Metadata = {
//   title: "FinTrack",
//   description:
//     "Seu rastreador inteligente de mercado financeiro, sempre atualizado.",
// };

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${neueMontreal.variable} w-full min-h-screen antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <SessionProvider>{children}</SessionProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
