import { useState, useEffect } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import styled from "styled-components";

export default function FavoritesPage({ favorites, onToggleFavorite }) {
  const [allArt, setAllArt] = useState([]);

  useEffect(() => {
    async function fetchArtPieces() {
      try {
        const res = await fetch("https://example-apis.vercel.app/api/art");
        const data = await res.json();
        setAllArt(data);
      } catch (error) {
        console.error("Failed to fetch art pieces:", error);
      }
    }

    fetchArtPieces();
  }, []);

  const favoriteArtPieces = allArt.filter((art) =>
    favorites.includes(art.slug)
  );

  const CenteredTitle = styled.h1`
    text-align: center;
  `;

  return (
    <div>
      <CenteredTitle>Art Gallery</CenteredTitle>
      {favoriteArtPieces.length > 0 ? (
        <ul>
          {favoriteArtPieces.map((art) => (
            <li key={art.slug}>
              <img src={art.imageSource} alt={art.name} width="100" />
              <p>
                {art.name} by {art.artist}
              </p>
              <FavoriteButton
                isFavorite={favorites.includes(art.slug)}
                onToggle={() => onToggleFavorite(art.slug)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite art pieces yet.</p>
      )}
    </div>
  );
}
