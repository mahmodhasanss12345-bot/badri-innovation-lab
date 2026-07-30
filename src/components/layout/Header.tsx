
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryGreen};
  letter-spacing: -0.5px;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkText};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryGreen};
  }
`;

const BoldNavItem = styled(NavItem)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryGreen};
`;

const CTAButton = styled(Link)`
  background: ${({ theme }) => theme.colors.primaryGreen};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">Badri Innovation Lab</Logo>
      
      <NavLinks>
        <NavItem to="/services">Services</NavItem>
        <NavItem to="/products">Our Products</NavItem>
        <BoldNavItem to="/work">Our Work</BoldNavItem>
        <NavItem to="/about">About</NavItem>
        <BoldNavItem to="/contact">Contact Us</BoldNavItem>
        <NavItem to="/blog">Blog</NavItem>
      </NavLinks>

      <CTAButton to="/contact">Schedule a Call</CTAButton>
    </HeaderContainer>
  );
};

export default Header;

