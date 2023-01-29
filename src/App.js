import logo from './logo.svg';
import './App.css';
// import Home from './home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Gallery from './Gallery'



function App() {
  return (
    <div className="App">

<Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/gallery" element={ <Gallery/> } />
      </Routes>    </div>
  );
}

export default App;
