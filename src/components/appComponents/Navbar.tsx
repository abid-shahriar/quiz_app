import styled from 'styled-components';
import Link from 'next/link';

export default function Navbar() {
  return (
    <StyledNav>
      <LogoContainer>
        <h4>QUIZ_APP</h4>
      </LogoContainer>

      <MenuItems>
        <Link href='/'>
          <MenuItem>Home</MenuItem>
        </Link>
        <Link href='/about'>
          <MenuItem>About</MenuItem>
        </Link>
        <Link href='/contact'>
          <MenuItem>Contact</MenuItem>
        </Link>
      </MenuItems>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 70px;
`;

const LogoContainer = styled.div``;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.a`
  display: inline-block;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-primary);
  transition: 0.15s;
  font-size: 1.4rem;

  &:hover {
    color: var(--color-secondary);
  }
`;
