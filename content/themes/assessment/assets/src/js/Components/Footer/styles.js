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
  gap: 20px;
  @media (max-width: 1400px) {
    padding: 0px 25px;
  }
  @media (max-width: 991px){
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
  }
  @media (max-width: 576px) {
    padding: 0px 15px;
  }
`;
export const FooterCTA = styled.div`
  background-color: #067042;
  background-image: url(${backgroundImage});
  background-size: cover;
  padding: 80px 0px;
  @media (max-width: 991px){
    padding: 40px 0px;
  }
  @media (max-width: 576px){
    padding: 30px 0px;
  }
`
export const FooterContentCTA = styled.div`
  width: 100%;
  max-width: 820px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 65px;
  @media (max-width: 1150px){
    gap: 20px;
    max-width: 680px;
  }
  @media (max-width: 991px){
    flex-direction: column;
  }
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
  @media (max-width: 576px){
    max-width: 76px;
    max-height: 76px;
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
  @media (max-width: 1150px){
    p{
      font-size: 24px;
    }
  }
  @media (max-width: 991px){
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 576px){
    p{
      font-size: 22px;
      max-width: 320px;
    }
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
  @media (max-width: 576px){
    height: 48px;
  }
`
export const FooterBottom = styled.footer`
  background-color: #F3F3F5;
  padding-top: 65px;
  @media (max-width: 991px){
    padding-top: 45px;
  }
  @media (max-width: 576px){
    padding-top: 30px;
  }
`;
export const FooterContent = styled.div`
  padding-bottom: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 991px){
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
`;
export const FooterLogo = styled.div`
  width: 100%;
  max-width: 200px;
  @media (max-width: 576px){
    max-width: 150px;
  }
`;
export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 620px;
  display: flex;
  align-items: flex-start;
  gap: 90px;
  @media (max-width: 991px){
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;
export const FooterColumn = styled.div`
  h4{
    color: #140D30;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 160%;
    margin-bottom: 20px;
  }
  ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
    li{
      a{
        color: #433E59;
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 160%;
        &:hover{
          text-decoration: underline;
          color: #000;
        }
      }
    }
  }
  @media (max-width: 991px){
    h4{
      margin-bottom: 15px;
    }
    ul{
      gap: 6px;
      li{

      }
    }
  }
`;
export const FooterBottomContainer = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 1400px) {
    padding: 0px 25px;
  }
  @media (max-width: 576px) {
    padding: 0px 15px;
  }
`;
export const FooterDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid rgba(208, 207, 214, 0.50);
  padding: 44px 0px;
  @media (max-width: 576px){
    padding: 30px 0px;
  }

  @media(max-width: 991px){
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
  }

`;
export const FooterSocials = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 28px;
  flex-direction: column;
  p{
    color: #000;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
  }
  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    li{
      a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 56px;
        padding: 15.69px 16px 16.31px 16px;
        border-radius: 8px;
        border: 1px solid #D0CFD6;
        transition: all .3s;
        overflow: hidden;
        &:hover{
          picture{
            opacity: 0;
            img{
              transform: translateY(100%);
            }
          }
        }
        picture{
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all .3s;
          opacity: 1;
          img{
            display: block;
            max-width: 100%;
            transition: all .3s;
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
  @media(max-width: 991px){
    gap: 20px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  @media(max-width: 576px){
    ul{
      gap: 10px;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
    }
  }
`;
export const FooterContact = styled.div`
  h3, p, span{
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 25.6px;
  }
  h3{
    color: #000;
    font-weight: 700;
    margin-bottom: 8px;
  }
  p{
    font-weight: 400;
    margin-bottom: 10px;
  }
  span{
    color: #433E59;
    font-size: 14px;
  }
  ul{
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    li{
      a{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        svg{
          color: #067042;
        }
        p{
          color: rgba(20, 13, 48, 0.70);
          font-family: "Roboto", sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: 24px;
          margin-bottom: 0px;
          transition: all .3s;
        }
        &:hover{
          p{
            color: #000;
          }
        }
      }
    }
  }
  @media(max-width: 991px){
    align-items: center;
    justify-content: center;
    text-align: center;
    ul{
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`;
export const FooterMessage = styled.div`
  padding: 56px 0px;
  width: 100%;
  border-top: 1px solid rgba(208, 207, 214, 0.50);
  border-bottom: 1px solid rgba(208, 207, 214, 0.50);
  p{
    width: 100%;
    max-width: 320px;
    color: #067042;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    strong{
      font-weight: 600;
    }
  }
  @media (max-width: 991px){
    padding: 46px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
      text-align: center;
    }
  }
  @media (max-width: 576px){
    padding: 30px 0px;
  }
`;
export const FooterCopy = styled.div`
  width: 100%;
  padding: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p, span, strong{
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    line-height: 150%;
  }
  p, span{
    font-weight: 400;
  }
  p{
    width: 100%;
    max-width: 908px;
    color: #433E59;
  }
  span{
    color: #000;
  }
  @media (max-width: 991px){
    flex-direction: column;
    gap: 20px;
    p{
      text-align: center;
    }
  }
`;
