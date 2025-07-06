import type { Metadata } from "next";
import { Mali, Athiti, Bai_Jamjuree } from "next/font/google";
import { ConfigProvider } from "antd";

import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio website showcasing my skills and projects. ",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${baiJamjuree.variable} font-bai-jamjuree antialiased`}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "var(--font-bai-jamjuree)",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}