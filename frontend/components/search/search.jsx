import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      loading: null,
      search: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(search) {
    return (e) => {
      this.setState({ [search]: e.target.value })
    }
    
    // this.props.fetchSearch(this.state.search).then(
    //   () => this.setState({ results })
    // )
  }
  
  render() {
    return (
      <div>
        <input type="search"
          placeholder="search"
          value={this.state.search}
          onChange={this.handleChange('search')}
        />
        <ul>
          <li className="search-title">Users</li>
          <li className="search-title">Wines</li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Search);