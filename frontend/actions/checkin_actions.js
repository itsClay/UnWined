import * as APIUtil from '../util/checkins_api_util';
export const RECEIVE_ALL_CHECKINS = 'RECEIVE_ALL_CHECKINS';
export const RECEIVE_CHECKIN = 'RECEIVE_CHECKIN';
export const REMOVE_CHECKIN = 'REMOVE_CHECKIN';
export const RECEIVE_CHECKIN_ERRORS = 'RECEIVE_CHECKIN_ERRORS';

const receiveAllCheckins = checkins => ({
  type: RECEIVE_ALL_CHECKINS,
  checkins
});

const receiveCheckin = checkin => ({
  type: RECEIVE_CHECKIN,
  checkin
});

const removeCheckin = id => ({
  type: REMOVE_CHECKIN,
  id
});

const receiveCheckinErrors = (errors) => {
  return {
    type: RECEIVE_CHECKIN_ERRORS,
    errors
  };
};


export const fetchCheckins = () => dispatch => {
  return APIUtil.fetchCheckins().then(
    checkins => dispatch(receiveAllCheckins( checkins )),
    errors => dispatch(receiveCheckinErrors( errors.responseJSON ))
  );
};

export const fetchCheckin = (id) => dispatch => {
  return APIUtil.fetchCheckin( id ).then(
    checkin => dispatch(receiveCheckin( checkin )),
    errors => dispatch(receiveCheckinErrors( errors.responseJSON ))
  );
};

export const createCheckin = (checkin) => dispatch => {
  return APIUtil.createCheckin( checkin ).then(
    checkinResp => dispatch(receiveCheckin( checkinResp )),
    errors => dispatch(receiveCheckinErrors( errors.responseJSON ))
  );
};

export const updateCheckin = (checkin) => dispatch => {
  return APIUtil.updateCheckin( checkin ).then(
    checkinResp => dispatch(receiveCheckin( checkinResp )),
    errors => dispatch(receiveCheckinErrors( errors.responseJSON ))
  );
};

export const deleteCheckin = (checkin) => dispatch => {
  return APIUtil.deleteCheckin(checkin).then(
    checkinResp => dispatch(removeCheckin( checkinResp )),
    errors => dispatch(receiveCheckinErrors( errors.responseJSON ))
  );
};
