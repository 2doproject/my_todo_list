import React, { useState } from 'react';
import type { NextPage } from 'next';
import Header from '../components/Header';
import Contents from '../components/Contents';
import PlusButton from '../components/PlusButton';
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
        <PlusButton
          onClick={(): void => {
            setOpenDialog(true);
          }}
        />
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
