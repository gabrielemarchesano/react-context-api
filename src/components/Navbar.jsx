import { useContext } from "react"
import { Link, NavLink } from "react-router-dom";
import BudgetContext from "../context/BudgetContext";

export default function Navbar() {

  const linkItems = [
    {
      id: 1,
      path: "/",
      body: "Home"
    },
    {
      id: 2,
      path: "/about",
      body: "About Us"
    },
    {
      id: 3,
      path: "/products",
      body: "Products"
    }
  ]

  const { budgetMode, setBudgetMode } = useContext(BudgetContext) 

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid px-5">
          <Link className="navbar-brand text-white" to="/"><i className="bi bi-bullseye fs-1"></i></Link>
          <div className="items">
            <ul className="navbar-nav flex-row gap-4">
              {
                linkItems.map((item) => (
                  <li className="nav-item" key={item.id}>
                    <NavLink className="nav-link link text-white" aria-current="page" to={item.path}>{item.body}</NavLink>
                  </li>
                ))
              }
              <li className="nav-item">
                <button type="button" className="btn btn-dark">Modalità Budget</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}