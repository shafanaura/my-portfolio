import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../atoms/Button";
import "./styles.scss";

export const Navbar = () => {
  const [navOnShrink, setNavOnShrink] = useState(null);

  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        setNavOnShrink("smaller-nav");
      } else {
        setNavOnShrink(null);
      }
    };
  }, []);

  return (
    <nav className="navbar">
      <NavLink to="/" className="header-title">
        Shafa
      </NavLink>
      <div style={{ padding: "15px 60px" }}>
        <NavLink
          exact
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/dawd"
        >
          About Me
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/dawddd"
        >
          Projects
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/dwad"
        >
          Services
        </NavLink>
        <Button right>Sign Up</Button>
      </div>
    </nav>
  );
};
