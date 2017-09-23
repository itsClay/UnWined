import React from 'react';

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
    return (e) => {
      this.setState( { [field]: e.target.value } );
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(
      () => this.props.history.push(
        `/wines/${this.props.match.params.wineId}`
      )
    );
  }

  render () {
    const formTitle = this.props.formType === 'new' ? 'Create Wine' : 'Edit Wine';
    return(
      <div className="wine-form">
        <h3>{ formTitle }</h3>
        <form onSubmit={this.handleSubmit}>
          <label> Type
            <input
              type="text"
              value="this.state.wine_type"
              onChange={this.update('wine_type')}/>
          </label>
          <label> Vineyard
            <input
              type="text"
              value="this.state.vineyard"
              onChange={this.update('vineyard')}/>
          </label>
          <label> Location
            <input
              type="text"
              value="this.state.location"
              onChange={this.update('location')}/>
          </label>
          <label> Year
            <input
              type="text"
              value="this.state.year"
              onChange={this.update('year')}/>
          </label>
          <label> Image Url
            <input
              type="text"
              value="this.state.img_url"
              onChange={this.update('img_url')}/>
          </label>
          <button className="wine-form-btn" type="submit"></button>
        </form>
      </div>
    );
  }
}
