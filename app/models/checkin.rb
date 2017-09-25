# == Schema Information
#
# Table name: checkins
#
#  id         :integer          not null, primary key
#  rating     :integer          not null
#  comment    :string
#  wine_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Checkin < ApplicationRecord
  validates :rating, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :wine,
    primary_key: :id,
    foreign_key: :wine_id,
    class_Name: :Wine

end
