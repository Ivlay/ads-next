import { devtools } from 'zustand/middleware';
import type { FieldValues } from 'react-hook-form';
import api from '@/api';

interface CreateAdsActions {
  create: (values: FieldValues) => Promise<void>;
}

interface CreateAdsState {
  loading: boolean;
  error: string;
}

export type CreateAdsSlice = CreateAdsActions & CreateAdsState;

const createAdsStore: StateCreatorWithDevtools<CreateAdsSlice> = devtools(
  (set) => ({
    loading: false,
    error: '',
    create: async (values) => {
      try {
        set(
          () => ({
            loading: true,
          }),
          false,
          { type: 'set-loading' }
        );
        const { data } = await api.post('/ads', values);

        console.log('data :>> ', data);
        set(
          () => ({
            loading: false,
          }),
          false,
          { type: 'set-loading' }
        );
      } catch (error) {
        console.log('error :>> ', error);
      }
    },
  }),
  { name: 'ads-create', store: 'app/ads-create' }
);

export default createAdsStore;
