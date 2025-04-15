// components/Navigation.js

import Link from "next/link";
import styled from "styled-components";

// Styled navigation bar
const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

// ✅ This is where you're styling the Link directly!
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <StyledLink href="/spotlight">Spotlight</StyledLink>
      <StyledLink href="/gallery">Gallery</StyledLink>
    </Nav>
  );
}
