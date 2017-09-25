json.array! @wines do |wine|
  json.id wine.id
  json.vineyard wine.vineyard
  json.wine_type wine.wine_type
  json.location wine.location
  json.year wine.year
  json.img_url wine.img_url
  json.checkin_ids wine.checkin_ids
end
