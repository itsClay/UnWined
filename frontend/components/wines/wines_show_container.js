import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchWine, deleteWine } from '../../actions/wine_actions';

import WinesShow from './wines_show';

const mapStateToProps = state => {
  return {
    wines: state.wines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWine: (id) => dispatch(fetchWine(id)),
    deleteWine: (id) => dispatch(deleteWine(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(WinesShow));
