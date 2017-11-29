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
      active: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = debounce(() => props.fetchSearch(this.state.search), 1000).bind(this)
    this.displayResults = this.displayResults.bind(this)
    this.searchBlur = this.searchBlur.bind(this)
    this.searchFocus = this.searchFocus.bind(this)
    this.focusOnCurrentTarget = this.focusOnCurrentTarget.bind(this)
  }

  handleChange(e) {
    this.setState({search: e.target.value});
    this.handleSearch();
  }

  displayResults(users, wines) {
    if(this.state.search === '' || this.state.active === false) {
      return;
    } else {
      return (
        <ul 
          className="search-result"
          onBlur={this.searchBlur}>
          <div className="search-title">
            <li>Users</li>
            <li className="sub">({users.length})</li>
          </div>
          {
            this.props.query.users &&
            <SearchResultsList users={users} type="users" searchBlur={this.searchBlur}/>
          }
          <div className="search-title">
            <li>Wines</li>
            <li className="sub">({wines.length})</li>
          </div>
          {
            this.props.query.wines &&
            <SearchResultsList wines={wines} type="wines" searchBlur={this.searchBlur}/>
          }
        </ul>
      )
    }
  }

  searchFocus() {
    this.setState({active: true})
  }
  
  searchBlur(event) {
    // console.log(e)
    if(!this.focusOnCurrentTarget(event)) {
      this.setState({active: false})
    }
  }
  // helper method for searchBlur
  focusOnCurrentTarget({relatedTarget, currentTarget}) {
    if (relatedTarget === null) return false;
    let parent = relatedTarget.parentNode

    // traverse up the parents till we hit current target
    while (parent !== null) {
      if(parent === currentTarget) return true;
      parent = parent.parentNode;
    }
    
    return false;
  }

  render() {
    const users = this.props.query.users ? this.props.query.users : []
    const wines = this.props.query.wines ? this.props.query.wines : []

    return (
      <div onBlur={this.searchBlur}>
        <input
          placeholder="search"
          value={this.state.search}
          onChange={this.handleChange}
          onFocus={this.searchFocus}
          className="search-input"
        />
      {
        this.displayResults(users, wines)
      }
      </div>
    )
  }
}

export default withRouter(Search);
