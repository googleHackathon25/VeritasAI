import React from 'react';
// 1. Import the module and assign it to a variable (e.g., styles)
import styles from './sidebar.module.css';

const Sidebar = ({ categories, activeCategory, onCategoryClick }) => {
  return (
    // 2. Use the styles object to apply class names
    <aside className={styles.sidebar}>
      <div className={styles.sidebarSection}>
        <p className={styles.sidebarLabel}>Filter</p>
        <p className={styles.sidebarLabel}>Sort</p>
      </div>

      <div className={styles.sidebarSection}>
        <h4 className={styles.sidebarHeading}>Categories</h4>
        <ul className={styles.categoryList}>
          {categories.map((category) => (
            <li
              key={category}
              // 3. For multiple or conditional classes, use a template literal
              className={`${styles.categoryItem} ${
                category === activeCategory ? styles.active : ''
              }`}
              onClick={() => onCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;