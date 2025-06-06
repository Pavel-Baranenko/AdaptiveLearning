import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/global.scss";
import '@/styles/normalize.css'
import { AuthProvider } from "@/store/user/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adaptive learning system",
  description: "Generated by create next app",
  author: " Pavel Barko"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
