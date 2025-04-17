import React from "react";
import styled from "styled-components";
import BackButton from "./BackButton"; // ✅ USE THIS COMPONENT

const ArtPieceDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
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
//comp that will take one prop with all the data of art
export default function ArtPieceDetails({ artPiece }) {
  if (!artPiece) return <p>Loading...</p>; //if hasnt loaded yet

  const { imageSource, name, artist, year, genre } = artPiece;

  return (
    <ArtPieceDetailsWrapper>
      <BackButton /> {/* this shows the go-back button */}
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
