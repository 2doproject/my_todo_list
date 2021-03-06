import React, { useState, useEffect } from 'react';
import { DialogTitle, DialogContent, DialogActions, Box } from '@mui/material';
import {
  startOfDay,
  endOfDay,
  subDays,
  format
} from 'date-fns';
import Dialog from '../Dialog';
import RoutineStore from '../../stores/Routine';
import Input from '../Input';
import CustomButton from '../Button';
import Checkbox from '../Checkbox';
import CustomDateRange from '../CustomDateRange';

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
  const [isDone, setIsDone] = useState<boolean | undefined>(false);
  const [value, setValue] = useState<[Date, Date] | null>([
    startOfDay(subDays(new Date(), 6)),
    endOfDay(new Date()),
  ]);

  useEffect(() => {
    getRoutineById();
  }, []);

  const getRoutineById = async (): Promise<void> => {
    try {
      const result = await RoutineStore.getId(routineId);

      const { todo, type, isDone, startDate, endDate } = result || {};

      setTodo(todo);
      setType(type);
      setIsDone(isDone);

      if (startDate && endDate) {
        setValue([new Date(startDate), new Date(endDate)]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const doSubmit = async (): Promise<void> => {
    try {
      if (!todo) {
        alert('루틴을 입력해 주세요.');
      } else {
        const [startDate, endDate] = value || [];

        await RoutineStore.update(routineId, {
          ...(todo && { todo: todo }),
          ...(type && { type: type }),
          isDone: isDone,
          ...(startDate && { startDate: format(startDate, 'yyyy-MM-dd') }),
          ...(endDate && { endDate: format(endDate, 'yyyy-MM-dd') }),
        });

        setCloseDialog(false);
        setDoneCallback();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeDate = (value: [Date, Date] | null): void => {
    setValue(value);
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
        <Box sx={{ marginTop: '8px' }}>
          <CustomDateRange
            size="lg"
            width="100%"
            value={value}
            handleChange={onChangeDate}
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
