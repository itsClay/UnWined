import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import debounce from 'lodash.debounce';

import SearchResultsList from './search_results_list';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: null,
      search: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = debounce(() => props.fetchSearch(this.state.search), 1000).bind(this)
    this.displayResults = this.displayResults.bind(this)
  }

  handleChange(e) {
    this.setState({search: e.target.value});
    this.handleSearch();
  }

  displayResults(users, wines) {
    if(this.state.search === '') {
      return;
    } else {
      return (
        <ul className="search-result">
          <div className="search-title">
            <li>Users</li>
            <li className="sub">({users.length})</li>
          </div>
          {
            this.props.query.users &&
            <SearchResultsList users={users} type="users" />
          }
          <div className="search-title">
            <li>Wines</li>
            <li className="sub">({wines.length})</li>
          </div>
          {
            this.props.query.wines &&
            <SearchResultsList wines={wines} type="wines"/>
          }
        </ul>
      )
    }
  }

  render() {
    const users = this.props.query.users ? this.props.query.users : []
    const wines = this.props.query.wines ? this.props.query.wines : []

    return (
      <div>
        <input
          placeholder="search"
          value={this.state.search}
          onChange={this.handleChange}
          onFocus={this.displayResults}
          className="search-input"
        />
      {this.displayResults(users, wines)}
      </div>
    )
  }
}

export default withRouter(Search);
