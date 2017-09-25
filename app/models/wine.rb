# == Schema Information
#
# Table name: wines
#
#  id         :integer          not null, primary key
#  vineyard   :string           not null
#  type       :string           not null
#  location   :string           not null
#  year       :integer          not null
#  img_url    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Wine < ApplicationRecord
  validates :vineyard, :wine_type, :location, :year, :img_url, presence: true
  validates :year, length: { minimum: 4, maximum: 4 }
end
