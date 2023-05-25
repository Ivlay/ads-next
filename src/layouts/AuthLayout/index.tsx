'use client'
import type { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { SIGN_IN, SIGN_UP } from '@/constants/routes';

import ContentLayout from '../ContentLayout';

import styles from './layout.module.css';

interface Props {
  title: string;
  children: ReactNode;
}

const AuthLayout: FC<Props> = ({ title, children }) => {
  const pathname = usePathname();

  const isSignIn = pathname === SIGN_IN;

  return (
    <ContentLayout
      className={styles.authLayout}
      rootClassName={styles.authWrapper}
    >
      <h3 className={styles.title}>{title}</h3>

      {children}

      <Link
        className={styles.link}
        href={isSignIn ? SIGN_UP : SIGN_IN}
      >
        {isSignIn ? 'Sign-up' : 'Sign-in'}
      </Link>
    </ContentLayout>
  );
};

export default AuthLayout;
