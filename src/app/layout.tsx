import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Electric Power",
  description: "Deixe que o sol pague a sua conta de energia!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={sora.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
