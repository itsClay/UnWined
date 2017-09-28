import * as UserAPIUtil from '../util/users_api_util';

export const RECEIVE_OTHER_USER = 'RECEIVE_OTHER_USER';

const receieveOtherUser = (user) => ({
  type: RECEIVE_OTHER_USER,
  user
});

export const fetchUser = (user) => dispatch => {
  return UserAPIUtil.fetchUser(user).then(
    (receivedUser) => dispatch(receieveOtherUser( receivedUser ))
  );
};
