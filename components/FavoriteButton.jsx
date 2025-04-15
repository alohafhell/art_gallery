import React from "react";
import { Heart, HeartOff } from "lucide-react"; // Import the heart icons from Lucide React

export default function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        padding: "10px",
        cursor: "pointer",
        background: "transparent",
        border: "none", // Remove the border for a cleaner button
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0", // Ensure no unwanted margin
      }}
    >
      {/* Use the Lucide Heart or HeartOff icons based on the favorite state */}
      <Heart
        color={isFavorite ? "red" : "gray"} // Red when favorited, gray for unfilled
        fill={isFavorite ? "red" : "none"} // Fill with red if favorite, otherwise no fill
        size={24}
      />
    </button>
  );
}
