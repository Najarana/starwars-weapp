import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const PageDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: auto;
  width: 80%;
  @media (max-width: 1140px) {
    width: calc(100% - 32px);
    padding: 16px;
  }
`

const Page:FC<Props> = ({ children }) => {
  return (
    <PageDiv>
      {children}
    </PageDiv>
  )

}

export default Page;
