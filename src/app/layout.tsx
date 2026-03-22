import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'THEBULLGROOVE — Technology Services Agency',
  description:
    'Soluciones IT, Desarrollo Moderno y Automatización Inteligente para empresas en Latinoamérica y Europa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geist.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-black font-sans text-white">
        {children}
      </body>
    </html>
  );
}
