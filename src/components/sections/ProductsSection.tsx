import { Link } from 'react-router-dom';
import styled from 'styled-components';

// --- STYLES ---
const SectionContainer = styled.section`
  padding: 5rem 4rem;
  background: ${({ theme }) => theme.colors.lightBg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const SubTitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.grayText};
  margin-bottom: 3rem;
`;

const ProductGrid = styled.div`
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

const ProductCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.03);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 168, 107, 0.15);
    border-color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const ProductImagePlaceholder = styled.div`
  width: 100%;
  height: 150px;
  background: ${({ theme }) => theme.colors.lightGreenAccent};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryGreen};
`;

const ProductName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 0.5rem;
`;

const ProductDesc = styled.p`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
`;

const ProductLink = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryGreen};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

// --- COMPONENT ---
const ProductsSection = () => {
  const products = [
    {
      id: 1,
      icon: '📊',
      name: 'Badri POS Pro',
      desc: 'A complete point-of-sale system for retail businesses with real-time analytics.',
    },
    {
      id: 2,
      icon: '📦',
      name: 'Badri Inventory Hub',
      desc: 'Cloud-based inventory management tool to track stock across multiple warehouses.',
    },
    {
      id: 3,
      icon: '🤖',
      name: 'Badri AI Chatbot',
      desc: 'An AI-powered customer support bot that integrates seamlessly with your website.',
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>
        Our <span>Flagship</span> Products.
      </SectionTitle>
      <SubTitle>Innovative tools we have built to solve real-world business problems.</SubTitle>

      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImagePlaceholder>{product.icon}</ProductImagePlaceholder>
            <ProductName>{product.name}</ProductName>
            <ProductDesc>{product.desc}</ProductDesc>
            <ProductLink to="/products">Learn More →</ProductLink>
          </ProductCard>
        ))}
      </ProductGrid>
    </SectionContainer>
  );
};

export default ProductsSection;

