import React from 'react';
import { Link, withRoute } from 'react-router-dom';
import WinesIndexItem from './wines_index_item';
import WinesShowContainer from './wines_show_container';
import { ProtectedRoute } from '../../util/route_util';

class WinesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWines();
    console.log("did mount", this.props);
  }

  render() {
    let wines = this.props.wines;
    console.log(wines);

    return (
      <div>
        <h1>Wines Page</h1>
        <ul>
        {
          wines.map( wine => (
            <WinesIndexItem wine={wine} />
          ))
        }
        </ul>
      </div>
    );
  }
}

export default WinesIndex;
