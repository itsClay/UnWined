Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :wines, only: [:index, :show, :create, :update, :destroy]
    resources :checkins, only: [:index, :show, :create, :update, :destroy]

    get '/search/:search', to: 'search#search'
  end
end
