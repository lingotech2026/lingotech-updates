import type { Metadata, Viewport } from 'next';
import { Poppins, Pinyon_Script } from 'next/font/google';
import './globals.css';
import AppLoadingProvider from './components/AppLoadingProvider';
import { SITE_URL } from './constants/site';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const pinyonScript = Pinyon_Script({
  variable: '--font-pinyon-script',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: 'Lingotech Solutions - Turning Ideas Into Digital Reality',
  description: 'We build high-performance websites, web applications, and mobile apps that scale with your business.',
  icons: {
    icon: '/lingo-tech.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body 
        className={`${poppins.variable} ${pinyonScript.variable} antialiased bg-white text-slate-900`}
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
      >
        <AppLoadingProvider 
          minLoadingSeconds={1.2}
          showOnRefresh={true}
          showOnNavigation={true}
        >
          {children}
        </AppLoadingProvider>
      </body>
    </html>
  );
}
