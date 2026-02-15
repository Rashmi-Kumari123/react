import { Route, Routes } from "react-router-dom";
import "./App.css";

import { MovieList } from "./components/MovieList";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import ProductList from "./components/Product/ProductList";
import { useEffect } from "react";

const title = "Sports Movie List";
function App() {
  useEffect(()=>{
    console.log("inside useEffect")
  })
  console.log("first line");
  console.log("second line");
  return (
    <div >
      <Navbar/>
      {/* <MovieList title = {title}/> */}
      {/* <MovieList title = {"Action Movie List"}/> */}
      {/* <login/> */}
      <div className="p-20">
        <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
      </div>  
    </div>
  );
}
export default App;
