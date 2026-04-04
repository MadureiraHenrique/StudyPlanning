import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Providers } from "@/providers/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Study Flow",
  description: "App de planejamento de estudos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full bg-[#f8fafc]">
        <Providers>
          <div className="flex h-full">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1 overflow-auto p-8">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
