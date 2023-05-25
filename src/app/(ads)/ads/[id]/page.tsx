import { NextPage } from 'next';
import { notFound } from 'next/navigation';
import api from '@/api';

interface Params {
  params: {
    id: string;
  }
}

const getAds = async (id: string) => {
  try {
    const ads = await api.get(`/ads/${id}`);

    return ads.data;
  } catch (error) {
    notFound();
  }
}

const AdsPage = async ({ params }: Params) => {
  console.log('params :>> ', params.id);

  const ads = await getAds(params.id);

  console.log('ads :>> ', ads);

  return <div>Adss page {ads.title}</div>
}

export default AdsPage;
