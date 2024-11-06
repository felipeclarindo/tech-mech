import "@/app/globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | TechMec",
  description: "Inovando o presente, dirigindo o futuro.",
};

export const viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
