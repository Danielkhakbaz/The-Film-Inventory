import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "layout/navbar/navbar";
import "styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Film Inventory",
  description: "Developed by Next14 as the full-stack framework.",
  icons: {
    icon: ["/favicon.png"],
  },
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        {<Navbar />}
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
