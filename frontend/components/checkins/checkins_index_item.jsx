import React from "react";
import { Link } from "react-router-dom";

const CheckinsIndexItem = ({ checkin }) => {
  console.log(checkin);
  return (
    <div>
      <li>
        {checkin.user.username} had the {checkin.wine.wine_type}
      </li>
      <li>{checkin.rating}</li>
      <li>{checkin.comment}</li>
    </div>
  );
};

export default CheckinsIndexItem;
