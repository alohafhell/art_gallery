import React from "react";
import { Heart } from "lucide-react"; // Import the heart icons from Lucide React

export default function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%", // 👈 Makes it circular
        backgroundColor: "#fff", // 👈 White background
        border: "1px solid #ccc", // 👈 Optional border for contrast
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // 👈 Soft shadow
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
        cursor: "pointer", //ve it a higher stacking context than the nav
      }}
    >
      <Heart
        color={isFavorite ? "red" : "gray"} // Red when favorited, gray for unfilled
        fill={isFavorite ? "red" : "none"} // Fill with red if favorite, otherwise no fill
        size={24}
      />
    </button>
  );
}
