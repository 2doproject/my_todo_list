import React from 'react';
import Input from './Input';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

interface Props {
  open: boolean;
  setClose: (value: boolean) => void;
}

const Dialogs = (props: Props): JSX.Element => {
  const { open, setClose } = props;

  return (
    <Dialog
      open={open}
      onClose={(): void => setClose(false)}
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
    >
      <DialogTitle>루틴 추가하기</DialogTitle>
      <DialogContent>
        <Input />
      </DialogContent>
    </Dialog>
  );
};

export default Dialogs;
