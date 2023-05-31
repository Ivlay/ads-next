'use client'
import { useEffect } from 'react';

import useUserStore from '@/store/user';

import { ContentLayout } from '@/layouts';
import useAdsStore from '@/store/ads';

const MyAds = () => {
  const isLoggedIn = useUserStore((store) => store.isLoggedIn);

  const getMyAds = useAdsStore((store) => store.getMy);

  const myAds = useAdsStore((store) => store.myAds);

  console.log('myAds :>> ', myAds);

  useEffect(
    () => {
      if (isLoggedIn) {
        getMyAds();
      }
    },
    [isLoggedIn],
  );

  return <ContentLayout>my ads</ContentLayout>;
};

export default MyAds;
