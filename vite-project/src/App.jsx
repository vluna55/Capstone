import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import AllProduct from "./Components/AllProducts";
import { getAllProducts } from "./API";
import SingleProduct from "./Components/SingleProduct";
import Cart from "./Components/Cart";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      const userObj = JSON.stringify(user);
      localStorage.setItem("user", userObj);
      const carArr = JSON.stringify(cart);
      localStorage.setItem("cart", carArr);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
    }
  }, [token]);
  return (
    <>
      <Navbar token={token} setToken={setToken} />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <AllProduct products={products} cart={cart} setCart={setCart} />
            }
          />
          <Route
            path="/Login"
            element={
              <Login setToken={setToken} setUser={setUser} setCart={setCart} />
            }
          />
          <Route
            path="/products/:productId"
            element={<SingleProduct setCart={setCart} cart={cart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} products={products} setCart={setCart} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
