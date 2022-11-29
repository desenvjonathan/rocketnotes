import styled from "styled-components";

export const Container = styled.header`
  grid-area: header; //estratégia de grid para o header não se mexer ao rolar a tela

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

  background: red;
`