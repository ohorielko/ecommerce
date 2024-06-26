import TopBar from "./common/TopBar";
import "./css/style.css"
import "./css/bootstrap.min.css";
import Header from "./common/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, Shop, Cart} from "./pages";
import Footer from "./common/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
