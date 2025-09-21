import React, { useState, useEffect, useRef } from 'react';
// 1. IMPORT NavLink for routing
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// 2. REPLACE the old NavMenu with this new version that uses NavLink
const NavMenu = () => (
  <>
    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Home page</NavLink>
    <NavLink to="/categories" className={({ isActive }) => (isActive ? styles.active : '')}>Categories</NavLink>
    <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>About us</NavLink>
    <NavLink to="/team" className={({ isActive }) => (isActive ? styles.active : '')}>Our Team</NavLink>
  </>
);

const Header = () => {
  // All of your existing code for the sticky header is unchanged.
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > headerRef.current.offsetHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // All of your existing JSX structure is unchanged.
  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <span>Fact-checked. Trusted. Reliable.</span>
          <div>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
      
      <header className={styles.initialHeader} ref={headerRef}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>Veritas AI.</h1>
          <nav className={styles.nav}>
            <NavMenu />
          </nav>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </header>

      <div className={`${styles.stickyNavContainer} ${isSticky ? styles.visible : ''}`}>
        <nav className={styles.nav}>
          <NavMenu />
        </nav>
      </div>
    </>
  );
};

export default Header;