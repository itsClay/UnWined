json.partial! '/api/users/user', user: @user

# json.checkins @user.checkins

json.checkins do
  @user.checkins.each do |checkin|

    json.set! checkin.id do
      json.partial! 'api/checkins/checkin', checkin: checkin
    end

  end

end
