import React from 'react';
import { Dialog } from '@mui/material';

interface Props {
  open: boolean;
  setCloseDialog: (value: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

const Dialogs = ({ open, setCloseDialog, children, className }: Props): JSX.Element => {
  return (
    <Dialog
      open={open}
      onClose={setCloseDialog}
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      className={className}
    >
      {children}
    </Dialog>
  );
};

export default Dialogs;
