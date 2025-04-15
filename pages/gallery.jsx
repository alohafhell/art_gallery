import ArtGallery from "../components/ArtGallery";

export default function GalleryPage({ favorites, onToggleFavorite }) {
  return (
    <div>
      <h1>Gallery</h1>
      <ArtGallery favorites={favorites} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
