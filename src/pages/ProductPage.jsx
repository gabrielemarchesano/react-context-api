import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function ProductPage(){

  const { id } = useParams();
  const [ product, setProduct ] = useState([]);

  function fetchData(){
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response => {
      console.log(response.data)
      setProduct(response.data)
    })
  }

  useEffect(fetchData, []);

  return(
    <>
      <div className="container d-flex justify-content-center">
        <div className="card flex-row justify-content-evenly product-card">
            <div className="d-flex justify-content-center align-items-center px-4 image-container">
              <img src={product.image} className="product-image" />
            </div>
            <div>
              <div className="single-card-body card-body text-start">
                <p><span className="bold">Category:</span> {product.category}</p>
                <label className="bold">Description:</label>
                <p>{product.description}</p>
                <p><span className="bold">Rates:</span> {product.rating ? product.rating.rate : null}</p>
                <p><span className="bold">Remaining:</span> {product.rating ? product.rating.count : null} piecies</p>
              </div>
            </div>

        </div>
      </div>
        <div className="mt-2">
          <Link to="/products" type="button" className="btn btn-dark me-2">Back</Link>
          <a href={`/products/${Number(id) <= 20 ? Number(id) + 1 : alert("Product not found")}`} type="button" className="btn btn-dark">Next</a>
        </div>
    </>
  )
}