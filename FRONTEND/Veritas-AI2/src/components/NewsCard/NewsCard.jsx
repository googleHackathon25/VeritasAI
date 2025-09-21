import React from 'react';
import './NewsCard.css';

function NewsCard({ image, title, description }) {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default NewsCard;