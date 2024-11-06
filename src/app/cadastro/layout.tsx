import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro | TechMec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  );
}
