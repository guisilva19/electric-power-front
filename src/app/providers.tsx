"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhatsApp from "@/components/WhatsApp/WhatsApp";
import { ContextProvider } from "@/context/context";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextUIProvider>
        <ContextProvider>
        <Header />
        {children}
        <Toaster richColors />
        <WhatsApp />
        <Footer />
        </ContextProvider>
      </NextUIProvider>
    </>
  );
}
