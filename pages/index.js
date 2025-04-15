import Spotlight from "../components/Spotlight"; // Import spotlight component
import ArtGallery from "../components/ArtGallery";

export default function HomePage() {
  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight /> {/* ✅ Show the spotlight section */}
      <ArtGallery /> {/* ✅ Show the full gallery below it */}
    </div>
  );
}
