import React from 'react';
import { Link } from 'react-router-dom';

const WinesIndexItem = ({ wine }) => {

  const addDefaultSrc = (e) => {
    e.target.src = 'http://res.cloudinary.com/do2rg2v7p/image/upload/v1506207089/default_glass_vehnqt.jpg';
  };

  return (
    <div className="wine-index-item">

      <div className="wine-item-img">
        <img onError={addDefaultSrc} src={wine.img_url} alt={wine.wine_type}></img>
      </div>
      <div className="wine-item-details">
        <div className="wine-item-title">
          <Link to={`/wines/${wine.id}`}>
            <span>{wine.vineyard}</span>
            <span><i>{wine.wine_type}</i></span>
          </Link>
        </div>
        <div className="wine-item-detail">
          <span>{wine.location}</span>
          <span>{wine.year}</span>
        </div>
      </div>

      <div className="review input-btn">
        <button>Check-in</button>
      </div>
    </div>
  );
};

export default WinesIndexItem;
