import ContentLayout from '@/layouts/ContentLayout';
import styles from './header.module.css';

const Header: React.FC = () => {
  return (
    <ContentLayout tag="header" className={styles.header}>
      <div>left part</div>
      <div>right part</div>
    </ContentLayout>
  );
};

export default Header;
