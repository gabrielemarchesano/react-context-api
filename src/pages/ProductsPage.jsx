import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BudgetContext from "../context/BudgetContext";

export default function ProductsPage() {

  const productsEndpoint = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);

  const {budgetMode} = useContext(BudgetContext);
  /* console.log(budgetMode); */

  useEffect(() => {
    axios
      .get(productsEndpoint)
      .then(response => {
        /* console.log(response.data); */
        setProducts(response.data);
        setData(response.data);
      })
  }, [])

  useEffect(() => {
    if(budgetMode){
      const filtered = data.filter((obj) => {
        return obj.price <= 30;
      })
      setProducts(filtered);
    }else{
      setProducts(data);
    }
  }, [budgetMode])

  return (
    <>
      <ul className="p-0 text-start">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 py-4 row-gap-4">
          {
            products.map((product) => (
              <li className="list-unstyled" key={product.id}>
                <Link to={`/products/${product.id}`} className="text-decoration-none">
                <div className="card">
                  <div className="card-header d-flex p-0 align-items-center rounded">
                    <div className="px-3 py-4">
                      <img src={product.image} alt="" className="card-img-top product-image" />
                    </div>
                    <div className="card-title p-3">
                      <h5>{product.title}</h5>
                      <small><span className="bold">Price:</span> {product.price}$</small>
                    </div>
                  </div>
                  {/* <div className="card-body">
                    <p><span className="bold">Category:</span> {product.category}</p>
                    <label htmlFor="" className="bold">Description:</label>
                    <p>{product.description}</p>
                    <p><span className="bold">Rates:</span> {product.rating.rate}</p>
                    <p><span className="bold">Remaining:</span> {product.rating.count} piecies</p>
                    </div> */}
                </div>
              </Link>
              </li>
            ))
          }
        </div>
      </ul>
    </>
  )
}