import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import WhatsApp from "@/components/WhatsApp/WhatsApp";
import Footer from "@/components/Footer/Footer";
import { NextUIProvider } from "@nextui-org/react";

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
        <NextUIProvider>
          <Header />
          {children}
          <WhatsApp />
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
