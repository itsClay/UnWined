import React from 'react';
import { Link, withRoute } from 'react-router-dom';
import WinesIndexItem from './wines_index_item';
import WinesShowContainer from './wines_show_container';
import { ProtectedRoute } from '../../util/route_util';

class WinesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.updateWineSearch = this.updateWineSearch.bind(this)
  }

  componentDidMount() {
    this.props.fetchWines();
  }

  updateWineSearch(e) {
    e.preventDefault()
    this.setState({search: e.target.value})
    console.log(e.target.value)
  }

  render() {
    // let filteredWines = this.props.wines;

    const wines = this.props.wines.filter(
      (wine) => {
        if (wine.vineyard.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || 
          wine.wine_type.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
            return wine;
          }
      }
    );
    return (
      <div className="wines-container">

        <div className="wine-idx-container">
          <div className="wine-idx-header">
            <span>Wines</span>
            <div className="wine-search">
              <input type="text" 
                value={this.state.search} 
                onChange={this.updateWineSearch}
                placeholder='Search Wines...'
              />
            </div>
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
