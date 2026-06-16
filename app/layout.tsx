import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aquila Ananga Noah | Software Developer Portfolio',
  description: 'Portfolio of Aquila Ananga Noah, software developer and Computer Programming and Analysis student.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
