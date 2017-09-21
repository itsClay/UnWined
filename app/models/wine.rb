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
end
