import React, { useState } from 'react';
import type { NextPage } from 'next';
import Header from '../components/Header';
import Contents from '../components/Contents';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Dialogs from '../components/Dialog';

const StyledLayout = styled.div`
  overflow-x: hidden;
`;

const Home: NextPage = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <>
      <StyledLayout>
        <Header />
        <Contents />
        <Button
          onClick={(): void => {
            setOpenDialog(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} size={'lg'} />
        </Button>
      </StyledLayout>
      {openDialog && (
        <Dialogs
          open={true}
          setClose={(value: boolean): void => {
            setOpenDialog(value);
          }}
        />
      )}
    </>
  );
};

export default Home;
