import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flintdigitech.com'),
  title: 'FlintDigitech — Creative Designer, Web Developer & Tech Enthusiast',
  description:
    'FlintDigitech is the creative portfolio of Michael — a creative designer, web developer and technology enthusiast creating digital experiences, visual designs and technology content.',
  keywords: [
    'FlintDigitech',
    'creative designer',
    'web developer',
    'tech enthusiast',
    'portfolio',
    'UI/UX',
    'graphic design',
    'digital experiences',
  ],
  authors: [{ name: 'Michael — FlintDigitech' }],
  openGraph: {
    title: 'FlintDigitech — Creative Designer, Web Developer & Tech Enthusiast',
    description:
      'I design digital experiences, build modern websites, and explore the technology behind the things I create.',
    type: 'website',
    siteName: 'FlintDigitech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlintDigitech — Design × Code × Technology',
    description:
      'I design digital experiences, build modern websites, and explore the technology behind the things I create.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
