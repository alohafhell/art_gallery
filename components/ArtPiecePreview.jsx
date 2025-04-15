// this component shows 1 art piece
// one individual art piece (image, title, artist)
// Import styled-components for styling
import styled from "styled-components";
import Link from "next/link";

// Create a styled box for each art piece
const Wrapper = styled.div`
  border: 1px solid #ccc; /* Light grey border */
  padding: 1rem; /* Add space inside the box */
  margin: 1rem; /* Space between art pieces */
  max-width: 300px; /* Limit size */
  background-color: white; /* White background */
`;

// Image style – full width
const Image = styled.img`
  width: 100%;
  height: auto;
`;

//actual component
export default function ArtPiecePreview({ imageSource, name, artist, slug }) {
  return (
    <Link href={`/art/${slug}`} passHref>
      {/* Entire box is clickable */}
      <Wrapper>
        <Image src={imageSource} alt={name} />
        <h2>{name}</h2>
        <p>By {artist}</p>
      </Wrapper>
    </Link>
  );
}
