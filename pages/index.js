import Spotlight from "../components/Spotlight";
import Navigation from "../components/Navigation";
import styled from "styled-components";

const CenteredTitle = styled.h1`
  text-align: center;
`;

export default function HomePage({ favorites, onToggleFavorite }) {
  //two props, list of fave items and function letting to add
  return (
    <div>
      <CenteredTitle>Spotlight</CenteredTitle>
      <Spotlight favorites={favorites} onToggleFavorite={onToggleFavorite} />
      <Navigation currentPage="spotlight" />
    </div>
  );
}

//props for passing them down to spotlight comp for it to know what items are fave and possible highlight them
