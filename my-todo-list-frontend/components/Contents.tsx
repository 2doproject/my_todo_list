import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import RoutineStore from '../stores/Routine';
import { Routine } from '../interface/routine';

interface Props {
  background?: string;
}

const StyledContents = styled.section<Props>`
  background: ${({ background }) => background};
  width: 100vw;
  border-top: 1px solid #e0e2e7;
`;

const StyledWrapper = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
`;

const Contents = (): JSX.Element => {
  const [routines, setRoutines] = useState<Routine[]>([]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'todo', headerName: 'todo', type: 'string', width: 400 },
    { field: 'isDone', headerName: 'isDone', type: 'boolean', width: 90 },
  ];

  useEffect(() => {
    getRoutinesData();
  }, []);

  const getRoutinesData = async (): Promise<void> => {
    try {
      const result = (await RoutineStore.getList()) as Routine[];

      console.log(result);

      setRoutines(result);
      console.log(routines);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledContents>
      <StyledWrapper>
        <DataGrid
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
