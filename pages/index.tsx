import type { NextPage } from 'next';
import Header from '../components/Header';
import dynamic from 'next/dynamic';
import {
  DetailsProvider,
  useDetailsContext,
} from '../components/DetailsProvider';

const NoSSRMap = dynamic(() => import('../components/Map'), { ssr: false });

const Home: NextPage = () => {
  const context = useDetailsContext();
  return (
    <DetailsProvider>
      <Header />
      <NoSSRMap />
    </DetailsProvider>
  );
};

export default Home;
