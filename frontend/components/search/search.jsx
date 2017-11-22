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
  }

  handleChange(e) {
    this.setState({search: e.target.value})
    this.handleSearch()
  }

  render() {
    console.log(this)
    const users = this.props.query.users ? this.props.query.users : []
    const wines = this.props.query.wines ? this.props.query.wines : []

    return (
      <div>
        <input
          type="search"
          placeholder="search"
          value={this.state.search}
          onChange={this.handleChange}
        />
      <ul className="search-result">
          <li className="search-title">Users</li>
          {
            this.props.query.users &&
            <SearchResultsList users={users} type="users" />
          }

          <li className="search-title">Wines</li>
          {
            this.props.query.wines &&
            <SearchResultsList wines={wines} type="wines"/>
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(Search);
