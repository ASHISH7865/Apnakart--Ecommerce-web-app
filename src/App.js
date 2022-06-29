import Header from "./Components/Header";

import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePageComponents from "./Components/HomePageComponents";
import ProductsContainer from "./Components/ProductsContainer";
import ProductDetail from "./Components/ProductDetail";
import { Toaster } from "react-hot-toast";
import CartPage from "./Components/CartPage";

function App() {
  return (
    <div className="App ">
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<HomePageComponents />} />
        <Route path="/products" element={<ProductsContainer limit={100} />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
