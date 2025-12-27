import { Route, Routes } from "react-router-dom";
import "./App.css";

import { MovieList } from "./components/MovieList";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";

const title = "Sports Movie List";
function App() {
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
      </Routes>
      </div>
      
      
      
    </div>
  );
}
export default App;
