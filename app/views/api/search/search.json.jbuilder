json.users @users do |user|
  json.id user.id
  json.username user.username
end

json.wines @wines do |wine|
  json.id wine.id
  json.wine_type wine.wine_type
  json.vineyard wine.vineyard
  json.year wine.year
  json.location wine.location
end
