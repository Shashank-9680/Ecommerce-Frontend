import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/component/ProductList";
import Footer from "../features/common/footer";

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
      <Footer></Footer>
      {/* <Link to="/admin">Admin</Link> */}
    </div>
  );
};

export default Home;
