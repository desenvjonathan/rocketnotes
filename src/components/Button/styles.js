import styled from 'styled-components'

export const Container = styled.button `
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled{
  /*& = para se referir ao botão, que nesse caso é quando o botão estiver desativado*/ 
    opacity: 0.5;
  }
`