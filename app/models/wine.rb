# == Schema Information
#
# Table name: wines
#
#  id         :integer          not null, primary key
#  vineyard   :string           not null
#  wine_type  :string           not null
#  location   :string           not null
#  year       :integer          not null
#  img_url    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Wine < ApplicationRecord
  validates :vineyard, :wine_type, :location, :year, :img_url, presence: true
  validates_inclusion_of :year, in: 1500..2017,
                                message: "year must be in valid range"

  has_many :checkins, dependent: :destroy
end
