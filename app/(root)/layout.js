import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css"
import DefaultTopbar from "../../components/DefaultTopbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "a-commerce",
  description: "a e-commerce website for learning purposes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DefaultTopbar />
        {children}
      </body>
    </html>
  );
}
