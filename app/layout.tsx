import type { Metadata } from "next";
import "./globals.css";
import StateProvider from "./StateProvider";

export const metadata: Metadata = {
  title: "Gospelkick Web Developer App",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StateProvider>
      <html lang="en" className="font-trebuchetMs text-[14px]">
        <body className="w-full min-h-screen flex flex-col justify-center items-center">
          {children}
        </body>
      </html>
    </StateProvider>
  );
}
