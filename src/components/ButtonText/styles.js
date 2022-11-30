import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  /*essa linha de código acima é para criar uma condição 
  "se estiver ativado, cor laranja, senão cinza claro"*/

  border: none;
  font-size: 16px;
`