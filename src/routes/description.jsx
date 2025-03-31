import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Description = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      });
  }, [id]);

  return (
    <>
      <h1>Description</h1>

      <div className="description-wrapper">
        <img src={book.image} alt={book.title} className="description-image" />

        <div className="description-text">
          <h2>{book.title}</h2>
          <p>{book.description}</p>
        </div>
      </div>
    </>
  );
};
