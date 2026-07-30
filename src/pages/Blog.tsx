import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 5rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  margin-bottom: 0.5rem;

  span { color: ${({ theme }) => theme.colors.primaryGreen}; }
`;

const SubTitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.grayText};
  margin-bottom: 4rem;
  font-size: 1.1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled(Link)`
  display: block;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 168, 107, 0.15);
  }
`;

const ImageWrapper = styled.div`
  height: 220px;
  width: 100%;
  background: ${({ theme }) => theme.colors.lightGreenAccent};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 1.5rem 2rem 2rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 0.8rem;
  line-height: 1.4;
`;

const BlogDesc = styled.p`
  color: ${({ theme }) => theme.colors.grayText};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 1rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.grayText};
`;

const DateText = styled.span`
  font-weight: 500;
`;

const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => {
        setBlogs([]);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Title>Our <span>Insights</span></Title>
      <SubTitle>Read the latest articles from the Badri Innovation Lab team.</SubTitle>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#64748b' }}>No blogs published yet. Stay tuned!</p>
      ) : (
        <Grid>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} to={`/blog/${blog.id}`}>
              <ImageWrapper>
                {blog.imageUrl ? (
                  <img src={blog.imageUrl} alt={blog.title} />
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '3rem' }}>📄</div>
                )}
              </ImageWrapper>
              <Content>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogDesc>{blog.desc}</BlogDesc>
                <MetaInfo>
                  <DateText>{blog.date || 'Just now'}</DateText>
                  <span>Read more →</span>
                </MetaInfo>
              </Content>
            </BlogCard>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Blog;

