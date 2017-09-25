class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :is_logged_in?, :require_login

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def is_logged_in?
    !!current_user
  end

  def require_login
    redirect_to new_session_url unless is_logged_in?
  end

  def logout!
    current_user.try(&:reset_session_token!)
    session[:session_token] = nil
  end
end
