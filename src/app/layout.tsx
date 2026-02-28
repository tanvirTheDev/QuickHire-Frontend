import type { Metadata } from "next";
import { Epilogue, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/provider";
import ToastProvider from "@/components/ui/ToastProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickHire | Find Your Dream Job",
  description: "QuickHire frontend application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${epilogue.variable} ${redHatDisplay.variable}`}>
      <body className="min-h-screen antialiased">
        <ReduxProvider>
          <ToastProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ToastProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
