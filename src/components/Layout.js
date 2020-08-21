import React from "react";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
}

export default Layout;
