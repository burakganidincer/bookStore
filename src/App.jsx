import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import CategoryDetail from "./pages/CategoryDetail";

function App() {
  return (
    <div className="page">
      {/* Bütün sayfalar tarafından ortak olarak kullanılacak bileşnleri routes dışına yazarız */}
      <Header />

      <Routes>
        {/*
         * Route: Projedeki her sayfa için tanımlanır
         * Route'a yol ve o yol için ekrana basılcak bileşeni veririz
         */}
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage />} />

        {/* dinamik route */}
        <Route path="/ürün/:id" element={<ProductDetail />} />

        {/* nested routes > iç içe yollar */}
        {/* <Route path="/kategori" element={<CategoryPage />}>
            <Route path="hikaye" element={<h1>HİKAYE</h1>} />
            <Route path="roman" element={<h1>ROMAN</h1>} />
          </Route> */}
        <Route path="/kategori" element={<CategoryPage />} />
        <Route path="/kategori/:category" element={<CategoryDetail />} />
        <Route path="/kategori/:category:id" element={<CategoryDetail />} />

        {/* yanlış url girdiğimizde sayfa bulunamadı çıktısı */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
