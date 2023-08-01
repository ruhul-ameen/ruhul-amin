import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const items = (
    <>
      <li
        className={`text-lg border-none  $({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        `}>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li
        className={`text-lg border-none  $({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? "active" : ""
     `}>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </li>
      <li
        className={`text-lg border-none  $({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? "active" : ""
     `}>
        <NavLink to="/projects" activeClassName="active">
          Projects
        </NavLink>
      </li>
      <li
        className={`text-lg border-none  $({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? "active" : ""
     `}>
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
      </li>
      <li
        className={`text-lg border-none  $({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? "active" : ""
     `}>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-white py-4 px-6 sticky top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52">
              {items}
            </ul>
          </div>
          <Link
            to="/"
            className="btn bg-transparent border-none hover:bg-transparent normal-case text-2xl md:text-3xl lg:text-5xl relative pr-4 ">
            Ruhul
            <span
              className="bg-green-400 w-2 h-2 md:w-3 md:h-3 rounded-xl absolute bottom-4
            right-0 md:bottom-3 md:right-0"></span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/14p3xMlDOTgA4rym6tEfls93uvlBpTgxZ/view">
            <button className="button" type="button">
              <span className="button__text">RESUME</span>
              <span className="button__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  id="bdd05811-e15d-428c-bb53-8661459f9307"
                  data-name="Layer 2"
                  className="svg">
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
