import React from "react";
import ProductDetail from "../features/product-list/component/ProductDetails";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/common/footer";

const ProductDetailsPage = () => {
  return (
    <Navbar>
      <ProductDetail></ProductDetail>
      <Footer></Footer>
    </Navbar>
  );
};

export default ProductDetailsPage;
