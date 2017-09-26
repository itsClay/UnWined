import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchWine, deleteWine } from '../../actions/wine_actions';
import { fetchCheckin } from '../../actions/checkin_actions';

import WinesShow from './wines_show';

const mapStateToProps = (state, ownProps) => {

  let wine;
  let checkins = [];
  if (ownProps.match.params.wineId) {
    wine = state.wines[ownProps.match.params.wineId];
    if (wine) {
      checkins = Object.values(state.checkins).filter(
        (checkin) => checkin.wine_id === wine.id
      );
    }
  }

  return {
    wine: wine,
    checkins: checkins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWine: (id) => dispatch(fetchWine(id)),
    deleteWine: (id) => dispatch(deleteWine(id)),
    fetchCheckin: (id) => dispatch(fetchCheckin(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(WinesShow));
