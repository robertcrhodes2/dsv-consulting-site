import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'DSV Consulting LLC | Merchant Banking',
  description: 'A Texas merchant banking organization structuring businesses for growth through management consulting, debt & equity funding, fractional CFO services, and taking companies to the public markets.',
  icons: {
    icon: 'https://dsvconsult.com/assets/favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
