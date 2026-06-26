import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Atmosphere from "@/components/layout/Atmosphere";

// Display: sturdy, characterful grotesque for headings.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

// Body: plainspoken, utilitarian humanist sans.
const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Brand: Space Grotesk, scoped to the Atlas Leads logo wordmark (not global).
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Atlas Leads — AI Growth Systems for Local Businesses",
    template: "%s · Atlas Leads",
  },
  description:
    "An AI automation agency for local businesses. We connect ads, forms, website inquiries, and missed calls to AI follow-up, booking, and owner notifications — so local service businesses respond faster and book more appointments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${publicSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        {/* Fail-visible: if JS is disabled, scroll-reveal never runs, so show
            all content immediately rather than leaving it at opacity:0. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">
        <Atmosphere />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
