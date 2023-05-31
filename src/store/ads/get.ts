import { devtools } from 'zustand/middleware';

import api from '@/api';

interface GetAdsSliceActions {
  getAds: () => Promise<void>;
  getMy: () => Promise<void>;
}

interface GetAdsSliceState {
  loading: boolean;
  error: string;
  ads: [];
  myAds: [],
}

export type GetAdsSlice = GetAdsSliceActions & GetAdsSliceState

const getAdsStore: StateCreatorWithDevtools<GetAdsSlice> = devtools(
  (set) => ({
    loading: false,
    ads: [],
    myAds: [],
    error: '',
    getAds: async () => {
      set(
        () => ({ loading: true }),
        false,
        { type: 'get-ads' }
      );
    },
    getMy: async () => {
      try {
        set(
          () => ({ loading: true }),
          false,
          { type: 'get-my/start' }
        );
  
        const { data } = await api.get('/ads/my');
  
        set(
          () => ({ loading: false, myAds: data }),
          false,
          { type: 'get-my/end' }
        );
      } catch (error) {
        set(
          () => ({ loading: false }),
          false,
          { type: 'get-my/error' }
        );
        console.log('error :>> ', error);
      }
    }
  }),
  { name: 'ads-storage', store: 'app/ads-get' }
);

export default getAdsStore;
