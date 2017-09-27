json.extract! checkin, :id,
                       :rating,
                       :comment,
                       :wine_id,
                       :user_id,
                       :user,
                       :wine
json.created_at time_ago_in_words(checkin.created_at)
