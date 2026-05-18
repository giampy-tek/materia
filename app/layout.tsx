import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MATERIA — Studio di Architettura",
  description: "Architettura che resiste al tempo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">{children}</body>
    </html>
  );
}
