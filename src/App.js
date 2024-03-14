import { Routes, Route } from "react-router-dom"
import MasterLayout from './Components/Layout/MasterLayout';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Product from './Components/Pages/Product/Product';
import New from './Components/Pages/New/New';
import Contact from './Components/Pages/Contact/Contact';
import Login from "./Components/Pages/Login/Login";
import Cart from "./Components/Pages/Cart/Cart";
import Details from "./Components/Pages/Details/Details";
import Register from "./Components/Pages/Register/Register";
function App() {
  return (

    <div>
   
        <Routes>
          <Route path='/' element={<MasterLayout children={<Home />} />} />
          <Route path='/product' element={<MasterLayout children={<Product />} />} />
          <Route path='/new' element={<MasterLayout children={<New />} />} />
          <Route path='/about' element={<MasterLayout children={<About />} />} />
          <Route path='/contact' element={<MasterLayout children={<Contact />} />} />
          <Route path='/login' element={<MasterLayout children={<Login />} />} />
          <Route path='/register' element={<MasterLayout children={<Register />} />} />
          <Route path='/cart' element={<MasterLayout children={<Cart />} />} />
          <Route path='/details/:id' element={<MasterLayout children={<Details />} />} />
        </Routes>
    </div>

  );
}

export default App;