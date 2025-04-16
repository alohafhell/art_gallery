// components/Navigation.jsx
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// Styled nav wrapper
const Nav = styled.nav`
  background-color: #222;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000; // Keep it above other content, just in case
  height: 60px;
`;

// Styled link with active state styling
const NavLink = styled.a`
  color: ${(props) => (props.$active ? "#ffd700" : "#fff")};
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Navigation() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Now we can safely use router.pathname
  }, []);

  if (!mounted) return null; // Avoid rendering nav during SSR

  return (
    <Nav>
      <Link href="/" passHref>
        <NavLink
          $active={router.pathname === "/" || router.pathname === "/spotlight"}
        >
          Spotlight
        </NavLink>
      </Link>
      <Link href="/gallery" passHref>
        <NavLink $active={router.pathname === "/gallery"}>Art Pieces</NavLink>
      </Link>
      <Link href="/favorites" passHref>
        <NavLink $active={router.pathname === "/favorites"}>Favorites</NavLink>
      </Link>
    </Nav>
  );
}
