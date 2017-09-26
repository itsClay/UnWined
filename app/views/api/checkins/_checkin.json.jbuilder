json.extract! checkin, :id, :rating, :comment, :wine_id, :user_id
json.created_at checkin.created_at.to_i
