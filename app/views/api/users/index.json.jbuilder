json.array! @users do |user|
  json.id :id
  json.username :username
  json.session_token :session_token
end
