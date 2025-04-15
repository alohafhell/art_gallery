import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPieceDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [artPiece, setArtPiece] = useState(null);

  useEffect(() => {
    async function fetchPiece() {
      const res = await fetch("https://example-apis.vercel.app/api/art");
      const data = await res.json();
      const found = data.find((piece) => piece.slug === slug);
      setArtPiece(found);
    }

    if (slug) fetchPiece(); // Only fetch if we have the slug
  }, [slug]);

  if (!artPiece) return <p>Loading...</p>;

  return <ArtPieceDetails piece={artPiece} />;
}
