import React, { useState, useEffect } from 'react';
import styledComponents from 'styled-components';
import { styled } from '@mui/material';
import {  DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import RoutineStore from '../stores/Routine';
import { Routine } from '../interface/routine';

interface Props {
  background?: string;
}

const StyledContents = styledComponents.section<Props>`
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
    width: 550px;
    min-width: 550px;
  }
`;

const StyledDataGrid = styled(DataGrid)({
  '&.MuiDataGrid-root': { margin: '48px 24px' },
})

const Contents = (): JSX.Element => {
  const [routines, setRoutines] = useState<Routine[]>([]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'type', headerName: 'type', type: 'string', headerAlign: 'center', align: 'center', width: 100, disableColumnMenu: true, sortable: false, hideSortIcons: true },
    { field: 'todo', headerName: 'todo', type: 'string', headerAlign: 'center', align: 'center', width: 400, disableColumnMenu: true, sortable: false, hideSortIcons: true },
    { field: 'isDone', headerName: 'isDone', type: 'boolean', headerAlign: 'center', align: 'center', width: 100, disableColumnMenu: true, sortable: false, hideSortIcons: true },
  ];

  useEffect(() => {
    getRoutinesData();
  }, []);

  const getRoutinesData = async (): Promise<void> => {
    try {
      const result = (await RoutineStore.getList()) as Routine[];

      setRoutines(result);
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
          hideFooter
        />
      </StyledWrapper>
    </StyledContents>
  );
};

export default Contents;
