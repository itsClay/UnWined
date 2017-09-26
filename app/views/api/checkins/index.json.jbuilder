@checkins.each do |checkin|

  json.set! checkin.id do
    json.id checkin.id
    json.rating checkin.rating
    json.comment checkin.comment
    json.wine_id checkin.wine_id
    json.user_id checkin.user_id
    json.created_at checkin.created_at.to_i
  end

end
