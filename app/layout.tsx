import "./app.css";
import "@alchemiakr/web-components/core.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Components",
  description: "using 'alchemiakr/web-components'",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
