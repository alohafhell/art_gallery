import { useEffect, useState } from "react";
import styled from "styled-components";
// import { useRouter } from "next/router";
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

// function picks a random art piece from the fetched array using math.random
//It picks a random number between 0 and the number of art pieces array , and uses it to grab one item from the list
function getRandomArtPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function Spotlight({ favorites, onToggleFavorite }) {
  const [artPiece, setArtPiece] = useState(null);
  const [loading, setLoading] = useState(true); //boolean state to indicate if the data is still loading from the API
  // const router = useRouter();

  useEffect(() => {
    //inside it makes  API call to fetch art data, and when the data is fetched,
    // it picks a random art piece using getRandomArtPiece and updates the artP state
    async function fetchArtPieces() {
      try {
        const res = await fetch("https://example-apis.vercel.app/api/art");
        const data = await res.json();
        const randomPiece = getRandomArtPiece(data);
        setArtPiece(randomPiece);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch art for spotlight:", error);
        setLoading(false); //is called after data is loaded to show that data is ready to be shown
      }
    }

    fetchArtPieces();
  }, []);

  if (loading) return <p>Loading spotlight...</p>; //if the data is still loading (loading is true),
  // the component returns a message indicating that the spotlight is loading

  // function handleClick() {
  //   router.push({
  //     pathname: `/art/${artPiece.slug}`,
  //     query: { from: "spotlight" }, // ✅ Tell the detail page we came from spotlight
  //   });
  // }

  return (
    <SpotlightWrapper>
      {/* href in the Llnk is dynamically set to /art/${artPiece.slug}
      which  leas to a page for that specific art p*/}
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
//sets default props for favorites,
// so if no favorites are passed to the Spotlight component, it defaults to an empty array
Spotlight.defaultProps = {
  favorites: [],
};
