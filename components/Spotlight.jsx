import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import FavoriteButton from "./FavoriteButton"; // ✅ added
import Link from "next/link";

// Styled container for the spotlight art piece
const SpotlightWrapper = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #fff8dc;
  margin: 2rem auto;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative; // ✅ for absolute positioning inside
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

// ✅ Random selection function using MDN pattern
function getRandomArtPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function Spotlight({ favorites, onToggleFavorite }) {
  const [artPiece, setArtPiece] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchArtPieces() {
      try {
        const res = await fetch("https://example-apis.vercel.app/api/art");
        const data = await res.json();
        const randomPiece = getRandomArtPiece(data);
        setArtPiece(randomPiece);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch art for spotlight:", error);
        setLoading(false);
      }
    }

    fetchArtPieces();
  }, []);

  if (loading) return <p>Loading spotlight...</p>;

  // function handleClick() {
  //   router.push({
  //     pathname: `/art/${artPiece.slug}`,
  //     query: { from: "spotlight" }, // ✅ Tell the detail page we came from spotlight
  //   });
  // }

  return (
    <SpotlightWrapper>
      {/* ✅ Link to art details */}
      <Link href={`/art/${artPiece.slug}`} passHref>
        <div style={{ cursor: "pointer" }}>
          <Image src={artPiece.imageSource} alt={artPiece.name} />
          <h3 style={{ textDecoration: "underline", color: "blue" }}>
            {artPiece.name}
          </h3>
        </div>
      </Link>

      <p>
        <strong>By:</strong> {artPiece.artist}
      </p>

      {/* ❤️ Favorite button at top right (already handled earlier) */}
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          zIndex: 1,
        }}
      >
        <FavoriteButton
          isFavorite={favorites.includes(artPiece.slug)}
          onToggle={() => onToggleFavorite(artPiece.slug)}
        />
      </div>
    </SpotlightWrapper>
  );
}

Spotlight.defaultProps = {
  favorites: [],
};
