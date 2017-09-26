json.wine do
  json.extract! @wine,
                :id,
                :vineyard,
                :wine_type,
                :location,
                :year,
                :img_url
end
json.checkins do
  @wine.checkins.each do |checkin|
    json.set! checkin.id do
      json.partial! 'api/checkins/checkin', checkin: checkin
    end
  end
end
