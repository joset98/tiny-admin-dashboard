import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import UserList from "./pages/user/UserList";
import User from "./pages/user";
import NewUser from "./pages/user/NewUser";
import ProductList from "./pages/product/ProductList";
import Product from "./pages/product";
import NewProduct from "./pages/product/NewProduct";
import Sidebar from './layout/Sidebar/Sidebar'
import Topbar from "./layout/Topbar/Topbar";
import "./App.css";

// https://github.com/EJINEROZ/dashboard

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
