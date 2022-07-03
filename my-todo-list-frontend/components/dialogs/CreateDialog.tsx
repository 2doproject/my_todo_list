import React, { useState } from 'react';
import { DialogTitle, DialogContent, DialogActions, Box } from '@mui/material';
import { startOfDay, endOfDay, subDays, format } from 'date-fns';
import RoutineStore from '../../stores/Routine';
import Dialog from '../Dialog';
import Input from '../Input';
import CustomButton from '../Button';
import CustomDateRange from '../CustomDateRange';

interface Props {
  open: boolean;
  setCloseDialog: (value: boolean) => void;
  setDoneCallback: () => void;
}

/** 루틴 생성 다이얼로그 */
const CreateDialog = ({
  open,
  setCloseDialog,
  setDoneCallback,
}: Props): JSX.Element => {
  const [todo, setTodo] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [value, setValue] = useState<[Date, Date] | null>([
    startOfDay(subDays(new Date(), 6)),
    endOfDay(new Date()),
  ]);

  const doSubmit = async (): Promise<void> => {
    try {
      if (!todo) {
        alert('루틴을 입력해 주세요.');
      } else {
        const [startDate, endDate] = value || [];

        await RoutineStore.create({
          todo: todo,
          type: type,
          isDone: false,
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

  const onChangeDate = (value: [Date, Date] | null) => {
    setValue(value);
  };

  return (
    <Dialog open={open} setCloseDialog={(): void => setCloseDialog(false)}>
      <DialogTitle>루틴 추가하기</DialogTitle>
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
        {/* @TODO: 다이얼로그 내에 daterange-panel이 표시되도록 수정 필요! */}
        <Box sx={{ marginTop: '8px' }}>
          <CustomDateRange
            size="lg"
            width="100%"
            value={value}
            handleChange={onChangeDate}
          />
        </Box>
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
        <CustomButton onClick={doSubmit}>추가</CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default CreateDialog;
