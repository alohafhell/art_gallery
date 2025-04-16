// components/ArtGallery.jsx
import { useEffect, useState } from "react";
import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

const GalleryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
`;

export default function ArtGallery({ favorites, onToggleFavorite }) {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    async function fetchArtPieces() {
      try {
        const response = await fetch("https://example-apis.vercel.app/api/art");
        const data = await response.json();
        setArtPieces(data);
      } catch (error) {
        console.error("Failed to fetch art:", error);
      }
    }

    fetchArtPieces();
  }, []);

  return (
    <GalleryWrapper>
      {artPieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          slug={piece.slug}
          imageSource={piece.imageSource}
          name={piece.name}
          artist={piece.artist}
          isFavorite={favorites.includes(piece.slug)}
          onToggleFavorite={() => onToggleFavorite(piece.slug)}
        />
      ))}
    </GalleryWrapper>
  );
}
