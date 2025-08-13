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
  icons: {
    icon: 'https://placehold.co/32x32/6495ED/FFFFFF/png?text=B',
    shortcut: 'https://placehold.co/32x32/6495ED/FFFFFF/png?text=B',
    apple: 'https://placehold.co/180x180/6495ED/FFFFFF/png?text=B',
  },
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
