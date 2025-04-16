// pages/index.js

import Spotlight from "../components/Spotlight";
import Navigation from "../components/Navigation"; // Import the Navigation component
import styled from "styled-components";

const CenteredTitle = styled.h1`
  text-align: center;
`;

export default function HomePage() {
  return (
    <div>
      <CenteredTitle>Spotlight</CenteredTitle> {/* Title */}
      <Spotlight /> {/* Spotlight section */}
      <Navigation currentPage="spotlight" />{" "}
      {/* Navigation with "Spotlight" highlighted */}
    </div>
  );
}
