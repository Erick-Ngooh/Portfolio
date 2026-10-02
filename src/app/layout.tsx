import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "My AI and software engineering portfolio.",
};

const portfolioFont = localFont({
  src: [
    { path: "./font/light.otf", weight: "300" },
    { path: "./font/regular.otf", weight: "400" },
    { path: "./font/medium.otf", weight: "500" },
    { path: "./font/semibold.otf", weight: "600" },
    { path: "./font/bold.otf", weight: "700" },
    { path: "./font/heavy.otf", weight: "800" },
    { path: "./font/black.otf", weight: "900" }, 
  ],
  variable: "--font-portfolio",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={portfolioFont.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}