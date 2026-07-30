import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 5rem 4rem;
  max-width: 900px;
  margin: 0 auto;
  min-height: 70vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 1.5rem;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const LastUpdated = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.grayText};
  margin-bottom: 3rem;
  font-size: 0.95rem;
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 0.8rem;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.grayText};
  line-height: 1.8;
  font-size: 1.05rem;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.primaryGreen};
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Terms = () => {
  return (
    <Container>
      <Title>
        <span>Terms</span> of Service
      </Title>
      <LastUpdated>Last Updated: July 30, 2026</LastUpdated>

      <Section>
        <SectionTitle>1. Acceptance of Terms</SectionTitle>
        <Paragraph>
          By accessing and using the Badri Innovation Lab website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Description of Services</SectionTitle>
        <Paragraph>
          Badri Innovation Lab provides custom mobile app development, website development, UI/UX design, web application development, e-commerce solutions, and maintenance & support services. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. User Responsibilities</SectionTitle>
        <Paragraph>
          You are responsible for maintaining the confidentiality of any information you provide to us. You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our website.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Intellectual Property</SectionTitle>
        <Paragraph>
          All content on this website, including text, graphics, logos, and software, is the property of Badri Innovation Lab and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from any content without our explicit written consent.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Limitation of Liability</SectionTitle>
        <Paragraph>
          Badri Innovation Lab shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Governing Law</SectionTitle>
        <Paragraph>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Badri Innovation Lab operates, without regard to its conflict of law provisions.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Contact Information</SectionTitle>
        <Paragraph>
          If you have any questions about these Terms, please contact us at <strong>badriinnovationlab@gmail.com</strong>.
        </Paragraph>
      </Section>

      <BackLink to="/">← Back to Home</BackLink>
    </Container>
  );
};

export default Terms;

