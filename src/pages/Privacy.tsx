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

const List = styled.ul`
  color: ${({ theme }) => theme.colors.grayText};
  line-height: 1.8;
  font-size: 1.05rem;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
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

const Privacy = () => {
  return (
    <Container>
      <Title>
        <span>Privacy</span> Policy
      </Title>
      <LastUpdated>Last Updated: July 30, 2026</LastUpdated>

      <Section>
        <SectionTitle>1. Information We Collect</SectionTitle>
        <Paragraph>
          Badri Innovation Lab collects information you provide directly to us, such as when you contact us via our contact form, subscribe to our newsletter, or use our services. This may include your name, email address, phone number, and any other information you choose to provide.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. How We Use Your Information</SectionTitle>
        <Paragraph>
          We use the information we collect to:
        </Paragraph>
        <List>
          <ListItem>Provide, maintain, and improve our services.</ListItem>
          <ListItem>Send you technical notices, updates, and promotional communications.</ListItem>
          <ListItem>Respond to your comments, questions, and requests.</ListItem>
          <ListItem>Monitor and analyze trends, usage, and activities in connection with our services.</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>3. Information Sharing</SectionTitle>
        <Paragraph>
          We do not sell, trade, or rent your personal information to others. We may share your information with third-party service providers who perform services on our behalf, but only to the extent necessary to provide those services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Security</SectionTitle>
        <Paragraph>
          We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Changes to This Policy</SectionTitle>
        <Paragraph>
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this policy periodically for any changes.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Contact Us</SectionTitle>
        <Paragraph>
          If you have any questions about this Privacy Policy, please contact us at <strong>badriinnovationlab@gmail.com</strong>.
        </Paragraph>
      </Section>

      <BackLink to="/">← Back to Home</BackLink>
    </Container>
  );
};

export default Privacy;
