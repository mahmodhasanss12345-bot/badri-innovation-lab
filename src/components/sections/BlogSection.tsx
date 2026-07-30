import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 5rem 4rem;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};

  span {
    color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const ViewAllLink = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryGreen};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryGreen};
  padding-bottom: 4px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: ${({ theme }) => theme.colors.lightBg};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  }
`;

const ImageWrapper = styled.div<{ $color: string }>`
  height: 200px;
  background: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
`;

const ContentWrapper = styled.div`
  padding: 1.5rem 2rem 2rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 0.8rem;
  line-height: 1.4;
`;

const BlogDesc = styled.p`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const AuthorAvatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: #555;
`;

const AuthorName = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkText};
`;

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      icon: '💻',
      color: '#3B82F6', // Blue
      title: 'Software Development Trends in 2026',
      desc: 'Explore the latest tools, frameworks, and best practices shaping the future of software engineering.',
      author: 'Badri Team',
    },
    {
      id: 2,
      icon: '📱',
      color: '#10B981', // Green
      title: 'Why Mobile-First Design Matters',
      desc: 'Learn how designing for mobile first can drastically improve user engagement and conversion rates.',
      author: 'Badri Team',
    },
    {
      id: 3,
      icon: '🤖',
      color: '#8B5CF6', // Purple
      title: 'AI in Modern Web Applications',
      desc: 'How artificial intelligence is being integrated into everyday web apps to automate and personalize.',
      author: 'Badri Team',
    },
  ];

  return (
    <SectionContainer>
      <SectionHeader>
        <Title>
          Our latest <span>insights</span>.
        </Title>
        <ViewAllLink to="/blog">Read More on Blog →</ViewAllLink>
      </SectionHeader>

      <Grid>
        {blogs.map((blog) => (
          <BlogCard key={blog.id}>
            <ImageWrapper $color={blog.color}>
              {blog.icon}
            </ImageWrapper>
            <ContentWrapper>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogDesc>{blog.desc}</BlogDesc>
              <AuthorWrapper>
                <AuthorAvatar>BI</AuthorAvatar>
                <AuthorName>By {blog.author}</AuthorName>
              </AuthorWrapper>
            </ContentWrapper>
          </BlogCard>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default BlogSection;

