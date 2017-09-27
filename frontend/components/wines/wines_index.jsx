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
  }

  render() {
    const wines = this.props.wines;
    return (
      <div className="wines-container">

        <div className="wine-idx-container">
          <div className="wine-idx-header">
            <span>Wines</span>
            <Link to="/wines/new">
              <div className="input-btn light-purple">
                <button>Make a Wine</button>
              </div>
            </Link>
          </div>
          <div className="wine-idx-body">
            <ul>
              {
                wines.map( wine => (
                  <WinesIndexItem key={`wine-${wine.id}`} wine={wine} />
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default WinesIndex;
