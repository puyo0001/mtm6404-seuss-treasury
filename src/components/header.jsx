import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="main-nav">
      <img src="/hat.png" alt="logo" className="logo" />
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/books">Books</a>
        </li>
        <li>
          <a href="/quotes">Quotes</a>
        </li>
      </ul>
    </nav>
  );
};
