import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowUDownLeft } from 'phosphor-react';

// Images
import NotFoundBg from '../../../images/bg/not_found.svg';

const NotFoundContainer = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 60px 0px;
  @media (max-width: 1400px) {
    padding: 40px 25px;
  }
  @media (max-width: 576px) {
    padding: 30px 15px;
  }

  a{
    font-size: 18px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    &:hover{
      text-decoration: underline;
    }
  }
`;

const ImageNotFound = styled.img`
  width: 100%;
  max-width: 300px;
  padding: 60px 0px;
  @media (max-width: 576px) {
    padding-bottom: 40px;
    padding-top: 0px;
  }
`

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <ImageNotFound src={NotFoundBg} title='Not Found Image' alt='Not Found Image'></ImageNotFound>
      <Link to={'/'}>
        Return to Home Page
        <ArrowUDownLeft size={20} weight="duotone" />
      </Link>
    </NotFoundContainer>
  );
};
