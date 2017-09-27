import React from "react";
import Rating from 'react-rating';
import { Link } from "react-router-dom";

const CheckinsIndexItem = ({ checkin }) => {
  return (
    <div className="item">
      <h1>
        {checkin.user.username} had the <Link to={`/wines/${checkin.wine.id}`}>{checkin.wine.wine_type}</Link> by {checkin.wine.vineyard}
      </h1>
      <div className="checkin-comment">
        <div className="comment">
          {checkin.comment}
        </div>
        <Rating
          empty="fa fa-star-o fa-2x"
          full="fa fa-star fa-2x"
          initialRate={checkin.rating}
          readonly/>
      </div>
    </div>
  );
};

export default CheckinsIndexItem;
