import Spotlight from "../components/Spotlight";
import Navigation from "../components/Navigation";
import styled from "styled-components";

const CenteredTitle = styled.h1`
  text-align: center;
`;

export default function HomePage({ favorites, onToggleFavorite }) {
  return (
    <div>
      <CenteredTitle>Spotlight</CenteredTitle>
      <Spotlight favorites={favorites} onToggleFavorite={onToggleFavorite} />
      <Navigation currentPage="spotlight" />
    </div>
  );
}
