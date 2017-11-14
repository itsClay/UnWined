import * as APIUtil from '../util/search_api_util';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

const receiveSearch = (query) => ({
  type: RECEIVE_SEARCH,
  query
})

export const fetchSearch = query => dispatch => {
  return APIUtil.search(query).then(
    results => dispatch(receiveSearch(results))
  )
}