import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const param = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <h3>{props.products[param.productId - 1].title}</h3>
      <img src={props.products[param.productId - 1].image} />
      <p>{props.products[param.productId - 1].description}</p>
      <p>{props.products[param.productId - 1].price}</p>
    </>
  );
};

export default ProductDetails;
