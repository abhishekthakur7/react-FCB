import React from "react";
import Header from "../Components/header/header.component";
import Footer from "../Components/footer/footer.component";

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
