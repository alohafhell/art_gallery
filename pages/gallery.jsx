import ArtGallery from "../components/ArtGallery";
import styled from "styled-components";

const CenteredTitle = styled.h1`
  text-align: center;
`;

export default function GalleryPage({ favorites, onToggleFavorite }) {
  return (
    <div>
      <CenteredTitle>Gallery</CenteredTitle>
      <ArtGallery favorites={favorites} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}

//props from appjs
//defining the Gallery page component
