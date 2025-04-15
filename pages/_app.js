// pages/_app.js
import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(slug) {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(slug)
        ? prevFavorites.filter((item) => item !== slug)
        : [...prevFavorites, slug]
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </Layout>
    </>
  );
}
