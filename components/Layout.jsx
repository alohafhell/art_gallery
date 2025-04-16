import Navigation from "./Navigation";
import styles from "@/styles";
const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Navigation /> {/* Always visible */}
    </>
  );
};

export default Layout;
