import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    // Go back to the previous page
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      style={{
        background: "none",
        border: "none",
        color: "black",
        fontSize: "16px",
        cursor: "pointer",
        textDecoration: "underline",
        position: "absolute",
        top: "20px",
        left: "20px",
      }}
    >
      ← Go Back
    </button>
  );
}
