import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 4rem;
  min-height: 85vh;
  background: ${({ theme }) => theme.colors.lightBg};
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    padding: 3rem 2rem;
    gap: 3rem;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const Headline = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const RotatingTextWrapper = styled.div`
  height: 100px; 
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 80px;
  }
`;

const RotatingText = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryGreen};
  display: inline-block;
  animation: fadeSlide 0.5s ease-in-out;

  @keyframes fadeSlide {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.6rem; 
  }
`;

const SubText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.grayText};
  margin-bottom: 2.5rem;
  line-height: 1.6;
  margin-top: 0;
`;

const StyledCTA = styled(Link)`
  background: ${({ theme }) => theme.colors.primaryGreen};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 168, 107, 0.3);
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 250px;
  }
`;

const HeroSection = () => {
  const phrases = [
    "Vetted AI & Software Engineers.",
    "Custom Mobile App Developers.",
    "Modern Web Application Builders.",
    "Enterprise E-commerce Solutions.",
    "Expert UI/UX Designers."
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <HeroContainer>
      <LeftContent>
        <Headline>
          Accelerate Your Digital Roadmap With Badri Innovation Lab.
        </Headline>
        
        <RotatingTextWrapper>
          <RotatingText key={currentPhraseIndex}>
            {phrases[currentPhraseIndex]}
          </RotatingText>
        </RotatingTextWrapper>

        <SubText>
          We deliver high-quality, production-ready digital products that scale your business globally.
        </SubText>

        <StyledCTA to="/contact">Schedule a Call</StyledCTA>
      </LeftContent>

      <RightContent>
        <VideoContainer>
          <video autoPlay loop muted playsInline>
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoContainer>
      </RightContent>
    </HeroContainer>
  );
};

export default HeroSection;

