import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "600"],
});

export const metadata = {
  title: "GrooveVault - Discover and Share Vinyl Collections",
  description: "A platform for sharing and discovering vinyl record collections with music enthusiasts worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} bg-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}