import axios from "axios";
import React, { useEffect } from "react";
import Card from "../components/Card";

const ProductsPage = () => {
  const [books, setBooks] = React.useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3090/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mx-5 mt-4 h-100">
      <h3>{books?.length} Kitap bulundu</h3>

      <div className="card-container">
        {books?.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
