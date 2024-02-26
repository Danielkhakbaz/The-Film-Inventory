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
  description:
    "Welcome to The Film Inventory website where You can categorized all the animes in the world.",
  icons: {
    icon: "/images/favicon.png",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "twitter:title": "The Film Inventory",
    "twitter:description":
      "Welcome to The Film Inventory website where You can categorized all the animes in the world.",
    "twitter:url": "https://the-film-inventory.vercel.app/",
    "twitter:domain": "the-film-inventory.vercel.app",
    "twitter:image":
      "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/the-film-inventory.vercel.app/The%20Film%20Inventory/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F8a07c3e8-b81a-427b-b122-56169464ccee.jpg%3Ftoken%3DyM3DzPs8JZsawgrBzvRQrp2td8GPWMsJrcJFG5v4uJk%26height%3D795%26width%3D1200%26expires%3D33244961842/og.png",
    "twitter:card": "summary_large_image",
    "og:title": "The Film Inventory",
    "og:description":
      "Welcome to The Film Inventory website where You can categorized all the animes in the world.",
    "og:url": "https://the-film-inventory.vercel.app/",
    "og:image":
      "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/the-film-inventory.vercel.app/The%20Film%20Inventory/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F8a07c3e8-b81a-427b-b122-56169464ccee.jpg%3Ftoken%3DyM3DzPs8JZsawgrBzvRQrp2td8GPWMsJrcJFG5v4uJk%26height%3D795%26width%3D1200%26expires%3D33244961842/og.png",
    "og:type": "website",
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
