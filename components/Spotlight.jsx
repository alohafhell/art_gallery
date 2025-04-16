import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

// Styled container for the spotlight art piece
const SpotlightWrapper = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #fff8dc;
  margin: 2rem auto;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

// ✅ Random selection function using MDN pattern
function getRandomArtPiece(pieces) {
  // Use Math.floor() and Math.random() to select random index
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function Spotlight({ favorites, onToggleFavorite }) {
  const [artPiece, setArtPiece] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state for more control
  const router = useRouter();

  useEffect(() => {
    async function fetchArtPieces() {
      try {
        const res = await fetch("https://example-apis.vercel.app/api/art");
        const data = await res.json();

        // Use MDN-style random selection
        const randomPiece = getRandomArtPiece(data);
        setArtPiece(randomPiece);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Failed to fetch art for spotlight:", error);
        setLoading(false); // Set loading to false in case of error
      }
    }

    fetchArtPieces(); // Run on component mount
  }, []);

  // While loading
  if (loading) return <p>Loading spotlight...</p>;

  function handleClick() {
    router.push(`/art/${artPiece.slug}`);
  }

  return (
    <SpotlightWrapper onClick={handleClick} style={{ cursor: "pointer" }}>
      <h2> Spotlight Art Piece</h2>
      <Image src={artPiece.imageSource} alt={artPiece.name} />
      <p>
        <strong>By:</strong> {artPiece.artist}
      </p>
    </SpotlightWrapper>
  );
}

Spotlight.defaultProps = {
  favorites: [], // Default to empty array
};
