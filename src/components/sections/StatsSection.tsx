import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// --- STYLES ---
const StatsContainer = styled.section`
  background: #0B132B;
  padding: 5rem 4rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem;
  }
`;

const LeftText = styled.div`
  flex: 1;
  max-width: 500px;
`;

const SectionLabel = styled.p`
  color: ${({ theme }) => theme.colors.primaryGreen};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  color: #a0aec0;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const RightStats = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primaryGreen};
  margin-bottom: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`;

const StatLabel = styled.p`
  font-size: 1.1rem;
  color: #e2e8f0;
  font-weight: 500;
`;

// --- COMPONENT ---
const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  // ✅ সঠিকভাবে 0 থেকে শুরু করার জন্য ইনিশিয়াল ভ্যালু 0 দিচ্ছি
  const [projects, setProjects] = useState(0);
  const [sectors, setSectors] = useState(0);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // ✅ 0 থেকে 1250 পর্যন্ত গুনবে (আগে এটি সরাসরি 1250 দেখাচ্ছিল)
      const projectInterval = setInterval(() => {
        setProjects((prev) => {
          if (prev >= 1250) {
            clearInterval(projectInterval);
            return 1250;
          }
          return prev + 25; // প্রতি 20ms পর 25 করে বাড়বে
        });
      }, 20);

      // ✅ 0 থেকে 130 পর্যন্ত গুনবে
      const sectorInterval = setInterval(() => {
        setSectors((prev) => {
          if (prev >= 130) {
            clearInterval(sectorInterval);
            return 130;
          }
          return prev + 3; // প্রতি 20ms পর 3 করে বাড়বে
        });
      }, 20);

      return () => {
        clearInterval(projectInterval);
        clearInterval(sectorInterval);
      };
    }
  }, [isVisible]);

  return (
    <StatsContainer ref={domRef}>
      <LeftText>
        <SectionLabel>Our Excellence</SectionLabel>
        <Title>Our minimum bar for client delivery.</Title>
        <Desc>
          We have delivered exceptional digital products and consistently 
          maintained high standards of quality and innovation.
        </Desc>
      </LeftText>

      <RightStats>
        <StatItem>
          <StatNumber>{projects.toLocaleString()}+</StatNumber>
          <StatLabel>Projects Delivered</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>{sectors}+</StatNumber>
          <StatLabel>Industry Sectors</StatLabel>
        </StatItem>
      </RightStats>
    </StatsContainer>
  );
};

export default StatsSection;

