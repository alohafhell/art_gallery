import Navigation from "./Navigation"; // Import Navigation component

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navigation /> {/* Include the Navigation bar */}
      </header>
      <main>{children}</main>{" "}
      {/* Page-specific content will be rendered here */}
    </div>
  );
};

export default Layout;
