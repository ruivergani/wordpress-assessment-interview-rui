import React from 'react';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { fetchMovies } from '../../services/api';

// Define Styled Components
const MovieComponent = styled.div`
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
const MovieContainer = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0;
  @media (max-width: 1400px) {
    padding: 0px 25px;
  }
  @media (max-width: 576px) {
    padding: 0px 15px;
  }
`;
const MovieTitle = styled.h1`
  width: 100%;
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 130%;
  @media (max-width: 991px){
    text-align: center;
  }
  @media (max-width: 576px){
    font-size: 26px;
  }
`;
const MoviePosts = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 34px;
  margin-top: 50px;
  z-index: 3 !important;
  @media (max-width: 991px){
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    margin-top: 30px;
  }
  @media (max-width: 576px){
    margin-top: 20px;
  }
`;
const MoviePost = styled(Link)`
  width: 100%;
  max-width: 382px;
  border-radius: 16px;
  border: 1px solid #D0CFD6;
  .image{
    width: 100%;
    max-width: 382px;
    height: 100%;
    max-height: 225px;
    overflow: hidden;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    img{
      width: 100%;
      max-width: 382px;
      height: 100%;
      max-height: 225px;
      object-fit: cover;
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
      transition: all .3s;
      overflow: hidden;
    }
  }
  &:hover{
    h2{
      text-decoration: underline;
    }
    .image{
      img{
        transform: scale(1.2);
      }
    }
  }
`;
const MoviePostText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 30px 24px;
  h2, p{
    font-family: "Roboto", sans-serif;
  }
  h2{
    color: #140D30;
    font-size: 20px;
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 20px;
  }
  p{
    color: #726E83;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
`
const LoadingContainer = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0;
  padding: 60px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1400px) {
    padding: 30px 25px;
  }
  @media (max-width: 576px) {
    padding: 30px 15px;
  }
`;
const NoPostsContainer = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0;
  padding: 60px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1400px) {
    padding: 30px 25px;
  }
  @media (max-width: 576px) {
    padding: 30px 15px;
  }
`;

export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // async operation ()
    const getMovies = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    }
    getMovies();
  }, [])

  // Loading Validation
  if (loading) {
    return (
      <LoadingContainer>
        Loading Movies...
      </LoadingContainer>
    );
  }
  // No Posts Validation
  if (!movies || movies.length === 0) {
    return (
      <NoPostsContainer>
        No Movie found.
      </NoPostsContainer>
    );
  }

  return (
    <MovieComponent>
      <MovieContainer>
        <MovieTitle>Explore more articles</MovieTitle>
        <MoviePosts>
          {movies.map((movie) => (
            <MoviePost key={movie.id} to={`/movie/${movie.slug}`}>
              {/* Movie Thumbnail */}
              <div className='image'>
                {movie._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                  <img src={movie._embedded['wp:featuredmedia'][0].source_url} alt={movie.title.rendered} />
                )}
              </div>
              <MoviePostText>
                <h2>{movie.title.rendered}</h2>
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(movie.excerpt.rendered) }}></p>
              </MoviePostText>
            </MoviePost>
          ))}
        </MoviePosts>
      </MovieContainer>
    </MovieComponent>
  );
};
