import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

export const metadata: Metadata = {
  title: 'BigBul Services - Technology, Training & Trading',
  description: 'BigBul Services offers cutting-edge technology solutions, expert-led training courses, and comprehensive trading support to help you succeed.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ptSans.variable} dark`}>
      <body className={`font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
