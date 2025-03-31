import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://seussology.info/api/books")
      .then((response) => response.json())
      .then((json) => {
        setBooks(json);
      });
  }, []);

  const onImgClickHandler = (bookId) => {
    navigate(`/description/${bookId}`);
  };

  return (
    <>
      <div className="banner-wrapper">
        <img src="/cat.jpg" alt="Cat Banner" className="banner-img" />
      </div>
      <div className="page-wrapper">
        <div className="books-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              {book.image && (
                <img
                  src={book.image}
                  className="book-cover"
                  onClick={() => onImgClickHandler(book.id)}
                />
              )}
              <h2 className="book-title">{book.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
