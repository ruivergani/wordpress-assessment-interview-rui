import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostBySlug } from '../../services/api';
import styled from 'styled-components';
import { Calendar, Alarm} from 'phosphor-react';

// Define Styled Components
const PostSingleComponent = styled.div`
  position: relative;
  border-radius: 0px 0px 50px 0px;
  background: rgba(243, 243, 245, 0.60);
  padding: 60px 0px;
  overflow: hidden;
  &::after{
    content: "";
    position: absolute;
    width: 502px;
    height: 434px;
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
    height: 434px;
    left: -200px;
    bottom: -192.99px;
    opacity: 0.2;
    background: #067042;
    filter: blur(77.5px);
  }
  @media (max-width: 576px){
    padding: 30px 0px;
  }
`;
const PostSingleContainer = styled.div`
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
const SectionSingleHero = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3 !important;
`;
const SingleComponent = styled.div`
  width: 100%;
  max-width: 850px;
`
const SingleComponentText = styled.div`
  margin-bottom: 58px;
  h1{
    color: #140D30;
    font-family: "Roboto", sans-serif;
    font-size: 40px;
    font-weight: 600;
    line-height: 130%;
  }
  @media (max-width: 991px){
    margin-bottom: 30px;
    h1{
      font-size: 32px;
      text-align: center;
    }
  }
  @media (max-width: 991px){
    h1{
      font-size: 24px;
    }
  }
`
const SingleComponentTextList = styled.ul`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 17px;
  li{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #433E59;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    &:not(:last-child){
      border-right: 1px solid rgba(161, 158, 172, 0.40);
      padding-right: 15px;
    }
  }
  @media (max-width: 991px){
    li{
      &:not(:last-child){
        border-right: 0px;
      }
    }
    flex-direction: column;
  }
`;
const SingleComponentBody = styled.div`
  img{
    width: 100%;
    height: 100%;
    max-height: 450px;
    max-width: 850px;
    object-fit: cover;
    border-radius: 10px;
  }
  @media (max-width: 991px){
    img{
      max-height: 350px;
    }
  }
  @media (max-width: 576px){
    img{
      max-height: 200px;
    }
  }
`
const SingleComponentBodyText = styled.div`
  margin-top: 60px;
  margin-top: 60px;
  p {
    font-size: 16px;
    line-height: 1.5;
    margin: 20px 0;
    color: #333;
    @media (max-width: 576px) {
      font-size: 1.4rem;
    }
  }

  h1 {
    font-size: 24px;
    margin: 20px 0;
    color: #222;
    line-height: 1.2;
    @media (max-width: 576px) {
      font-size: 2rem;
    }
  }
  h2 {
    font-size: 20px;
    margin: 18px 0;
    color: #333;
    line-height: 1.3;
    @media (max-width: 576px) {
      font-size: 1.75rem;
    }
  }
  h3 {
    font-size: 1.75rem;
    margin: 16px 0;
    color: #444;
    line-height: 1.4;
    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }
  h4 {
    font-size: 1.5rem;
    margin: 14px 0;
    color: #555;
    line-height: 1.5;
    @media (max-width: 576px) {
      font-size: 1.25rem;
    }
  }
  ul{
    display: flex;
    align-items: flex-start;
    gap:10px;
    flex-direction: column;
    li{
      font-size: 16px;
      line-height: 130%;
      color: #333;
      @media (max-width: 576px) {
        font-size: 1.4rem;
      }
      p{
        font-size: 16px;
        line-height: 130%;
        color: #333;
        @media (max-width: 576px) {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export const SinglePost = () => {
  const { slug } = useParams(); // Get post slug from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const fetchedPost = await fetchPostBySlug(slug); // Fetch post by slug
        setPost(fetchedPost);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };

    getPost();
  }, [slug]); // Re-fetch if the slug changes

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
        Post Not Found.
      </NoPostsContainer>
    );
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <PostSingleComponent>
      <PostSingleContainer>
        <SectionSingleHero>
          <SingleComponent>
            <SingleComponentText>
              <h1>{post.title.rendered}</h1>
              <SingleComponentTextList>
                <li>
                  <Calendar size={20} weight="duotone" />
                  {new Date(post.date).toLocaleDateString()}
                </li>
                <li>
                  <Alarm size={20} weight="duotone" />
                  Read time:&nbsp;
                  {Math.ceil(post.content.rendered.split(' ').length / 200)} min read
                </li>
                <li>
                  Last updated on: {new Date(post.modified).toLocaleDateString()}
                </li>
              </SingleComponentTextList>
            </SingleComponentText>
            <SingleComponentBody>
              {featuredImage && <img src={featuredImage} alt={post.title.rendered} />}
              <SingleComponentBodyText dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </SingleComponentBody>
          </SingleComponent>
        </SectionSingleHero>
      </PostSingleContainer>
    </PostSingleComponent>
  );
};
