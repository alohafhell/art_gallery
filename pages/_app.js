// app is boss of the the app, wraps every page

import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({
  Component,
  pageProps, //object in Next.js. It holds all the props (or data) that a specific page might need
}) {
  const [favorites, setFavorites] = useState([]);
  //where  fave items live, fave is data, set fave function to update data

  function toggleFavorite(slug) {
    //function handles adding or removing an item
    setFavorites((prevFavorites) =>
      prevFavorites.includes(slug)
        ? prevFavorites.filter((item) => item !== slug)
        : [...prevFavorites, slug]
    ); //if slug in faves, remove it, if not-add
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component //any page is being shown now
          {...pageProps} //
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </Layout>
    </>
  );
}
