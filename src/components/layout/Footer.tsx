import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: #0B132B;
  padding: 4rem 4rem 2rem;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 3rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 3rem;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LogoText = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryGreen};
  margin-bottom: 0.5rem;
  display: inline-block;
`;

const FooterDesc = styled.p`
  color: #a0aec0;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ColumnTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled(Link)`
  color: #a0aec0;
  font-size: 0.95rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryGreen};
    border-color: ${({ theme }) => theme.colors.primaryGreen};
    transform: translateY(-3px);
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.2);
  background: transparent;
  color: white;
  outline: none;
  font-size: 0.95rem;

  &::placeholder {
    color: #a0aec0;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const SubscribeBtn = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primaryGreen};
  color: white;
  font-weight: 600;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StatusMsg = styled.div<{ $success: boolean }>`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: ${({ $success }) => $success ? '#00A86B' : '#ff6b6b'};
`;

const Copyright = styled.div`
  text-align: center;
  color: #a0aec0;
  font-size: 0.9rem;
`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // 🟢 আপনার Google Apps Script ওয়েব অ্যাপ লিংক এখানে বসান (Contact ফর্মের মতো একই লিংকও হতে পারে)
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzFLmwqU_G4QCWlfxLy1CP3_uAyql5iuPu_8pL1Vnyo-OHQpfdwyfEiB4h5CWSNrveD/exec';

            await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      setStatus({ type: 'success', message: 'Successfully subscribed to our newsletter!' });
      setEmail('');
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FooterContainer>
      <FooterGrid>
        <Column>
          <LogoText to="/">Badri Innovation Lab</LogoText>
          <FooterDesc>
            Innovate. Build. Scale. We build production-ready digital products for modern businesses.
          </FooterDesc>
          <SocialIcons>
            <SocialIcon href="#">in</SocialIcon>
            <SocialIcon href="#">f</SocialIcon>
            <SocialIcon href="#">x</SocialIcon>
            <SocialIcon href="#">ig</SocialIcon>
          </SocialIcons>
        </Column>

        <Column>
          <ColumnTitle>Quick Links</ColumnTitle>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/products">Our Products</FooterLink>
          <FooterLink to="/work">Our Work</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
        </Column>

        <Column>
          <ColumnTitle>Support</ColumnTitle>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <FooterLink to="/terms">Terms of Service</FooterLink>
        </Column>

        <Column>
          <ColumnTitle>Get insights from the experts</ColumnTitle>
          <FooterDesc>Subscribe to our newsletter for the latest tech trends.</FooterDesc>
          <NewsletterForm onSubmit={handleSubmit}>
            <Input 
              type="email" 
              placeholder="name@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubscribeBtn type="submit" disabled={loading}>
              {loading ? 'Subscribing...' : 'Subscribe'}
            </SubscribeBtn>
          </NewsletterForm>
          {status && <StatusMsg $success={status.type === 'success'}>{status.message}</StatusMsg>}
        </Column>
      </FooterGrid>
      <Copyright>
        © 2026 Badri Innovation Lab. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;


