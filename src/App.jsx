import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutUsPage from "./pages/AboutUsPage"
import ProductsPage from "./pages/ProductsPage"
import DefaultLayout from "./layouts/DefaultLayout"
import ProductPage from "./pages/ProductPage"
import BudgetContext from "./context/BudgetContext"
import { useState } from "react"


function App() {
  
  const [ budgetMode, setBudgetMode ] = useState(false);

  return (
    <>
      <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route  path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductPage />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetContext.Provider>
    </>
  )
}

export default App
