import React from 'react';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../../services/api';

// Define Styled Components
const HomeComponent = styled.div`
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
    border-radius: 999px !important;
    opacity: 0.2;
    background: #067042;
    filter: blur(77.5px);
  }
  &::before{
    position: absolute;
    width: 502px;
    height: 472.28px;
    left: -367px;
    bottom: -192.99px;
    border-radius: 999px !important;
    opacity: 0.2;
    background: #067042;
    filter: blur(77.5px);
  }
`;
const HomeContainer = styled.div`
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
    padding: 0px 25px;
  }
  @media (max-width: 576px) {
    padding: 0px 15px;
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
    padding: 0px 25px;
  }
  @media (max-width: 576px) {
    padding: 0px 15px;
  }
`;
const SectionHero = styled.div`
  width: 100%;
`;
const PostComponent = styled(Link) `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  &:hover{
    img{
      transform: scale(1.2);
    }
  }
  div{
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-height: 350px;
    max-width: 800px;
    border-radius: 10px;
    transition: all .3s;
    img{
      width: 100%;
      height: 100%;
      max-height: 350px;
      max-width: 800px;
      border-radius: 10px;
      transition: all .3s;
      object-fit: cover;
    }
  }
`;
const PostComponentText = styled.div`
  width: 100%;
  h1{
    color: #140D30;
    font-family: "Roboto", sans-serif;
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    transition: all .3s;
    &:hover{
      color: #000;
      text-decoration: underline;
    }
  }
  p{
    padding: 20px 0px;
    color: #726E83;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 25.2px;
  }
  span{
    color: #140D30;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    &:hover{
      color: #067042;
      text-decoration: underline;
    }
  }
`;
export const Home = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWelcomePost = async () => {
      try {
        const Allposts = await fetchPosts();
        if (Allposts.length > 0) { // if exists or not
          setPost(Allposts[0]);
        } else {
          setPost(null);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error when fetching welcome post', error);
        setLoading(false);
      }
    }
    getWelcomePost();
  }, [])

  // Loading Validation
  if (loading) {
    return (
      <LoadingContainer>
        Loading...
      </LoadingContainer>
    );
  }
  // No Posts Validation
  if (!post) {
    return (
      <NoPostsContainer>
        No Welcome post found.
      </NoPostsContainer>
    );
  }

  // Embed the Featured Image (if exists)
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  // Sanitize the content before rendering
  const sanitizedContentExcerpt = DOMPurify.sanitize(post.excerpt.rendered);

  return (
    <HomeComponent>
      <HomeContainer>
        <SectionHero>
          <PostComponent to={`/post/${post.id}`}>
            {/* Display featured image if available */}
            <div>
              {featuredImage && <img src={featuredImage} alt={post.title.rendered} />}
            </div>
            <PostComponentText>
              <h1>{post.title.rendered}</h1>
              {/*
                DOMPurify cleans the HTML content - XSS attacks avoided
                Could use also react-html-parser (convert and render HTML)
              */}
              <div dangerouslySetInnerHTML={{ __html: sanitizedContentExcerpt  }} />
              <span>Read More</span>
            </PostComponentText>
          </PostComponent>
        </SectionHero>
      </HomeContainer>
    </HomeComponent>
  );
};
