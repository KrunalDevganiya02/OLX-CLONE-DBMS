// ViewProduct.js
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "../style/viewproduct.css";

function ViewProduct(props) {
  //   const { id } = props.match.params;
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/view/${path}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {product && (
        <div className="view-container">
          <div className="view-photo">
            <img
              width="400px"
              height="400px"
              src={`http://localhost:8000/uploads/${product[0].cover}`}
              alt="Product Cover"
            />
          </div>
          <div className="view-info">
            <p>
              Product name : <span>{product[0].Name}</span>
              <br />
            </p>
            <p>
              Product Description : <span>{product[0].Description}</span>
              <br />
            </p>
            <p>
              Product Price : <span>{product[0].Price}</span>
              <br />
            </p>
            <p>
              Product Category : <span>{product[0].Category}</span>
              <br />
            </p>
            <p>
              Product Manufacture Year : <span>{product[0].year}</span>
              <br />
            </p>
            <p>
              Product Condition : <span>{product[0].condition}</span>
              <br />
            </p>
            <p>
              product colour : <span>{product[0].color}</span>
              <br />
            </p>
            <p>
              More Information : <span>{product[0].more}</span>
              <br />
            </p>
            <Link to={`/buy/${product[0].ID}`}>
              <button>Buy</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewProduct;
