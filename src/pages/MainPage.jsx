import { Link } from "react-router-dom";
import React from "react";
import gif from "../assets/welcome.gif";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 my-5">
      <h1>Sitemize Hoşgeldiniz!</h1>

      <img src={gif} alt="Welcome GIF" className="  w-50 rounded shadow" />

      <p>
        <Link to={"/ürünler"}>Ürünler Sayfasında</Link> Yeni çıkan bütün
        kitaplara ulaşabilirsiniz
      </p>
    </div>
  );
};

export default MainPage;
