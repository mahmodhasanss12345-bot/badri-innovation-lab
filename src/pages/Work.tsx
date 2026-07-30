import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%; background: ${({ theme }) => theme.colors.white};
`;

// Hero
const HeroSection = styled.section`
  padding: 5rem 4rem 3rem; max-width: 1400px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between; gap: 4rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse; padding: 3rem 2rem; gap: 2rem;
  }
`;
const HeroLeft = styled.div`
  flex: 1; max-width: 600px;
`;
const SmallLabel = styled.p`
  color: #64748B; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;
`;
const HeroTitle = styled.h1`
  font-size: 3.5rem; font-weight: 800; color: #0B132B; line-height: 1.1; margin-bottom: 1.5rem;
  span { color: #00A86B; }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { font-size: 2.5rem; }
`;
const HeroSub = styled.p`
  font-size: 1.2rem; color: #64748B; margin-bottom: 2rem; line-height: 1.6;
`;
const HeroRight = styled.div`
  flex: 1; display: flex; justify-content: flex-end;
`;

// Grid
const PortfolioSection = styled.section`
  max-width: 1400px; margin: 0 auto; padding: 2rem 4rem 5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { padding: 2rem; }
`;
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { grid-template-columns: 1fr; }
`;
const ProjectCard = styled.div`
  position: relative; border-radius: 16px; overflow: hidden; height: 300px;
  background: #E6F4EA; border: 1px solid #f1f5f9; transition: all 0.3s ease;
  &:hover { transform: translateY(-8px); box-shadow: 0 12px 30px rgba(0, 168, 107, 0.15); }
  &:nth-child(2) { height: 400px; } &:nth-child(5) { height: 400px; }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { height: 250px !important; }
  img { width: 100%; height: 100%; object-fit: cover; }
`;
const CardOverlay = styled.div`
  position: absolute; bottom: 0; left: 0; width: 100%; padding: 1.5rem;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); color: white;
  display: flex; justify-content: space-between; align-items: flex-end;
`;
const ClientName = styled.h3`
  font-size: 1.5rem; font-weight: 700; margin: 0;
`;
const ViewLink = styled(Link)`
  color: white; font-size: 0.9rem; font-weight: 500; text-decoration: none;
  background: rgba(255,255,255,0.2); padding: 0.4rem 1rem; border-radius: 50px; transition: background 0.3s;
  &:hover { background: #00A86B; }
`;

// Review
const ReviewSection = styled.section`
  max-width: 1400px; margin: 0 auto; padding: 2rem 4rem 4rem;
  display: flex; justify-content: flex-end; align-items: center; gap: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { flex-direction: column; align-items: flex-start; padding: 2rem; }
`;
const ReviewBadge = styled.div`
  background: white; padding: 1.5rem 2rem; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  display: flex; flex-direction: column; align-items: center; max-width: 200px; border: 1px solid #f1f5f9;
`;
const Stars = styled.div`
  color: #f59e0b; font-size: 1.2rem; letter-spacing: 2px; margin: 0.5rem 0;
`;
const ReviewTitle = styled.p`
  font-weight: 600; color: #0B132B; margin: 0; font-size: 0.95rem;
`;
const ReviewLink = styled(Link)`
  color: #00A86B; font-weight: 600; text-decoration: none; border-bottom: 2px solid #00A86B; padding-bottom: 2px;
`;

// CTA
const CTASection = styled.section`
  background: #0B132B; padding: 5rem 4rem; display: flex; align-items: center; justify-content: space-between; gap: 4rem; color: white;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { flex-direction: column; text-align: center; padding: 3rem 2rem; gap: 2rem; }
`;
const CTALeft = styled.div`
  flex: 1; max-width: 600px;
`;
const CTATitle = styled.h2`
  font-size: 2.8rem; font-weight: 700; margin-bottom: 1.5rem; line-height: 1.2;
  span { color: #00A86B; }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { font-size: 2rem; }
`;
const CTAButton = styled(Link)`
  background: #00A86B; color: white; padding: 0.8rem 2rem; border-radius: 50px; font-weight: 600; text-decoration: none; display: inline-block; transition: transform 0.3s;
  &:hover { transform: translateY(-3px); }
`;
const CTAImageWrap = styled.div`
  flex: 1; display: flex; justify-content: flex-end;
  img { width: 100%; max-width: 450px; height: 280px; object-fit: cover; border-radius: 20px; }
`;

const Work = () => {
  // 🔥 ভবিষ্যতে ইমেজ পরিবর্তন করতে শুধু image: এর পরের নামটি বদলান
  const projects = [
    { id: 1, title: 'TechCorp Solutions', image: '/src/assets/images/project1.jpg', link: '/contact' },
    { id: 2, title: 'SwiftStart Mobile App', image: '/src/assets/images/project2.jpg', link: '/contact' },
    { id: 3, title: 'Urban E-commerce Store', image: '/src/assets/images/project3.jpg', link: '/contact' },
    { id: 4, title: 'InnovateCo Portal', image: '/src/assets/images/project4.jpg', link: '/contact' },
    { id: 5, title: 'GlobalRetail Dashboard', image: '/src/assets/images/project5.jpg', link: '/contact' },
    { id: 6, title: 'GenAI Chatbot', image: '/src/assets/images/project6.jpg', link: '/contact' }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroLeft>
          <SmallLabel>Our Work</SmallLabel>
          <HeroTitle>Over 100+ successful <span>projects</span><br /> delivered globally.</HeroTitle>
          <HeroSub>From startups to enterprises, we have built custom solutions that drive real business growth.</HeroSub>
        </HeroLeft>
        <HeroRight>
           {/* 🔥 এখানে হিরো ইমেজ বসান: src="/src/assets/images/showcase.jpg" */}
          <img src="/src/assets/images/showcase.jpg" alt="Showcase" style={{ width: '100%', maxWidth: '500px', height: '300px', borderRadius: '20px', objectFit: 'cover' }} />
        </HeroRight>
      </HeroSection>

      <PortfolioSection>
        <Grid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <img src={project.image} alt={project.title} />
              <CardOverlay>
                <ClientName>{project.title}</ClientName>
                <ViewLink to={project.link}>View Project →</ViewLink>
              </CardOverlay>
            </ProjectCard>
          ))}
        </Grid>
      </PortfolioSection>

      <ReviewSection>
        <ReviewBadge>
          <span style={{ fontWeight: 'bold', color: '#64748b', fontSize: '0.8rem' }}>REVIEWED ON</span>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Clutch</div>
          <Stars>★★★★★</Stars>
          <ReviewTitle>4.9 Rating</ReviewTitle>
        </ReviewBadge>
        <ReviewLink to="/contact">Read our reviews on Clutch →</ReviewLink>
      </ReviewSection>

      <CTASection>
        <CTALeft>
          <CTATitle>Brands like <span>TechCorp</span> and <span>SwiftStart</span><br /> already trust us. Discover if we're a good fit for you.</CTATitle>
          <CTAButton to="/contact">Book a Discovery Call</CTAButton>
        </CTALeft>
        <CTAImageWrap>
           {/* 🔥 এখানে CTA ইমেজ বসান: src="/src/assets/images/meeting.jpg" */}
          <img src="/src/assets/images/meeting.jpg" alt="Meeting" />
        </CTAImageWrap>
      </CTASection>
    </PageContainer>
  );
};

export default Work;

