import type { Metadata } from "next";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { ClientOnly, Navbar } from "@/components";
import { RegisterModal, LoginModal, LanguageModal, RentModal, ExperienceModal } from "@/components/modal";
import { Provider } from "@/components/provider/Provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Clone de Airbnb",
  description: "Pagina dedicada al alojamiento alrededor del mundo a todas las personas a los mejores precios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider>
          <ClientOnly> {/*Evitar errores de hidratacion. */}
            <RentModal />
            <LanguageModal />
            <RegisterModal />
            <LoginModal />
            <ExperienceModal />
            <Navbar />
          </ClientOnly>
          <Provider>
            <div className="pb-20 pt-52">
              {children}
            </div>
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}