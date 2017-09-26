import React from 'react';
import { Link } from 'react-router-dom';

const CheckinsIndexItem = ({ checkin }) => {

  return (
    <div>
      <li>{checkin.user.username}</li>
      <li>{checkin.rating}</li>
      <li>{checkin.comment}</li>
    </div>
  );

};

export default CheckinsIndexItem;
