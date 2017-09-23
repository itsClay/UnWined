import WinesIndex from './wines_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { fetchWines,
         fetchWine,
         createWine,
         updateWine,
         deleteWine } from '../../actions/wine_actions';


const mapStateToProps = (state) => ({
  wines: Object.values(state.wines)
});

const mapDispatchToProps = (dispatch) => ({
  fetchWines: () => dispatch(fetchWines()),
  fetchWine: (id) => dispatch(fetchWine(id)),
  createWine: (wine) => dispatch(createWine(wine)),
  updateWine: (wine) => dispatch(updateWine(wine)),
  deleteWine: (wine) => dispatch(deleteWine(wine))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(WinesIndex)
);
