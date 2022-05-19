import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const PageDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`

const Page:FC<Props> = ({ children }) => {
  return (
    <PageDiv>
      {children}
    </PageDiv>
  )

}

export default Page;
