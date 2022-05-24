import type { NextPage } from 'next';
import Header from '../components/Header';
import Contents from '../components/Contents';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import UserStore from '../stores/User';

const Home: NextPage = () => {
  return (
    <div className="layout">
      <Header />
      <Contents />
      <Button
        onClick={(): void => {
          const result = UserStore.getList();
          console.log('result', result);
        }}
      >
        <FontAwesomeIcon icon={faPlus} size={'lg'} />
      </Button>
    </div>
  );
};

export default Home;
