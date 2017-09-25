json.array! @checkins do |checkin|
  json.id checkin.id
  json.rating checkin.rating
  json.comment checkin.comment
  json.wine_id checkin.wine_id
  json.user_id checkin.user_id
  json.created_at checkin.created_at
end
