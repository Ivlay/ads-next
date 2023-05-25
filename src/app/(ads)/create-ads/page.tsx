import { ContentLayout } from '@/layouts';
import { CreateAdsForm } from '@/components/pages/create-ads';

const CreateAdsPage = () => {
  return (
    <ContentLayout>
      <h3>Create advertisement</h3>
      <CreateAdsForm />
    </ContentLayout>
  );
};

export default CreateAdsPage;
