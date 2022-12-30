import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Products = (props) => {


  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>

      <div className="container">
        <div className="row">{props.store}</div>
      </div>
    </>
  );
};

export default Products;
