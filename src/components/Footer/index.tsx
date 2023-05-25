import ContentLayout from '@/layouts/ContentLayout';

import styles from './footer.module.css';

const Footer: React.FC = () => {
  return <ContentLayout tag="footer" rootClassName={styles.footer}>
    {new Date().getFullYear()}&nbsp;&copy;&nbsp;All chetko
  </ContentLayout>;
};

export default Footer;
