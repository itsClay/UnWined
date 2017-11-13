class Api::SearchController < ApplicationController
  
  def search
    search_params = "%#{params[:search]}%"
    @users = User.where(["lower(username) LIKE ?", search_params ])
    @wines = Wine.where(
      ["lower(vineyard) LIKE ? OR lower(wine_type) LIKE ? OR cast(year as text) LIKE ? OR lower(location) LIKE ?", 
       search_params, 
       search_params, 
       search_params, 
       search_params])
    render 'api/search/search'
  end

end
