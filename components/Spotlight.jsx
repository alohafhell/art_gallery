import { useEffect, useState } from "react";
import styled from "styled-components";

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

export default function Spotlight() {
  const [artPiece, setArtPiece] = useState(null);

  useEffect(() => {
    async function fetchArtPieces() {
      try {
        const res = await fetch("https://example-apis.vercel.app/api/art");
        const data = await res.json();

        // ✅ Use MDN-style random selection
        const randomPiece = getRandomArtPiece(data);
        setArtPiece(randomPiece);
      } catch (error) {
        console.error("Failed to fetch art for spotlight:", error);
      }
    }

    fetchArtPieces(); // Run on component mount
  }, []);

  // While loading
  if (!artPiece) return <p>Loading spotlight...</p>;

  // Show selected random piece
  return (
    <SpotlightWrapper>
      <h2>Spotlight Art Piece</h2>
      <Image src={artPiece.imageSource} alt={artPiece.name} />
      <p>
        <strong>By:</strong> {artPiece.artist}
      </p>
    </SpotlightWrapper>
  );
}
