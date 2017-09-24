import * as APIUtil from '../util/wines_api_util';
export const RECEIVE_ALL_WINES = 'RECEIVE_ALL_WINES';
export const RECEIVE_WINE = 'RECEIVE_WINE';
export const REMOVE_WINE = 'REMOVE_WINE';
export const RECEIVE_WINE_ERRORS = 'RECEIVE_WINE_ERRORS';
// export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveAllWines = wines => ({
  type: RECEIVE_ALL_WINES,
  wines
});

const receiveWine = wine => ({
  type: RECEIVE_WINE,
  wine
});

const removeWine = wine => ({
  type: REMOVE_WINE,
  wine
});

const receiveWineErrors = (errors) => {
  return {
    type: RECEIVE_WINE_ERRORS,
    errors
  };
};


export const fetchWines = () => dispatch => {
  return APIUtil.fetchWines().then(
    wines => dispatch(receiveAllWines( wines )),
    errors => dispatch(receiveWineErrors(errors.responseJSON))
  );
};

export const fetchWine = (id) => dispatch => {
  return APIUtil.fetchWine(id).then(
    wineResp => dispatch(receiveWine(wineResp)),
    errors => dispatch(receiveWineErrors(errors.responseJSON))
  );
};

export const createWine = (wine) => dispatch => {
  return APIUtil.createWine(wine).then(
    wineResp => dispatch(receiveWine(wineResp)),
    errors => dispatch(receiveWineErrors(errors.responseJSON))
  );
};

export const updateWine = (wine) => dispatch => {
  return APIUtil.updateWine(wine).then(
    wineResp => dispatch(receiveWine(wineResp)),
    errors => dispatch(receiveWineErrors(errors.responseJSON))
  );
};

export const deleteWine = (wine) => dispatch => {
  return APIUtil.deleteWine(wine).then(
    wineResp => dispatch(removeWine(wineResp)),
    errors => dispatch(receiveWineErrors(errors.responseJSON))
  );
};
