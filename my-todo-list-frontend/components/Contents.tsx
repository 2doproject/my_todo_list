import React from 'react';
import styled from 'styled-components';

interface Props {
  background?: string;
}

const StyledContents = styled.section<Props>`
  background: ${({ background }) => background};
  height: 100vh;
  border-top: 1px solid #E0E2E7;;
`;

const Contents = (props: Props): JSX.Element => {
  return (
    <StyledContents>
      <h1>메인 컨텐츠</h1>
    </StyledContents>
  )
}

export default Contents;
