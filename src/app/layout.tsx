import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Inter } from 'next/font/google';

import styles from './layout.module.css';
import api from '@/api';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
});

export const metadata = {
  title: 'Ads application',
  description: 'ads application',
};

const getAds = async () => {
  try {
    const data = await api.get('/ads');

    console.log('data :>> ', data);
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await getAds();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.mainLayout}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
