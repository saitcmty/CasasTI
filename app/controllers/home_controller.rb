class HomeController < ApplicationController
  def index
    redirect_to :login unless current_user
  end

  def login
  end

  def sign_up
  end

  def admin
    redirect_to :root unless current_user.is_admin
  end

end
