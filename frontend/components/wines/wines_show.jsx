import React from 'react';
import { Link , Route, withRouter } from 'react-router-dom';

class WinesShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //..
    };
    console.log(this.props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchWine(this.props.match.params.wineId);
  }

  // leaving functionality in for future use - currently
  // users cannot delete wines.
  handleDelete() {
    this.props.deleteWine(this.props.match.params.wineId);
  }

  render(){
    const wine = this.props.wines[this.props.match.params.wineId];
    console.log(wine);
    return(
      <div className="wine-show">
        <div className="wine-thumbnail">
          <img src={wine.img_url} alt={wine.wine_type}></img>
        </div>
          <span>Type: {wine.wine_type}</span>
          <span>Vineyard: {wine.vineyard}</span>
          <span>Location: {wine.location}</span>
          <span>Year: {wine.year}</span>

          <Link to={`/wines/${wine.id}/edit`}><button>Edit Wine</button></Link>
      </div>
    );
  }
}

export default withRouter(WinesShow);
