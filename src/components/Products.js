import React, { useState, useEffect } from "react";
const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/phones")
      .then((res) => res.json())
      .then(({ phones }) => {
        setProducts(phones);
      }); 
  }, []);

  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-6 bg-info" key={product.id}>
          <div className="container alert alert-success text-center mt-4 pt-4">
            <a
              href={`product.id`}
              onClick={() => props.handleAddToChar(product)}
            >
              <img width="180px" height="180px" src={`/phones/${product.id}.jpg`} alt={product.title} />
            </a> 

            <p>{product.title}</p>

            <div>
              <b>{product.price} $</b>
              <br />
              <button
                className="btn btn-primary"
                onClick={() => props.handleAddToChar(product)}
              >
                Characteristics{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Products;
