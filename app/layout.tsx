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
        <Navbar />
        <main className="w-full h-full flex justify-center items-center p-4">
          <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
