import styled from 'styled-components';

export const HeaderComponent = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 30px 0px;
  z-index: 1000;
  background-color: #F3F3F5;
  transition: all .3s ease-in-out;
  border-bottom: 1px solid #F5F5F5;
  @media (max-width: 991px) {
    padding: 20px 0px;
  }
`
export const HeaderContainer = styled.div`
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
  // Logo
  img{
    width: 100%;
    max-width: 198px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 991px) {
      max-width: 150px;
    }
  }
`;
export const HeaderLogo = styled.div`
  width: 100%;
  max-width: 250px;
  @media (max-width: 991px) {
    max-width: 200px;
  }
`;
export const HeaderNavigation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    display: none; /* Hide navigation on mobile */
  }
`;
export const HeaderButtonsComponent = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 576px) {
    display: none; /* Hide navigation on mobile */
  }
`;
export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 291px;
  height: 43px;
  justify-content: space-between;
  gap: 10px;
  border-radius: 4px 10px;
  background-color: #FFF;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.10);
  padding: 0px 20px;
  border: 1px solid #FFF;
  @media (max-width: 991px) {
    display: none; /* Hide navigation on mobile */
  }
`;
export const SearchInput = styled.input`
  padding: 13px 0px;
  font-size: 14px;
  width: 100%;
  cursor: not-allowed; // Disable the cursor for non-functional search
  &:disabled {
    background-color: #FFF;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
export const SearchIcon = styled.button`
  width: 100%;
  max-width: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: not-allowed; // Disable the cursor for non-functional search
`;
export const HeaderCTA = styled.div`
  width: 100%;
  max-width: 165px;
`;
export const ButtonCTA = styled.button`
  width: 100%;
  max-width: 165px;
  padding: 12px 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 4px 10px;
  border: 1px solid transparent;
  transition: all .3s;
  background: #067042;
  p{
    color: #FFF;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
  }
  svg{
    color: #FFF;
  }

  &:hover{
    border-color: #067042;
    background-color: #FFF;
    p, svg{
      color: #067042;
    }
  }
  @media (max-width: 991px) {
    display: none; /* Hide navigation on mobile */
  }
`;
export const HamburgerMenu = styled.button`
  display: none;

  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer; /* Hamburger menu will be clickable */
  }
`;
export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #F5F5F5;
  z-index: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0px;
  ul{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    li{
      a {
        padding: 10px 20px;
        text-align: center;
        color: #067042;
        text-decoration: none !important;
        &:hover {
          background-color: #EAEAEA;
        }
      }
    }
  }

`;
