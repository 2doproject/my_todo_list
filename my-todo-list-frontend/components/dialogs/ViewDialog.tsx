import React, { useState, useEffect } from 'react';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';
import RoutineStore from '../../stores/Routine';
import Dialog from '../Dialog';
import Input from '../Input';
import CustomButton from '../Button';
import Checkbox from '../Checkbox';
import UpdateDialog from './UpdateDialog';

interface Props {
  routineId: string;
  open: boolean;
  setCloseDialog: (value: boolean) => void;
  setDoneCallback: () => void;
}

/** 루틴 상세 다이얼로그 */
const ViewDialog = ({
  routineId,
  open,
  setCloseDialog,
  setDoneCallback,
}: Props): JSX.Element => {
  const [todo, setTodo] = useState<string | undefined>('');
  const [type, setType] = useState<string | undefined>('');
  const [isDone, setIsDone] = useState<boolean | undefined>(false);
  const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);

  useEffect(() => {
    getRoutineById();
  }, []);

  const getRoutineById = async (): Promise<void> => {
    try {
      const result = await RoutineStore.getId(routineId);

      setTodo(result.todo);
      setType(result.type);
      setIsDone(result.isDone);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        setCloseDialog={(): void => {
          setCloseDialog(false);
          setDoneCallback();
        }}
      >
        <DialogTitle>루틴 상세 보기</DialogTitle>
        <DialogContent>
          <Input label="Todo" value={todo} readonly={true} />
          <Input label="Type" value={type} readonly={true} />
          <Checkbox label="IsDone" checked={isDone} disabled />
        </DialogContent>
        <DialogActions
          sx={{ '&.MuiDialogActions-root': { padding: '0px 24px 16px' } }}
        >
          <CustomButton
            onClick={(): void => {
              setOpenUpdateDialog(true);
            }}
          >
            수정
          </CustomButton>
        </DialogActions>
      </Dialog>
      {openUpdateDialog && (
        <UpdateDialog
          open={true}
          routineId={routineId}
          setCloseDialog={(value: boolean): void => {
            setOpenUpdateDialog(value);
          }}
          setDoneCallback={(): void => {
            getRoutineById();
          }}
        />
      )}
    </>
  );
};

export default ViewDialog;
