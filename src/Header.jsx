import { Route, Routes, Link, NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div className="Header">
      <div>
        <img src="./vite.svg" alt="Logo" />
      </div>
        <div className="nav">
          <NavLink  to="/">
            Home
          </NavLink>
          <NavLink  to="/about">
            About
          </NavLink>
          <NavLink  to="/workExamples">
            Work examples
          </NavLink>
          <NavLink  to="/contact">
            Contact
          </NavLink>
        </div>
      <div className="search-section">
        <input type="text" />
        <button>Search</button>
      </div>
    </div>
  );
}