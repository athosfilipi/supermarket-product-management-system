import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ProductCreatePage from "@pages/Product/ProductCreatePage/ProductCreatePage";
import ProductListPage from "@pages/Product/ProductListPage/ProductListPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/product/create" element={<ProductCreatePage />} />
      <Route path="/product/list" element={<ProductListPage />} />
      {/* <Route path="/product/edit/:id" element={<ProductEditPage />} /> */}
      {/* <Route path="/product/view/:id" element={<ProductViewPage />} /> */}
      {/* <Route path="/brand/create" element={<BrandCreatePage />} /> */}
      {/* <Route path="/brand/list" element={<BrandListPage />} /> */}
      {/* <Route path="/brand/edit/:id" element={<BrandEditPage />} /> */}
    </Routes>
  );
}
