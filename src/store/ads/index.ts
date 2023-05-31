import { create } from 'zustand';

import createAdsStore, { type CreateAdsSlice } from './create';
import getAdsStore, { type GetAdsSlice } from './get';

type AdsStore = CreateAdsSlice & GetAdsSlice;

const useAdsStore = create<AdsStore>()((...a) => ({
  ...createAdsStore(...a),
  ...getAdsStore(...a),
}));

export default useAdsStore;
