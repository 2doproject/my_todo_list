import React, { useState, useEffect } from 'react';
import { DialogTitle, DialogContent, DialogActions, Box } from '@mui/material';
import { format, formatISO } from 'date-fns';
import Dialog from '../Dialog';
import RoutineStore from '../../stores/Routine';
import Input from '../Input';
import CustomButton from '../Button';
import Checkbox from '../Checkbox';

interface Props {
  routineId: string;
  open: boolean;
  setCloseDialog: (value: boolean) => void;
  setDoneCallback: () => void;
}

/** 루틴 수정 다이얼로그 */
const UpdateDialog = ({
  routineId,
  open,
  setCloseDialog,
  setDoneCallback,
}: Props): JSX.Element => {
  const [todo, setTodo] = useState<string | undefined>('');
  const [type, setType] = useState<string | undefined>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [isDone, setIsDone] = useState<boolean | undefined>(false);

  useEffect(() => {
    getRoutineById();
  }, []);

  const getRoutineById = async (): Promise<void> => {
    try {
      const result = await RoutineStore.getId(routineId);

      setTodo(result.todo);
      setType(result.type);
      setIsDone(result.isDone);
      setStartDate(format(new Date(result.startDate), 'yyyy/MM/dd'));
      setEndDate(format(new Date(result.endDate), 'yyyy/MM/dd'));
    } catch (error) {
      console.error(error);
    }
  };

  const doSubmit = async (): Promise<void> => {
    try {
      if (!todo) {
        alert('루틴을 입력해 주세요.');
      } else {
        await RoutineStore.update(routineId, {
          ...(todo && { todo: todo }),
          ...(type && { type: type }),
          isDone: isDone,
          startDate: formatISO(new Date(startDate)),
          endDate: formatISO(new Date(endDate))
        });

        setCloseDialog(false);
        setDoneCallback();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} setCloseDialog={(): void => setCloseDialog(false)}>
      <DialogTitle>루틴 수정하기</DialogTitle>
      <DialogContent>
        <Input
          label="Todo"
          value={todo}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            setTodo(event.target.value);
          }}
        />
        <Input
          label="Type"
          value={type}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            setType(event.target.value);
          }}
        />
        <Box sx={{ display: 'flex' }}>
          <Input
            label='StartDate'
            placeholder='2022/06/22'
            value={startDate}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              setStartDate(event.target.value);
            }}
          />
          <Input
            label='EndDate'
            placeholder='2022/06/22'
            value={endDate}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              setEndDate(event.target.value);
            }}
          />
        </Box>
        <Checkbox
          checked={isDone}
          onChange={(): void => {
            setIsDone((prev) => !prev);
          }}
        />
      </DialogContent>
      <DialogActions
        sx={{ '&.MuiDialogActions-root': { padding: '0px 24px 16px' } }}
      >
        <CustomButton
          variant="text"
          onClick={(): void => setCloseDialog(false)}
        >
          취소
        </CustomButton>
        <CustomButton onClick={doSubmit}>저장</CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateDialog;
