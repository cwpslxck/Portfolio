import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";

const font = Figtree({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "CWXکپسلاک",
  description: "official website of cwpslxck",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="eng" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
