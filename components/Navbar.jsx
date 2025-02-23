import { NavLink } from "react-router-dom";
import MyNavLinks from "../mynavlinks/MyNavLinks";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-brand" onClick={scrollToTop}>
          AD
        </NavLink>
        <MyNavLinks />
      </div>
    </nav>
  );
};

export default Navbar; 