import styled from 'styled-components';
import backgroundImage from '../../../../images/bg/bgFooter.svg';

export const FooterComponent = styled.div`
  padding-top: 100px;
`
export const FooterContainerCTA = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1400px) {
    padding: 0px 25px;
  }
  @media (max-width: 576px) {
    padding: 0px 15px;
  }
`;
export const FooterCTA = styled.div`
  background-color: #067042;
  background-image: url(${backgroundImage});
  background-size: cover;
  padding: 90px 0px;
`
export const FooterContentCTA = styled.div`
  width: 100%;
  max-width: 820px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 65px;
`;
export const FooterIcon = styled.div`
  width: 100%;
  height: 100%;
  max-width: 94px;
  max-height: 94px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  svg{
    color: #067042;
  }
`;
export const FooterTextCTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p, span{
    color: #FFF;
    font-family: "Roboto", sans-serif;
    line-height: 120%;
  }
  p{
    font-size: 28px;
    font-weight: 500;
  }
  span{
    font-size: 16px;
    font-weight: 400;
  }
`
export const FooterButtonCTA = styled.button`
  border-radius: 4px 10px;
  border: 1px solid #FFF;
  background: rgba(10, 180, 99, 0.70);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 64px;
  padding: 0px 55px 0px 54px;
  transition: all .3s;
  p{
    color: #FFF;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  &:hover{
    filter: brightness(0.9);
    border-color: rgba(10, 180, 99, 0.70);
  }
`
export const FooterBottom = styled.footer`
  background-color: #F3F3F5;
  padding-top: 65px;
  
`;
