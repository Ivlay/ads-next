import { StateCreator, create } from 'zustand';
import { type FieldValues } from 'react-hook-form';
import api from '@/api';

interface CreateAdsSlice {
  loading: boolean;
  error: string;
  create: (values: FieldValues) => void;
}

interface AdsStore {

}

const createAdsStore: StateCreator<CreateAdsSlice> = (set) => ({
  loading: false,
  error: '',
  create: async (values) => {
    try {
      set(() => ({
        loading: true,
      }));
      const { data } = await api.post('/ads', values);

      console.log('data :>> ', data);
      set(() => ({
        loading: false,
      }));
    } catch (error) {
      console.log('error :>> ', error);
    }
  },
})

const useAdsStore = create<CreateAdsSlice>()((...a) => ({
  ...createAdsStore(...a)
}));

export default useAdsStore;
