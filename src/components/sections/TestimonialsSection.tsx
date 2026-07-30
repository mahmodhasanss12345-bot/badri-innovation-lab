import styled from 'styled-components';
// 'react-slick' এবং এর CSS সরাসরি ইম্পোর্ট করলে এই Error হয়। তাই আমি শুধু রিয়্যাক্ট হুক ব্যবহার করে একটি কাস্টম স্লাইডার বানিয়ে ফেলেছি।
import { useState, useEffect } from 'react';

const SectionContainer = styled.section`
  padding: 5rem 4rem;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  margin-bottom: 3rem;

  span {
    color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const CarouselTrack = styled.div<{ $currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${({ $currentIndex }) => $currentIndex * 50}%);
`;

const TestimonialCard = styled.div`
  flex: 0 0 50%;
  padding: 1rem;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 100%;
  }
`;

const CardInner = styled.div`
  background: ${({ theme }) => theme.colors.lightBg};
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  min-height: 250px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryGreen};
    transform: translateY(-5px);
  }
`;

const Quote = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.darkText};
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ClientName = styled.h4`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryGreen};
`;

const ClientTitle = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.grayText};
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $active, theme }) => $active ? theme.colors.primaryGreen : '#ddd'};
  border: none;
  cursor: pointer;
  transition: background 0.3s;
`;

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Badri Innovation Lab transformed our outdated system into a modern, fast web app. Their team is incredibly professional and responsive.",
      name: "Sarah Jenkins",
      title: "CEO, TechCorp"
    },
    {
      id: 2,
      quote: "The mobile app they built for us was flawless. Our user engagement skyrocketed by 40% within the first month. Highly recommended!",
      name: "Michael Ross",
      title: "CTO, SwiftStart"
    },
    {
      id: 3,
      quote: "They took our complex requirements and designed an absolutely stunning UI/UX. Our clients love the new look and feel.",
      name: "David Chen",
      title: "Product Manager, InnovateCo"
    },
    {
      id: 4,
      quote: "Their maintenance and support team is top-notch. We have never had any downtime since they took over our system.",
      name: "Emily White",
      title: "Operations Director, GlobalRetail"
    }
  ];

  // Auto Play Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <SectionContainer>
      <SectionTitle>
        What our <span>clients</span> say.
      </SectionTitle>

      <CarouselContainer>
        <CarouselTrack $currentIndex={currentIndex}>
          {testimonials.map((item) => (
            <TestimonialCard key={item.id}>
              <CardInner>
                <Quote>"{item.quote}"</Quote>
                <ClientName>{item.name}</ClientName>
                <ClientTitle>{item.title}</ClientTitle>
              </CardInner>
            </TestimonialCard>
          ))}
        </CarouselTrack>
      </CarouselContainer>

      <DotContainer>
        {testimonials.map((_, index) => (
          <Dot 
            key={index} 
            $active={index === currentIndex} 
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotContainer>
    </SectionContainer>
  );
};

export default TestimonialsSection;

