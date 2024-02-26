import type { Metadata } from "next";
import Layout from "layout/layout";
import { SessionProviderFromNextAuth } from "providers/session/session";
import { InterFont } from "theme/font";
import "styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
  session: never;
};

export const metadata: Metadata = {
  title: "The Film Inventory",
  description: "Developed by Next14 as the full-stack framework.",
  icons: {
    icon: ["/images/favicon.png"],
  },
};

const RootLayout = async ({ children, session }: RootLayoutProps) => {
  return (
    <html lang="en" data-theme="light">
      <SessionProviderFromNextAuth session={session}>
        <body className={InterFont.className}>
          <Layout>
            <main className="w-full min-h-[calc(100vh-100px)] flex justify-center p-4">
              <div className="w-full md:w-11/12 lg:w-10/12">{children}</div>
            </main>
          </Layout>
        </body>
      </SessionProviderFromNextAuth>
    </html>
  );
};

export default RootLayout;
