import styled from 'styled-components';

// Define Styled Components
const AboutComponent = styled.div`
  position: relative;
  background: rgba(243, 243, 245, 0.60);
  padding: 60px 0px;
  overflow: hidden;
  &::after{
    content: "";
    position: absolute;
    width: 502px;
    height: 472.28px;
    right: -354px;
    top: -163px;
    opacity: 0.2;
    background: #067042;
    filter: blur(77.5px);
    z-index: 1;
  }
  &::before{
    content: "";
    position: absolute;
    width: 502px;
    height: 472.28px;
    left: -367px;
    bottom: -192.99px;
    opacity: 0.2;
    background: #067042;
    filter: blur(77.5px);
  }
  @media (max-width: 576px){
    padding: 30px 0px;
  }
`;
const AboutContainer = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1400px) {
    padding: 0px 25px;
  }
  @media (max-width: 576px) {
    padding: 0px 15px;
  }
`;
const AboutBody = styled.div`
  width: 100%;
  padding: 0px 50px;
  h1{
    color: #140D30;
    font-family: "Roboto", sans-serif;
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    margin-bottom: 20px;
  }
  p{
    font-size: 18px;
    color: #000;
    max-width: 100%;
    line-height: 150%;
  }
  @media (max-width: 991px){
    text-align: center;
    justify-content: center;
    h1{
      font-size: 32px;
    }
    p{
      font-size: 16px;
    }
  }
  @media (max-width: 576px){
    text-align: center;
    justify-content: center;
    padding: 0px 0px;
    h1{
      font-size: 24px;
    }
  }

`;
const AboutBodyContent = styled.div`
  margin-top: 60px;
  width: 100%;
  background-color: #0ab463;
  padding: 40px 50px;
  border-radius: 20px;
  color: #FFF;
  h2{
    color: #FFF;
    font-family: "Roboto", sans-serif;
    font-size: 32px;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 30px;
  }
  ul{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    li{
      p, span{
        color: #FFF;
        font-family: "Roboto", sans-serif;
      }
      p{
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 8px;
      }
      span{
        font-size: 18px;
      }
    }
  }
  @media (max-width: 991px){
    text-align: center;
    padding: 30px;
    h2{
      font-size: 26px;
    }
    ul{
      grid-template-columns: 1fr;
      grid-gap: 15px;
    }
  }
  @media (max-width: 576px){
    padding: 20px;
    h2{
      font-size: 24px;
    }
    ul{
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
  }
`;
export function About() {
  return (
    <AboutComponent>
      <AboutContainer>
        <AboutBody>
          <h1>About LawnStarter</h1>
          <p>
            Welcome to the most trusted network of lawn care professionals.
            At LawnStarter, we believe everyone deserves a beautiful, well-maintained lawn — and our mission is to make that easier for homeowners everywhere.
            <br />
            <br/>
            Founded in 2013 in Austin, LawnStarter's app and website connect homeowners with top-rated lawn care professionals across the United States.
            <br />
            <br/>
            We empower our community of lawn care pros to grow their own businesses by providing the tools, support, and security of a national platform.
          </p>
        </AboutBody>
        <AboutBodyContent>
          <h2>Millions of services booked. Millions of happy customers.</h2>
          <ul>
            <li>
              <p>3+ million</p>
              <span>Booked services</span>
            </li>
            <li>
              <p>34,000+</p>
              <span>Neighborhoods</span>
            </li>
            <li>
              <p>Millions</p>
              <span>Of 5-star reviews</span>
            </li>
            <li>
              <p>$250 million</p>
              <span>paid out to lawn care pros since 2013</span>
            </li>
          </ul>
        </AboutBodyContent>
      </AboutContainer>
    </AboutComponent>
  )
}
