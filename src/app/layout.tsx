import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { TransitionShell } from "@/components/motion/transition-shell";
import { SiteLoader } from "@/components/motion/site-loader";
import { CustomCursor } from "@/components/motion/custom-cursor";

export const metadata: Metadata = {
  title: "High End Visuals",
  description:
    "Luxury photography and film portfolio for fashion, promotional, and editorial work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className="bg-black text-white antialiased">
        <SiteLoader />
        <CustomCursor />
        <SmoothScroll>
          <Header />
          <TransitionShell>
            <main className="relative">{children}</main>
          </TransitionShell>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
