import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dharmendra-portfolio.vercel.app"),
  title: {
    default: "Dharmendra Yadav | Full Stack Developer",
    template: "%s | Dharmendra Yadav",
  },
  description:
    "Portfolio of Dharmendra Yadav, a full stack developer specializing in React.js, Vue.js, .NET Core, Node.js, SQL Server, and enterprise web applications.",
  openGraph: {
    title: "Dharmendra Yadav | Full Stack Developer",
    description:
      "Full stack developer building polished enterprise web applications with React.js, Vue.js, .NET Core, Node.js, and SQL Server.",
    url: "https://dharmendra-portfolio.vercel.app",
    siteName: "Dharmendra Yadav Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Dharmendra Yadav portfolio preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharmendra Yadav | Full Stack Developer",
    description:
      "Full stack developer building polished enterprise web applications.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
