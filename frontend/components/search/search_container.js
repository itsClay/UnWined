import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Search from './search'
import { fetchSearch } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    query: state.query
  }
} 

const mapDispatchToProps = dispatch => ({
  fetchSearch: query => dispatch(fetchSearch(query))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Search)
);