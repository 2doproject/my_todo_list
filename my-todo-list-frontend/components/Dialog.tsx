import React from 'react';
import { Dialog } from '@mui/material';

interface Props {
  open: boolean;
  setCloseDialog: (value: boolean) => void;
  children: React.ReactNode;
}

const Dialogs = ({ open, setCloseDialog, children }: Props): JSX.Element => {
  return (
    <Dialog
      open={open}
      onClose={setCloseDialog}
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
    >
      {children}
    </Dialog>
  );
};

export default Dialogs;
