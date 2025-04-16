// components/ArtPieceDetails.jsx
import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

// Styled back button with an arrow
const BackButton = styled.button`
  position: absolute;
  top: 20px; // 20px from the top of the page
  left: 20px; // 20px from the left of the page
  background-color: transparent; // No background color
  border: none; // No border
  font-size: 30px; // Larger font for the arrow
  cursor: pointer;
  padding: 0px;
  color: #333;
  margin: ;

  &:hover {
    color: #555; // Darker color on hover
  }
`;

// Wrapper for the art piece details
const ArtPieceDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative; // This allows us to position elements within the wrapper
  margin-top: 10px;
  margin-bottom: 30px;
`;

const ArtPieceImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export default function ArtPieceDetails({ artPiece }) {
  const router = useRouter();

  if (!artPiece) return <p>Loading...</p>;

  const { imageSource, name, artist, year, genre } = artPiece;

  const handleBackClick = () => {
    router.push("/gallery"); // Navigate back to gallery page
  };

  return (
    <ArtPieceDetailsWrapper>
      {/* Back button with an arrow */}
      <BackButton onClick={handleBackClick}>←</BackButton>

      <h1>{name}</h1>
      <ArtPieceImage src={imageSource} alt={name} />
      <p>
        <strong>Artist:</strong> {artist}
      </p>
      <p>
        <strong>Year:</strong> {year}
      </p>
      <p>
        <strong>Genre:</strong> {genre}
      </p>
    </ArtPieceDetailsWrapper>
  );
}
