import React, { useState, useEffect } from 'react';
import styledComponents from 'styled-components';
import { styled } from '@mui/material';
import {  DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import RoutineStore from '../stores/Routine';
import { Routine } from '../interface/routine';

const StyledContents = styledComponents.section<{ background?: string }>`
  background: ${({ background }) => background};
  width: 100vw;
  border-top: 1px solid #e0e2e7;
`;

const StyledWrapper = styledComponents.div`
  width: 800px;
  min-width: 800px;
  height: 500px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    width: 400px;
    min-width: 400px;
  }
`;

const StyledDataGrid = styled(DataGrid)({
  '&.MuiDataGrid-root': { 
    margin: '48px 24px',

    '@media screen and (max-width: 600px)': {
      margin: '48px 0px'
    }
  }
})

const Contents = (): JSX.Element => {
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const matches = useMediaQuery('(max-width:600px)', { noSsr: true });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'type', headerName: 'type', type: 'string', headerAlign: 'center', align: 'center', width: Number(`${matches ? 70 : 100}`), disableColumnMenu: true, sortable: false, hideSortIcons: true },
    { field: 'todo', headerName: 'todo', type: 'string', headerAlign: 'center', align: 'center', width: Number(`${matches ? 255 : 550}`), disableColumnMenu: true, sortable: false, hideSortIcons: true },
    { field: 'isDone', headerName: 'isDone', type: 'boolean', headerAlign: 'center', align: 'center', width: Number(`${matches ? 70 : 100}`), editable: true, disableColumnMenu: true, sortable: false, hideSortIcons: true },
  ];

  useEffect(() => {
    getRoutines();
  }, []);

  const getRoutines = async (): Promise<void> => {
    try {
      setLoading(true);
      const result = (await RoutineStore.getList()) as Routine[];

      setRoutines(result);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledContents>
      <StyledWrapper>
        <StyledDataGrid
          getRowId={(row) => row._id}
          rows={routines as GridRowsProp}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          autoHeight
          loading={loading}
        />
      </StyledWrapper>
    </StyledContents>
  );
};

export default Contents;
