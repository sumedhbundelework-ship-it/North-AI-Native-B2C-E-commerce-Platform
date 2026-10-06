import './globals.css';
import type { Metadata } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'North — The AI that understands your life before it shops.',
  description:
    'North is an Intent Engine. Describe a life event. North understands intent, predicts needs, and coordinates purchases over time. Shopping starts with intent, not search.',
  openGraph: {
    title: 'North — Shopping starts with intent. Not search.',
    description:
      'The AI that understands your life before it shops. An intent engine for the future of consumer commerce.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'North',
    description: 'Shopping starts with intent. Not search.',
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
        className={`${inter.variable} ${display.variable} ${mono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
