import React, { useContext } from "react";
import CartContext from "./CartContext";
import { FaBagShopping } from "react-icons/fa6";

const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 15 },
  { id: 3, name: "Product C", price: 20 },
];

const ProductList = () => {
  const { dispatch } = useContext(CartContext);
  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <div className="mt-2">
      <h2>
        <FaBagShopping className="productlist-icon" />
        Products
      </h2>
      {products.map((product) => (
        <div className="card" style={{ width: "18rem" }} key={product.id}>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Price: {product.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default ProductList;
