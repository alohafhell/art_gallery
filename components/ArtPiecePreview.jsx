import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({
  slug,
  imageSource,
  name,
  artist,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <img src={imageSource} alt={name} width="150" />
      <p>
        <strong>{name}</strong> by {artist}
      </p>
      <FavoriteButton isFavorite={isFavorite} onToggle={onToggleFavorite} />
    </div>
  );
}
