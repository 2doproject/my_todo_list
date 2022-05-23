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
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  border-top: 1px solid #e0e2e7; ;
`;

const Contents = (): JSX.Element => {
  const [routines, setRoutines] = useState<Routine[]>([]);

  useEffect(() => {
    getData();
  }, []);

  // @TODO:
  const getData = async (): Promise<void> => {
    try {
      const result = await RoutineStore.getList();

      console.log('result', result);

      setRoutines([result]);
    } catch (error) {
      console.error(error);
    }
  };

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', hide: true },
    { field: 'todo', headerName: 'todo', minWidth: 150 },
    { field: 'isDone', headerName: 'isDone', minWidth: 150 },
  ];

  return (
    <StyledContents>
      <div style={{ height: 400, width: 400 }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={routines}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          hideFooter
        />
      </div>
    </StyledContents>
  );
};

export default Contents;
