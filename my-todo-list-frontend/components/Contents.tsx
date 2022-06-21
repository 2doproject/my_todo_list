import React, { useState, useEffect, useCallback } from 'react';
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
import { Box } from '@mui/material';
import Button from './Button';
import ViewDialog from './dialogs/ViewDialog';
import { format, startOfWeek } from 'date-fns';
import CustomDateRange from './CustomDateRange';

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
  const [ranges, setRanges] = useState([
    {
      key: 'selection',
      startDate: new Date(),
      endDate: startOfWeek(new Date()),
    },
  ]);

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

  useEffect(() => {
    console.log('ranges', ranges);
    getFilterData();
  }, [ranges]);

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
  // 캘린더에서 선택한 날짜만 보여주기
  const getFilterData = async (): Promise<void> => {
    try {
      setLoading(true);
      console.log('ranges[0].startDate', ranges[0].startDate);
      const result = (await RoutineStore.searchList({
        startDate: format(ranges[0].startDate, 'yyyy-MM-DD'),
        endDate: format(ranges[0].endDate, 'yyyy-MM-DD'),
        // isDone: false,
        // todo: '234',
        // type: '444',
      })) as Routine[];

      setRoutines(result);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeDate = (
    ranges: Array<{ key: string; startDate: Date; endDate: Date }>,
  ) => {
    console.log('ranges2', ranges);
    setRanges(ranges);
  };

  return (
    <>
      <StyledContents>
        <CustomDateRange handleChange={onChangeDate} ranges={ranges} />
        {/* <CustomPicker
          handleChange={(value) => {
            setDate(value);
          }}
          value={date}
        /> */}
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
