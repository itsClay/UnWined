class Api::CheckinsController < ApplicationController
  before_action :require_login

  def index
    @checkins = Checkin.all
  end

  def create
    @checkin = Checkin.new(checkin_params)
    if @checkin.save
      render :show
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def show
    @checkin = Checkin.find(params[:id])
  end

  def update
    @checkin = Checkin.find(params[:id])
    if @checkin.update(checkin_params) &&
      @checkin.user.username === current_user.username
      render :show
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def destroy
    @checkin = Checkin.find(params[:id])
    if @checkin.destroy
      render :index
    else
      render json: @checkin.errors.full_messages, status: 404
    end
  end

  private

  def checkin_params
    params.require(:checkin).permit(:rating, :comment, :wine_id, :user_id)
  end
end
