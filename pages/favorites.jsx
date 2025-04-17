import { useState, useEffect } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import styled from "styled-components";

export default function FavoritesPage({ favorites, onToggleFavorite }) {
  const [
    allArt /*hold all art p from api */,
    setAllArt /*function to update state */,
  ] = useState([]);

  useEffect(() => {
    async function fetchArtPieces() {
      // first argument, function to to fetch, async allows to use await
      try {
        //code attempt to do smth
        const res = await fetch("https://example-apis.vercel.app/api/art");
        const data = await res.json(); //to read and convert into raw data, returns a promise
        setAllArt(data); //updates the state with art p returned from api
      } catch (error) {
        console.error("Failed to fetch art pieces:", error);
      }
    }

    fetchArtPieces(); //updates the component's state with that data
  }, []); //second argument, effect will run only once when component is first rendered

  const favoriteArtPieces = allArt.filter(
    (
      art //filter through all art array, to return only faves
    ) => favorites.includes(art.slug) // include checks if certain value exists
  );

  const CenteredTitle = styled.h1`
    text-align: center;
  `;

  return (
    <div>
      <CenteredTitle>Art Gallery</CenteredTitle>
      {favoriteArtPieces.length > 0 ? ( //check if there are  fave  art p in the favoriteArtPieces array
        <ul>
          {favoriteArtPieces.map((art) => (
            /*slug used as qniq identifyer*/ <li key={art.slug}>
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
