import React from 'react';
import styled from 'styled-components';

interface Props {
  background?: string;
}

const Contents = styled.section<Props>`
  background: ${({ background }) => background};
`;

const ContentsWrapper = (): JSX.Element => {
  return (
    <Contents>
      <h1>메인 컨텐츠</h1>
    </Contents>
  )
}

export default ContentsWrapper;
