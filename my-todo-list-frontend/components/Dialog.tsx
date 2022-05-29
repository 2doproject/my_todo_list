import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import RoutineStore from '../stores/Routine';
import Input from './Input';
import CustomButton from './Button';

interface Props {
  open: boolean;
  setCloseDialog: (value: boolean) => void;
}

const Dialogs = ({ open, setCloseDialog }: Props): JSX.Element => {
  const [todo, setTodo] = useState<string>('');
  const [type, setType] = useState<string>('');

  const handleClick = async (): Promise<any> => {
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
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={(): void => setCloseDialog(false)}
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
    >
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
        <CustomButton onClick={handleClick}>추가</CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default Dialogs;
