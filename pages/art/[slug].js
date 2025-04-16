// pages/art/[slug].js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPiecePage() {
  const [artPiece, setArtPiece] = useState(null);
  const router = useRouter();
  const { slug } = router.query; // Get the `slug` from the URL

  useEffect(() => {
    async function fetchArtPiece() {
      if (slug) {
        try {
          const res = await fetch(`https://example-apis.vercel.app/api/art`);
          const data = await res.json();
          const piece = data.find((item) => item.slug === slug);
          setArtPiece(piece); // Set the art piece data
        } catch (error) {
          console.error("Error fetching art piece:", error);
        }
      }
    }

    fetchArtPiece();
  }, [slug]); // Fetch the art piece data whenever the slug changes

  return <ArtPieceDetails artPiece={artPiece} />;
}
