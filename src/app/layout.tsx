import type { Metadata } from "next";
import { Sora } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Electric Power",
  description: "Deixe que o sol pague a sua conta de energia!",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={sora.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
