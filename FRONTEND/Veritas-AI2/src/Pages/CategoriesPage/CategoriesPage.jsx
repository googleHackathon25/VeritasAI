import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './CategoriesPage.module.css';

// Data for news cards remains the same
const newsData = [
  { id: 1, image: 'https://picsum.photos/seed/gold/600/400', title: 'Gold keeps hitting record after record. Is it time to think about selling?', description: 'It\'s been a dazzling week for gold. Why one firm says there\'s more room for the rally to run.' },
  { id: 2, image: 'https://picsum.photos/seed/market/600/400', title: 'Stock market\'s relentless rally threatens to turn into a \'melt-up\'', description: 'Yes, stock valuations are high. This Wall Street veteran outlines 4 scenarios that could keep the rally going anyway.' },
  { id: 3, image: 'https://picsum.photos/seed/housing/600/400', title: 'As mortgage rates see ‘the largest weekly drop in the past year,’ here are the 10 housing markets with the highest share of homes with price cuts', description: '' },
  { id: 4, image: 'https://picsum.photos/seed/statue/600/400', title: '', description: '' },
  { id: 5, image: 'https://picsum.photos/seed/london/600/400', title: '', description: '' },
  { id: 6, image: 'https://picsum.photos/seed/wallst/600/400', title: '', description: '' },
];

const CategoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState('Stock Exchange');
  const categories = [
    'All (6)',
    'Technology',
    'Stock Exchange',
    'Sports',
    'Archaeology',
    'Space',
    'World Economics',
  ];

  return (
    <div className={styles.categoriesPageContainer}>
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={setActiveCategory}
      />
      <main className={styles.contentArea}>
        {/* --- TITLE ADDED HERE --- */}
        <h2 className={styles.pageTitle}>{activeCategory}</h2>

        <div className={styles.newsGrid}>
          {newsData.map((newsItem) => (
            <div className={styles.newsCard} key={newsItem.id}>
              <img src={newsItem.image} alt={newsItem.title || `News item ${newsItem.id}`} className={styles.newsCardImage} />
              <div className={styles.newsCardContent}>
                {newsItem.title && <h3>{newsItem.title}</h3>}
                {newsItem.description && <p>{newsItem.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoriesPage;