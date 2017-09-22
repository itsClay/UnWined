import * as APIUtil from '../util/wines_api_util';
export const RECEIVE_ALL_WINES = 'RECEIVE_ALL_WINES';
export const RECEIVE_WINE = 'RECEIVE_WINE';
export const REMOVE_WINE = 'REMOVE_WINE';
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

export const fetchWines = () => dispatch => (
  APIUtil.fetchWines().then(wines => dispatch(receiveAllWines(wines)))
);

export const fetchWine = (id) => dispatch => (
  APIUtil.fetchWine(id).then(wineResp => dispatch(receiveWine(wineResp)))
);

export const createWine = (wine) => dispatch => (
  APIUtil.createWine(wine).then(wineResp => dispatch(receiveWine(wineResp)))
);

export const updateWine = (wine) => dispatch => (
  APIUtil.updateWine().then(wineResp => dispatch(receiveWine(wineResp)))
);

export const deleteWine = (wine) => dispatch => (
  APIUtil.removeWine(wine).then(wineResp => dispatch(removeWine(wineResp)))
);
