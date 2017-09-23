import React from 'react';
import { Link } from 'react-router-dom';

const WinesIndexItem = ({ wine }) => (
  <div className="wine-index-item">
    <Link to={`/wines/${wine.id}`}>
      <img src={wine.img_url} alt={wine.wine_type}></img>
      <span>{wine.wine_type}</span>
      <span>{wine.vineyard}</span>
      <span>{wine.location}</span>
      <span>{wine.year}</span>
    </Link>
  </div>
);

export default WinesIndexItem;
