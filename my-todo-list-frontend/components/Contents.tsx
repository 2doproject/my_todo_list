import React, { useState, useEffect } from 'react';
import styledComponents from 'styled-components';
import { styled } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from '@mui/x-data-grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import RoutineStore from '../stores/Routine';
import { Routine } from '../interface/routine';
import { Box, Link } from '@mui/material';
import Button from './Button';
import ViewDialog from './dialogs/ViewDialog';
import CustomPicker from './CustomPicker';

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
      margin: '48px 0px',
    },
  },
});

interface Props {
  dataLoading: boolean;
}

const Contents = ({ dataLoading }: Props): JSX.Element => {
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [date, setDate] = useState(new Date());
  const [routineId, setRoutineId] = useState<string>('');

  const [openViewDialog, setOpenViewDialog] = useState<boolean>(false);
  const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);

  const matches = useMediaQuery('(max-width:600px)', { noSsr: true });

  const renderDetailViewButton = (
    params: GridRenderCellParams,
  ): JSX.Element => {
    return (
      <Box>
        <Button
          size="small"
          onClick={(): void => {
            setOpenViewDialog(true);
            setRoutineId(String(params.id));
          }}
        >
          상세 보기
        </Button>
      </Box>
    );
  };

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      hide: true,
    },
    {
      field: 'type',
      headerName: '타입',
      type: 'string',
      headerAlign: 'center',
      align: 'center',
      width: Number(`${matches ? 70 : 100}`),
      disableColumnMenu: true,
      sortable: false,
      hideSortIcons: true,
    },
    {
      field: 'todo',
      headerName: '투두',
      type: 'string',
      headerAlign: 'center',
      align: 'center',
      width: Number(`${matches ? 255 : 550}`),
      disableColumnMenu: true,
      sortable: false,
      hideSortIcons: true,
    },
    {
      field: 'detailView',
      headerName: '상세 보기',
      renderCell: renderDetailViewButton,
      headerAlign: 'center',
      align: 'center',
      width: Number(`${matches ? 70 : 100}`),
      disableColumnMenu: true,
      sortable: false,
      hideSortIcons: true,
    },
  ];

  useEffect(() => {
    getRoutines();
  }, [dataLoading]);

  const getRoutines = async (): Promise<void> => {
    try {
      setLoading(true);
      // TODO : 캘린더에 설정한 날짜 기준으로 데이터 불러오기
      const result = (await RoutineStore.getList()) as Routine[];

      setRoutines(result);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <StyledContents>
        <CustomPicker
          handleChange={(value) => {
            setDate(value);
          }}
          value={date}
        />
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
      {openViewDialog && (
        <ViewDialog
          open={true}
          routineId={routineId}
          setCloseDialog={(value: boolean): void => {
            setOpenViewDialog(value);
          }}
          setDoneCallback={(): void => {
            getRoutines();
          }}
        />
      )}
    </>
  );
};

export default Contents;
