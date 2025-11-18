import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout(){
  return(
    <>
      <Header />
      <div className="container-fluid px-5 py-3 text-center">
        <Outlet />
      </div>
    </>
  )
}