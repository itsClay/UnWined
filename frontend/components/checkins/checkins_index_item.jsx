import React from "react";
import { Link } from "react-router-dom";

const CheckinsIndexItem = ({ checkin }) => {
  return (
    <div className="item">
      <h1>
        {checkin.user.username} had the {checkin.wine.wine_type}
      </h1>
      <div className="checkin-comment">{checkin.rating} {checkin.comment}</div>
    </div>
  );
};

export default CheckinsIndexItem;
