import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Gaia Homes",
  description: "A solution to all things Real Estate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}
