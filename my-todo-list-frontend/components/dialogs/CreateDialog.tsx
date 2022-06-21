import React, { useState } from 'react';
import { DialogTitle, DialogContent, DialogActions, Box } from '@mui/material';
import { formatISO } from 'date-fns';
import RoutineStore from '../../stores/Routine';
import Dialog from '../Dialog';
import Input from '../Input';
import CustomButton from '../Button';

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
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const doSubmit = async (): Promise<void> => {
    try {
      if (!todo) {
        alert('루틴을 입력해 주세요.');
      } else {
        await RoutineStore.create({
          todo: todo,
          type: type,
          isDone: false,
          startDate: formatISO(new Date(startDate)),
          endDate: formatISO(new Date(endDate)),
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
