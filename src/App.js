import "./App.css";
import { MovieList } from "./components/MovieList";

const title = "Comedy Movie List"
function App() {
  return (
    <div className="p-20">
      <MovieList title = {title}/>
      <MovieList title = {"Action Movie List"}/>
    </div>
  );
}
export default App;
