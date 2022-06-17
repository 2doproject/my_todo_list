import React, { useState } from 'react';
import type { NextPage } from 'next';
import Header from '../components/Header';
import Contents from '../components/Contents';
import PlusButton from '../components/PlusButton';
import styled from 'styled-components';
import CreateDialog from '../components/dialogs/CreateDialog';

const StyledLayout = styled.div`
  overflow-x: hidden;
`;

const Home: NextPage = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [dataLoading, setDataLoading] = useState<boolean>(false);

  return (
    <>
      <StyledLayout>
        <Header />
        <Contents dataLoading={dataLoading} />
        <PlusButton
          onClick={(): void => {
            setOpenDialog(true);
          }}
        />
      </StyledLayout>
      {openDialog && (
        <CreateDialog
          open={true}
          setCloseDialog={(value: boolean): void => {
            setOpenDialog(value);
          }}
          setDoneCallback={(): void => {
            setDataLoading(true)
          }}
        />
      )}
    </>
  );
};

export default Home;
