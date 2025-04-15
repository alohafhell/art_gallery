import Spotlight from "../components/Spotlight";

export default function HomePage({ favorites, onToggleFavorite }) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight favorites={favorites} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
