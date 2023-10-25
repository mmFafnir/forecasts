import "@/assets/scss/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/GlobalRedux/provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventModule from "@/modules/EventModule";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body className={inter.className}>
        <div className="wrapper-bg"></div>
        <div className="wrapper">
          <Providers>
            <Header />
            <main>
              <div className="main">{children}</div>
            </main>
            <Footer />
            <EventModule />
          </Providers>
        </div>
      </body>
    </html>
  );
}
