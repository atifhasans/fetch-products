import React from 'react';


const Cards = ({ title, price, imageUrl, location, date, link }) => {
  return (
    <article className="listing-card">
      <div className="image-container">
        <a href={link} title={title}>
          <img
            src={imageUrl}
            alt={title}
            className="thumbnail"
            style={{ height: '250px', objectFit: 'cover' }}
          />
        </a>
      </div>
      <div className="details">
        <a href={link} title={title}>
          <div className="title">
            <p>{title}</p>
          </div>
        </a>
        <div className="price">
          <span>{price}</span>
        </div>
        
      </div>
    </article>
  );
};

export default Cards;
