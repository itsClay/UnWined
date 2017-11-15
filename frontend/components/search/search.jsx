import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import debounce from 'lodash.debounce';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      loading: null,
      search: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = debounce(() => props.fetchSearch(this.state.search), 1000).bind(this)
  }

  componentWillMount() {
    // ...
  }

  handleChange(e) {
    console.log(e)
    this.setState({search: e.target.value})
    this.handleSearch()
  }
  
  render() {
    console.log(this)
    return (
      <div>
        <input type="search"
          placeholder="search"
          value={this.state.search}
          onChange={this.handleChange}
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