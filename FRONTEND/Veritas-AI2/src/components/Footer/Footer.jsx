import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* About Us Section */}
        <div className={styles.aboutSection}>
          <h2>About Us</h2>
          <p>
            Veritas AI is a platform dedicated to{' '}
            <span className={styles.highlight}>
              providing fact-checked, credible news content
            </span>{' '}
            and{' '}
            <span className={styles.highlight}>
              fighting misinformation across the digital world
            </span>
            .
          </p>
        </div>

        {/* Quick Links Section */}
        <div className={styles.linksSection}>
          <h3>Quick Links</h3>
          <ul>
            {/* 2. Replace <a> with <Link> and href with to */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className={styles.categoriesSection}>
          <h3>Categories</h3>
          <ul>
            {/* Also update these links if they need to be navigable */}
            <li><Link to="/category/technology">Technology</Link></li>
            <li><Link to="/category/stock-exchange">Stock Exchange</Link></li>
            <li><Link to="/category/space">Space</Link></li>
            <li><Link to="/category/world-economics">World Economics</Link></li>
            <li><Link to="/category/sports">Sports</Link></li>
            <li><Link to="/category/archaeology">Archaeology</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;