import React, { ReactNode } from 'react';
import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AutoDocs AI",
  description: "Generated your code documentation with the power of AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ""}>
        <NextAuthProvider>

          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
