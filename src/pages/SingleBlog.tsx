import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 5rem 4rem;
  max-width: 800px;
  margin: 0 auto;
  min-height: 80vh;
`;

const BackButton = styled(Link)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primaryGreen};
  font-weight: 600;
  margin-bottom: 2rem;
  &:hover { text-decoration: underline; }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.colors.lightGreenAccent};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 1rem;
`;

const BlogDate = styled.p`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 0.95rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
`;

const BlogDesc = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.darkText};
`;

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.find((b: any) => b.id === Number(id));
        setBlog(foundBlog);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <Container>Loading...</Container>;
  if (!blog) return <Container>Blog not found</Container>;

  return (
    <Container>
      <BackButton to="/blog">← Back to Insights</BackButton>
      <ImageWrapper>
        {blog.imageUrl ? (
          <img src={blog.imageUrl} alt={blog.title} />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '5rem' }}>📄</div>
        )}
      </ImageWrapper>
      <BlogTitle>{blog.title}</BlogTitle>
      <BlogDate>{blog.date || 'Just now'}</BlogDate>
      <BlogDesc>{blog.desc}</BlogDesc>
    </Container>
  );
};

export default SingleBlog;

