import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { signup, login, logout } from './util/session_api_util';
import { fetchWines, fetchWine, createWine, updateWine, deleteWine } from
'./actions/wine_actions';
import { RECEIVE_ALL_WINES,
         RECEIVE_WINE,
         REMOVE_WINE } from './actions/wine_actions';



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = {session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // Remove these tests when in production
  window.fetchWines = fetchWines;
  window.fetchWine = fetchWine;
  window.createWine = createWine;
  window.updateWine = updateWine;
  window.deleteWine = deleteWine;
  window.store = store;



  ReactDOM.render(<Root store={ store }/>, root);
});
