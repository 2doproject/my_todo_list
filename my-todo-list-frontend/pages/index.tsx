import type { NextPage } from 'next';
import HeaderWrapper from '../components/Header';
import NavWrapper from '../components/Nav';
import ContentsWrapper from '../components/Contents';

const Home: NextPage = () => {
  return (
    <div className="layout">
      <HeaderWrapper />
      <NavWrapper />
      <ContentsWrapper />
    </div>
  );
};

export default Home;
