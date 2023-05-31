import { Inter } from 'next/font/google';

import { MainLayout } from '@/layouts';

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
    const { data } = await api.get('/ads');

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
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
