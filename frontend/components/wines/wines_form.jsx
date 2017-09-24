import React from 'react';
import { Link } from 'react-router-dom';

class WinesForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.wine;
  }

  componentDidMount() {
    const WINE_ID = this.props.match.params.wineId;
    if (WINE_ID) {
      this.props.fetchWine(WINE_ID);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.wine);
  }

  update(field) {
    console.log(this.state);
    return (e) => {
      this.setState( { [field]: e.target.value } );
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.action(this.state).then(
      () => this.props.history.push(`/wines/${this.props.wine.id}`)
    );
  }

  render () {
    console.log(this.props.match);
    const formTitle = this.props.formType === 'new' ? 'Create Wine' : 'Edit Wine';
    return(
      <div className="wines-container">
        <div className="wine-idx-container">
          <div className="wine-form">
            <div className="wine-show-header">{ formTitle }</div>

            <div className="form-wrapper">
              <form onSubmit={this.handleSubmit}>
                <div className="input-row">
                  <label>Type</label>
                    <input
                      type="text"
                      value={this.state.wine_type}
                      onChange={this.update('wine_type')}/>
                </div>
                <div className="input-row">
                  <label>Vineyard</label>
                    <input
                      type="text"
                      value={this.state.vineyard}
                      onChange={this.update('vineyard')}/>
                </div>
                <div className="input-row">
                  <label>Location</label>
                    <input
                      type="text"
                      value={this.state.location}
                      onChange={this.update('location')}/>
                </div>
                <div className="input-row">
                  <label>Year</label>
                    <input
                      type="number"
                      value={this.state.year}
                      onChange={this.update('year')}/>
                </div>
                <div className="input-row">
                  <label>Image Url</label>
                    <input
                      type="text"
                      value={this.state.img_url}
                      onChange={this.update('img_url')}/>
                </div>

                <div className="form-submit-wrapper">
                  <button
                    className="wine-form-btn"
                    type="submit"
                  >{formTitle}</button>
                  <Link to="/wines"><button>Back</button></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WinesForm;
