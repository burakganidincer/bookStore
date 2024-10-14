import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div className="d-flex align-items-center gap-4 p-4">
      <aside className="d-flex flex-column bg-white gap-4 p-5 rounded-4">
        <NavLink to={"/kategori/hikaye"}>●Hikaye </NavLink>
        <NavLink to={"/kategori/roman"}>●Roman</NavLink>
        <NavLink to={"/kategori/şiir"}>●Şiir</NavLink>
      </aside>

      {/*
       * ASIL SAYFA İÇERİĞİ
       * Alt route'un kapsayıcı route içerisnde
       * hangi noktada ekrana basılıcağını belirler
       */}
      <Outlet />
    </div>
  );
};

export default CategoryPage;
