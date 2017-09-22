class Api::WinesController < ApplicationController
  def index
    @wines = Wine.all
  end

  def create
    @wine = Wine.new(wine_params)
    if @wine.save
      render :show
    else
      render json: @wine.errors.full_messages, status: 422
    end
  end

  def show
    @wine = Wine.find(params[:id])
  end

  def update
    @wine = Wine.find(params[:id])
    if @wine.update(wine_params)
      render :show
    else
      render json: @wine.errors.full_messages
    end
  end

  def destroy
    @wine = Wine.find(params[:id])
    if @wine.destroy
      render :index
    else
      render json: @wine.errors.full_messages
    end
  end

  private

  def wine_params
    params.require(:wine).permit(:wine_type, :vineyard, :location, :year, :img_url)
  end

end
