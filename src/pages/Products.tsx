import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`;

// 1. Hero Section
const HeroSection = styled.section`
  padding: 5rem 4rem 3rem;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    padding: 3rem 2rem;
    gap: 2rem;
  }
`;

const HeroLeft = styled.div`
  flex: 1;
  max-width: 600px;
`;

const SmallLabel = styled.p`
  color: ${({ theme }) => theme.colors.grayText};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.darkText};
  line-height: 1.1;
  margin-bottom: 1.5rem;

  span {
    color: ${({ theme }) => theme.colors.primaryGreen};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const HeroSub = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.grayText};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const HeroRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const HeroImageWrap = styled.div`
  width: 100%;
  max-width: 500px;
  height: 320px;
  background: ${({ theme }) => theme.colors.lightGreenAccent};
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 220px;
  }
`;

// 2. Products Grid
const ProductsSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 4rem 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 3rem;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.primaryGreen};
  }
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

const ProductCard = styled(Link)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.03);
  text-decoration: none;
  color: inherit;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 168, 107, 0.15);
    border-color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const ProductImageWrapper = styled.div`
  width: 100%;
  height: 160px;
  background: ${({ theme }) => theme.colors.lightGreenAccent};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryGreen};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  line-height: 1.6;
`;

const LearnMoreText = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryGreen};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

// 3. CTA Section
const CTASection = styled.section`
  background: ${({ theme }) => theme.colors.primaryGreen};
  padding: 5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  color: white;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: 3rem 2rem;
    gap: 2rem;
  }
`;

const CTATitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const CTAButton = styled(Link)`
  background: ${({ theme }) => theme.colors.darkText};
  color: white;
  padding: 0.8rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`;


// --- COMPONENT ---
const Products = () => {
  // 🔥 ভবিষ্যতে নতুন প্রোডাক্ট যোগ করতে চাইলে, শুধু এই লিস্টে যোগ করুন
  const productList = [
    {
      id: 1,
      name: 'Badri POS Pro',
      desc: 'A complete point-of-sale system for retail businesses with real-time analytics.',
      icon: '🛒',
      image: '/src/assets/images/product1.jpg' // ইমেজ চাইলে এখানে বসান
    },
    {
      id: 2,
      name: 'Badri Inventory Hub',
      desc: 'Cloud-based inventory management tool to track stock across multiple warehouses.',
      icon: '📦',
      image: '/src/assets/images/product2.jpg'
    },
    {
      id: 3,
      name: 'Badri AI Chatbot',
      desc: 'An AI-powered customer support bot that integrates seamlessly with your website.',
      icon: '🤖',
      image: '/src/assets/images/product3.jpg'
    }
  ];

  return (
    <PageContainer>
      {/* 1. Hero */}
      <HeroSection>
        <HeroLeft>
          <SmallLabel>Our Products</SmallLabel>
          <HeroTitle>
            Innovative tools built to <span>solve</span><br /> real-world problems.
          </HeroTitle>
          <HeroSub>
            We build cutting-edge software products that help businesses automate, scale, and grow.
          </HeroSub>
        </HeroLeft>
        <HeroRight>
          <HeroImageWrap>
            {/* 🔥 এখানে আপনার ইমেজ বসান: src="/src/assets/images/product-hero.jpg" */}
            <img src="/src/assets/images/product-hero.jpg" alt="Products Showcase" />
          </HeroImageWrap>
        </HeroRight>
      </HeroSection>

      {/* 2. Product Grid */}
      <ProductsSection>
        <SectionTitle>
          Our <span>Flagship</span> Products.
        </SectionTitle>
        <Grid>
          {productList.map((product) => (
            <ProductCard key={product.id} to="/contact">
              <ProductImageWrapper>
                {/* যদি ইমেজ থাকে তাহলে img দেখাবে, না থাকলে আইকন দেখাবে */}
                {product.image ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <span>{product.icon}</span>
                )}
              </ProductImageWrapper>
              <ProductName>{product.name}</ProductName>
              <ProductDesc>{product.desc}</ProductDesc>
              <LearnMoreText>Learn More →</LearnMoreText>
            </ProductCard>
          ))}
        </Grid>
      </ProductsSection>

      {/* 3. CTA Section */}
      <CTASection>
        <div>
          <CTATitle>
            Ready to build your <br /> next big product?
          </CTATitle>
          <CTAButton to="/contact">Schedule a Call</CTAButton>
        </div>
      </CTASection>
    </PageContainer>
  );
};

export default Products;

