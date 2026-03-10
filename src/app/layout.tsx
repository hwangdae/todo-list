import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/layout/Header";

const nanumSquare = localFont({
  src: [
    {
      path: "../../public/fonts/NanumSquareR.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareB.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Todo List",
  description: "할 일 목록을 관리하는 To Do 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${nanumSquare.className} min-h-screen`}>
        <Header />
        <main className="max-w-[1200px] mx-auto">{children}</main>
      </body>
    </html>
  );
}
