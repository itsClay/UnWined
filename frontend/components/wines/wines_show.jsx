import React from 'react';
import { Route } from 'react-router-dom';

class WinesShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //..
    };
    console.log(this.props);
  }

  componentDidMount(){
    this.props.fetchWine(this.props.match.params.wineId);
  }

  render(){
    const wine = this.props.wines[this.props.match.params.wineId];
    return(
      <div className="wine-show">
        <div className="wine-thumbnail">
          <img src={wine.img_url} alt={wine.wine_type}></img>
        </div>
          <span>Type: {wine.wine_type}</span>
          <span>Vineyard: {wine.vineyard}</span>
          <span>Location: {wine.location}</span>
          <span>Year: {wine.year}</span>
      </div>
    );
  }
}

export default WinesShow;
