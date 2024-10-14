import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const CategoryDetail = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3090/books?category=${category}`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        navigate("/404", { state: err.response.status });
      });
  }, [category, navigate]);

  return (
    <div>
      <h1 className="d-flex align-items-center justify-content-center my-5 gap-4">
        {category.toUpperCase()}
        <h2 className="mt-2">{books?.length} Kitap bulundu</h2>
      </h1>
      <div className="row gap-4">
        {/* Kitapları listeleyen Card bileşenini kullanın */}
        {books.map((book) => (
          <div className="col-md-2 col-sm-4" key={book.id}>
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetail;
