import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TodoEnBici",
  description: "development by TripCode",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          src="https://checkout.epayco.co/checkout.js"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
