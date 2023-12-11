import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Film Inventory",
  description: "Developed by Next14 as the full-stack framework.",
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
