import type { NextPage } from 'next';
import Header from '../components/Header';
import dynamic from 'next/dynamic';

const NoSSRMap = dynamic(() => import('../components/Map'), { ssr: false });

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <NoSSRMap />
    </>
  );
};

export default Home;
