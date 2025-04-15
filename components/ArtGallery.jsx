//Loops through all art pieces and renders each one in a list and showing each with ArtPiecePreview
//
import { useEffect, useState } from "react"; // React hooks
import styled from "styled-components"; // For styling
import ArtPiecePreview from "./ArtPiecePreview"; // Import our preview component

// Styled layout to arrange the pieces
const GalleryWrapper = styled.section`
  display: flex; /* Put items in a row */
  flex-wrap: wrap; /* Wrap to next line if needed */
  justify-content: center; /* Center the items */
  padding: 2rem; /* Some padding */
`;

export default function ArtGallery() {
  const [artPieces, setArtPieces] = useState([]); // Create state for fetched data

  // Fetch art pieces once the component loads
  useEffect(() => {
    async function fetchArtPieces() {
      try {
        // Fetch from the API
        const response = await fetch("https://example-apis.vercel.app/api/art");
        const data = await response.json(); // Turn response into JavaScript
        setArtPieces(data); // Save to state
      } catch (error) {
        console.error("Failed to fetch art:", error);
      }
    }

    fetchArtPieces(); // Call the function
  }, []); // Empty array = run only once on load

  return (
    <GalleryWrapper>
      {/* Loop through all art pieces and render each one */}
      {artPieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug} // Each item needs a unique key
          slug={piece.slug}
          imageSource={piece.imageSource} // Pass props down
          name={piece.name}
          artist={piece.artist}
        />
      ))}
    </GalleryWrapper>
  );
}
