import React from 'react';
import styled from 'styled-components';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper
} from '@mui/material';

interface Props {
  background?: string;
}

const StyledContents = styled.section<Props>`
  background: ${({ background }) => background};
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  border-top: 1px solid #e0e2e7; ;
`;

const Contents = (): JSX.Element => {
  const createData = (id: number, todo: string, isDone: boolean) => {
    return { id, todo, isDone };
  };

  const rows = [
    createData(1, '침대 나가면 이불 정리', true),
    createData(2, '유산균 챙겨 먹기', true),
    createData(3, '자기개발', false),
    createData(4, '운동하기', false),
    createData(5, '스트레칭하기', false),
  ];

  return (
    <StyledContents>
      <TableContainer>
        <Table sx={{ width: '70vw', height: '100%', margin: '50px auto' }}>
          <TableHead>
            <TableRow>
              <TableCell align="left">TODO</TableCell>
              <TableCell align="left">isDone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell align="left">{row.todo}</TableCell>
                  <TableCell align="left">{row.isDone ? '✅' : ''}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledContents>
  );
};

export default Contents;
