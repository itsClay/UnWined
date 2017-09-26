import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import configureStore from './store/store';
import Root from './components/root';

import { fetchWines,
         fetchWine,
         createWine,
         updateWine,
         deleteWine } from './actions/wine_actions';

import { fetchCheckins,
         fetchCheckin,
         createCheckin,
         updateCheckin,
         deleteCheckin } from './actions/checkin_actions';

import { RECEIVE_ALL_WINES,
         RECEIVE_WINE,
         REMOVE_WINE } from './actions/wine_actions';

import { RECEIVE_ALL_CHECKINS,
        RECEIVE_CHECKIN,
        REMOVE_CHECKIN } from './actions/checkin_actions';

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
  // REMOVE THESE TESTS WHEN IN PROD
  window.store = store;
  window.fetchWines = fetchWines;
  window.fetchWine = fetchWine;
  window.createWine = createWine;
  window.updateWine = updateWine;
  window.deleteWine = deleteWine;
  window.fetchCheckins = fetchCheckins;
  window.fetchCheckin = fetchCheckin;
  window.createCheckin = createCheckin;
  window.updateCheckin = updateCheckin;
  window.deleteCheckin = deleteCheckin;
  //================================
  Modal.setAppElement(document.body);

  ReactDOM.render(<Root store={ store }/>, root);
});
