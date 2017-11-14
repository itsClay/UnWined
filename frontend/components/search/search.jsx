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
    console.log(this)
    console.log(this.props)
    console.log('handling change')
    return (e) => {
      this.setState({ [search]: e.target.value })
    }
    
    // this.props.fetchSearch(this.state.search).then(
    //   () => this.setState({ results })
    // )
  }
  
  render() {
    console.log('this in render', this)
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