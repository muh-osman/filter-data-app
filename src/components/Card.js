import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="col-4">
      <div className="card">
        <img src={props.product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text">
            {props.product.description}
          </p>
          <Link to={'product/' + props.product.id} className="btn btn-primary">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
