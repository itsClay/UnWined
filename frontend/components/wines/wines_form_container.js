import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WinesForm from './wines_form';
import { fetchWine,
         createWine,
         updateWine } from '../../actions/wine_actions';

const mapStateToProps = (state, ownProps) => {
  let wine = { vineyard: "",
               wine_type: "",
               location: "",
               year: 0,
               reviews: [],
               img_url: "",
             };
  let formType = "new";
  if (ownProps.match.path == "/wines/:wineId/edit") {
    wine = state.wines[ownProps.match.params.wineId];
    formType = "edit";
  }

  return { wine, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === "/wines/new" ? createWine : updateWine;
  return {
    fetchWine: id => dispatch(fetchWine(id)),
    action: wine => dispatch(action(wine))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(WinesForm));
