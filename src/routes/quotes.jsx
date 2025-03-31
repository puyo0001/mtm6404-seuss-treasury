import { useState, useEffect } from "react";

export const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/quotes/random/10")
      .then((response) => response.json())
      .then((json) => {
        setQuotes(json);
      });
  }, []);
  console.log(Quotes);

  return (
    <>
      <div className="quotes-wrapper">
        <h1>Quotes</h1>

        {quotes.map((q) => (
          <div key={q.id} className="quote-card">
            <p className="quote-text">“{q.text}”</p>
            <p className="quote-author">- Dr. Seuss in "{q.book.title}"</p>
          </div>
        ))}
      </div>
    </>
  );
};
