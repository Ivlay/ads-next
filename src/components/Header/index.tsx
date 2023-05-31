import Link from 'next/link';

import { SIGN_IN } from '@/constants/routes';

import useUserStore from '@/store/user';

import ContentLayout from '@/layouts/ContentLayout';

import styles from './header.module.css';

const Header: React.FC = () => {
  const user = useUserStore((store) => store.user);

  return (
    <ContentLayout tag="header" className={styles.header}>
      <div>left part</div>
      <div>{user?.name || <Link href={SIGN_IN}>Login</Link>}</div>
    </ContentLayout>
  );
};

export default Header;
