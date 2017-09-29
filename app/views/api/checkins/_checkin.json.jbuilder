json.extract! checkin, :id,
                       :rating,
                       :comment,
                       :wine_id,
                       :user_id,
                       :wine

json.user do
  json.username checkin.user.username
end
json.created_seconds checkin.created_at.to_i
json.created_at time_ago_in_words(checkin.created_at)
