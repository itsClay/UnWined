json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.session_token user.session_token
  json.checkin_ids user.checkin_ids
end
