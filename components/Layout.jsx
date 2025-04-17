import Navigation from "./Navigation";
import styles from "@/styles";

//component wraps every page in your app, so that things like the navigation bar can appear consistently across all pages
const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Navigation /> {/* Always visible at the buttom */}
    </>
  );
};

export default Layout;
