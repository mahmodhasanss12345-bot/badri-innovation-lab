import { Link } from 'react-router-dom';
import styled from 'styled-components';

// --- STYLES ---
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
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

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.lightBg};
  padding: 2.5rem 2rem;
  border-radius: 16px;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 168, 107, 0.1);
    border-color: ${({ theme }) => theme.colors.primaryGreen};
    background: ${({ theme }) => theme.colors.white};
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.lightGreenAccent};
  color: ${({ theme }) => theme.colors.primaryGreen};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, background 0.3s ease;

  /* সার্ভিস কার্ডে হোভার করলে আইকনের বক্সের রঙ ও সাইজ বদলাবে */
  ${ServiceCard}:hover & {
    background: ${({ theme }) => theme.colors.primaryGreen};
    color: ${({ theme }) => theme.colors.white};
    transform: scale(1.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 0.8rem;
`;

const CardDesc = styled.p`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primaryGreen};
  border: 1px solid ${({ theme }) => theme.colors.primaryGreen};
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
`;

// --- COMPONENT ---
const ServicesSection = () => {
  const services = [
    {
      id: 1,
      // ✅ FontAwesome আইকন (Software Development)
      icon: <i className="fa-solid fa-laptop-code"></i>,
      title: 'Software Development',
      desc: 'Build modern, scalable custom software solutions tailored to your business needs.',
      tags: ['Web', 'Desktop', 'API'],
    },
    {
      id: 2,
      // ✅ FontAwesome আইকন (Mobile App)
      icon: <i className="fa-solid fa-mobile-screen-button"></i>,
      title: 'Mobile App Development',
      desc: 'Launch iOS and Android apps with smooth performance and intuitive user experiences.',
      tags: ['Flutter', 'iOS', 'Android'],
    },
    {
      id: 3,
      // ✅ FontAwesome আইকন (Website)
      icon: <i className="fa-solid fa-globe"></i>,
      title: 'Website Development',
      desc: 'Create high-performance, SEO-optimized websites that convert visitors into customers.',
      tags: ['React', 'Node.js', 'HTML/CSS'],
    },
    {
      id: 4,
      // ✅ FontAwesome আইকন (UI/UX)
      icon: <i className="fa-solid fa-pen-ruler"></i>,
      title: 'UI/UX Design',
      desc: 'Design modern, user-centric interfaces that are accessible and visually stunning.',
      tags: ['Figma', 'Prototyping', 'Research'],
    },
    {
      id: 5,
      // ✅ FontAwesome আইকন (E-commerce)
      icon: <i className="fa-solid fa-cart-shopping"></i>,
      title: 'E-commerce Solutions',
      desc: 'Build robust online stores with secure payment gateways and seamless inventory management.',
      tags: ['Shopify', 'WooCommerce', 'Payment'],
    },
    {
      id: 6,
      // ✅ FontAwesome আইকন (Maintenance)
      icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
      title: 'Maintenance & Support',
      desc: 'Keep your software running smoothly with 24/7 monitoring and continuous optimization.',
      tags: ['Monitoring', 'Updates', 'Security'],
    },
  ];

  return (
    <SectionContainer>
      <SectionHeader>
        <Title>
          What we <span>build</span> for you.
        </Title>
        <ViewAllLink to="/services">View All Services →</ViewAllLink>
      </SectionHeader>

      <Grid>
        {services.map((service) => (
          <ServiceCard key={service.id}>
            <IconWrapper>{service.icon}</IconWrapper>
            <CardTitle>{service.title}</CardTitle>
            <CardDesc>{service.desc}</CardDesc>
            <TagContainer>
              {service.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagContainer>
          </ServiceCard>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default ServicesSection;

