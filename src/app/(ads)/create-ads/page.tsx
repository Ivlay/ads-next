import { type FC } from 'react';

import { ContentLayout } from '@/layouts';
import { CreateAdsForm } from '@/components/pages/create-ads';

import styles from './page.module.css';

const CreateAdsPage: FC = () => {
  return (
    <ContentLayout rootClassName={styles.createAdsSection}>
      <h3 className={styles.title}>Create advertisement</h3>
      <CreateAdsForm />
    </ContentLayout>
  );
};

export default CreateAdsPage;
