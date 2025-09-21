// src/components/ArticleCard/ArticleCard.js
import React from 'react';
import styles from './ArticleCard.module.css';

const ArticleCard = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ArticleCard;