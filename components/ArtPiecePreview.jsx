import React from "react";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ArtPiecePreview({
  slug, //uniq id used in the url for detail page
  imageSource, //url of artwork
  name,
  artist,
  onToggleFavorite,
  isFavorite, //boolean> is this already fave?
}) {
  const router = useRouter();

  // // Handle clicking on the art name to navigate to details
  // const handleArtNameClick = (event) => {
  //   event.stopPropagation(); // Prevent event bubbling when clicking on the name
  //   router.push(`/art/${slug}`); // Navigate to the dynamic art piece detail page
  // };

  // Handlefavorite button (preventing navigation)
  const handleFavoriteButtonClick = (event) => {
    event.stopPropagation(); // prevent the heart button click from doing anything else
    onToggleFavorite(slug); // when click the heart, it calls that function, passing in the art p slug (ID)
  };

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "500px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
      onClick={(e) => e.stopPropagation()} // prevent clicks on the card from navigating to details
    >
      <div style={{ position: "relative" }}>
        {" "}
        {/* fve button */}
        <img
          src={imageSource}
          alt={name}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            zIndex: 1,
          }}
        >
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={(e) => handleFavoriteButtonClick(e)} // Prevent event bubbling for favorite button
          />
        </div>
      </div>

      {/* Clickable Art Name */}
      <h3 style={{ cursor: "pointer" }}>
        <Link href={`/art/${slug}`} passHref>
          <span style={{ textDecoration: "underline", color: "blue" }}>
            {name}
          </span>
        </Link>
      </h3>
      <p>
        <strong>{artist}</strong>
      </p>
    </div>
  );
}
