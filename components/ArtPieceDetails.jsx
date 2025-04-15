import styled from "styled-components";
import Link from "next/link";

// Style
const Wrapper = styled.section`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const BackButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  color: #0070f3;
  text-decoration: underline;
  cursor: pointer;
`;

export default function ArtPieceDetails({ piece }) {
  return (
    <Wrapper>
      <Image src={piece.imageSource} alt={piece.name} />
      <h1>{piece.name}</h1>
      <p>
        <strong>Artist:</strong> {piece.artist}
      </p>
      <p>
        <strong>Year:</strong> {piece.year}
      </p>
      <p>
        <strong>Genre:</strong> {piece.genre}
      </p>

      <Link href="/gallery" passHref>
        <BackButton>← Back to Gallery</BackButton>
      </Link>
    </Wrapper>
  );
}
