import { Route, Routes, Link, NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div className="Header">
      <div>
        <img src="./vite.svg" alt="Logo" />
      </div>
        <div className="nav">
          <NavLink  to="/React_Task1/">
            Home
          </NavLink>
          <NavLink  to="/React_Task1/about">
            About
          </NavLink>
          <NavLink  to="/React_Task1/workExamples">
            Work examples
          </NavLink>
          <NavLink  to="/React_Task1/contact">
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