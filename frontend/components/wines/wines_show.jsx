import React from 'react';
import { Link , Route, withRouter } from 'react-router-dom';
import CheckinsIndexItem from '../checkins/checkins_index_item';

class WinesShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //..
    };
    // console.log(this.props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchWine(this.props.match.params.wineId);
    console.log("my props in show", this.props);
  }

  // leaving functionality in for future use - currently
  // users cannot delete wines.
  handleDelete() {
    this.props.deleteWine(this.props.match.params.wineId);
  }

  addDefaultSrc(e) {
    e.target.src = 'http://res.cloudinary.com/do2rg2v7p/image/upload/v1506207089/default_glass_vehnqt.jpg';
  }

  render(){
    const wine = this.props.wine || { vineyard: "",
                 wine_type: "",
                 location: "",
                 year: 2017,
                 checkins: [],
                 img_url: "",
               };
    const checkins = Object.keys(this.props.checkins).map(
      (checkinKey) => this.props.checkins[checkinKey]
    );
    console.log(checkins);

    console.log("my wine in render", this.props);
    return(
      <div className="wines-container">
        <div className="wine-idx-container">
          <div className="wine-show">
            <div className="wine-show-header">
              <span>{wine.vineyard}</span>
              <span>{wine.wine_type}</span>
            </div>
            <div className="wine-show-body">
              <div className="wine-item-img">
                <img
                  onError={this.addDefaultSrc}
                  src={wine.img_url}
                  alt={wine.wine_type}></img>
              </div>
              <div className="wine-item-details">
                <span>{wine.location}</span>
                <span>{wine.year}</span>
              </div>
              <Link to={`/wines/${wine.id}/edit`}>
                <div className="input-btn">
                  <button>Edit Wine</button>
                </div>
              </Link>
            </div>
            <div className="checkins wine-show-header">
              <h1>Checkins Go Here... </h1>
            </div>
            <div className="checkin-index">
              <ul>
                {
                  checkins.map( checkin => (
                    <CheckinsIndexItem checkin={checkin} />
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(WinesShow);
