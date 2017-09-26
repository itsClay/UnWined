import React from 'react';
import { Link } from 'react-router-dom';
import CheckinsFormContainer from '../checkins/checkins_form_container';

const WinesIndexItem = ({ wine }) => {

  const addDefaultSrc = (e) => {
    e.target.src = 'http://res.cloudinary.com/do2rg2v7p/image/upload/v1506207089/default_glass_vehnqt.jpg';
  };

  const style = {
    overlay : {
      position        : 'fixed',
      top             : 0,
      left            : 0,
      right           : 0,
      bottom          : 0,
      backgroundColor : 'rgba(255, 255, 255, 0.75)',
      zIndex          : 10
    },
    content : {
      position        : 'fixed',
      top             : '100px',
      left            : '150px',
      right           : '150px',
      bottom          : '100px',
      border          : '1px solid #ccc',
      padding         : '20px',
      zIndex          : 11
    }
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
        <CheckinsFormContainer formType="new" wine={ wine }/>
      </div>
    </div>
  );
};

export default WinesIndexItem;
