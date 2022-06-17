import React, { useState } from 'react';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';
import RoutineStore from '../../stores/Routine';
import Dialog from '../Dialog';
import Input from '../Input';
import CustomButton from '../Button';

interface Props {
  open: boolean;
  setCloseDialog: (value: boolean) => void;
  setDoneCallback: () => void
}

/** 루틴 생성 다이얼로그 */
const CreateDialog = ({ open, setCloseDialog, setDoneCallback }: Props): JSX.Element => {
  const [todo, setTodo] = useState<string>('');
  const [type, setType] = useState<string>('');

  const doSubmit = async (): Promise<void> => {
    try {
      if (!todo) {
        alert('루틴을 입력해 주세요.');
      } else {
        await RoutineStore.create({
          todo: todo,
          type: type,
          isDone: false,
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
      </DialogContent>
      <DialogActions
        sx={{ '&.MuiDialogActions-root': { padding: '0px 24px 16px' } }}
      >
        <CustomButton onClick={doSubmit}>추가</CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default CreateDialog;
