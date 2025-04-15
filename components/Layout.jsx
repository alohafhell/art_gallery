import Navigation from "./Navigation";

// This component wraps every page with shared layout (e.g. navigation)
export default function Layout({ children }) {
  return (
    <>
      <Navigation /> {/* Appears on all pages */}
      <main>{children}</main> {/* Page-specific content */}
    </>
  );
}
