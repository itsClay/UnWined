import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultsList extends React.Component {
  constructor(props) {
    super(props)
  }
  // console.log('SRL users: ',users);
  // console.log('SRL wines: ',wines);

  render() {
    console.log('hello',this.props)
    return (
      <ul>
        <li className="search-title">Users</li>
        {
          this.props.users ?
            this.props.users.map(user => (
              <li
                key={`user-${user.id}`}
                className="search-list-item"
              >{user.username}</li>
            )) :
            <li>Loading...</li>
        }
        <li className="search-title">Wines</li>
        {
          this.props.wines ?
            this.props.wines.map(wine => (
              <li
                key={`wine-${wine.id}`}
                className="search-list-item"
              >{wine.wine_type}</li>
            )) :
            <li>Loading...</li>
        }
      </ul>

    )
  }
}

export default SearchResultsList;