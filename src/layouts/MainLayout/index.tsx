'use client';
import { type FC, useEffect } from 'react';
import Cookies from 'js-cookie';

import useUserStore from '@/store/user';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './layout.module.css';

interface Props {
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  const isLoggedIn = useUserStore((store) => store.isLoggedIn);
  const checkWhoIAm = useUserStore((store) => store.checkWhoIAm);

  useEffect(
    () => {
      if (!isLoggedIn && Cookies.get('token')) {
        checkWhoIAm();
      }
    },
    [isLoggedIn],
  );

  return (
    <div className={styles.mainLayout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
