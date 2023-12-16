import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "layout/layout";
import "styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Film Inventory",
  description: "Developed by Next14 as the full-stack framework.",
  icons: {
    icon: ["/images/favicon.png"],
  },
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Layout>
          <main className="w-full min-h-[calc(100vh-100px)] flex justify-center p-4">
            <div className="w-full md:w-11/12 lg:w-10/12">{children}</div>
          </main>
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
