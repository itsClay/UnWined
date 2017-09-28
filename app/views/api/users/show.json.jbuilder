json.partial! '/api/users/user', user: @user

json.checkins @user.checkins
