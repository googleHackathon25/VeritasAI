import React from 'react';
// Import NavLink to handle navigation and active styles
import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';

const NavMenu = () => {
  // This function checks if a link is active and applies the 'active' class
  const getLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  return (
    <nav>
      {/* Link to the HomePage, path is "/" */}
      <NavLink to="/" className={getLinkClass}>
        Home page
      </NavLink>

      {/* Link to the CategoriesPage, path is "/categories" */}
      <NavLink to="/categories" className={getLinkClass}>
        Categories
      </NavLink>
      
      {/* Example links for other pages */}
      <NavLink to="/about" className={getLinkClass}>
        About us
      </NavLink>
      
      {/* MODIFICATION: Changed the path to "/#our-team" */}
      <NavLink to="/#our-team" className={getLinkClass}>
        Our Team
      </NavLink>
    </nav>
  );
};

export default NavMenu;