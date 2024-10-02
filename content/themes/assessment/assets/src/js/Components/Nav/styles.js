import styled from 'styled-components';

export const NavigationList = styled.ul`
  width: 100%;
  max-width: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  li{
    a{
      color: #000;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      transition: all .2s;
      &:hover{
        color: #067042;
        text-decoration: underline;
      }
    }
  }
`;
