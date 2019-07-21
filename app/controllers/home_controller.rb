class HomeController < ApplicationController
  def index
  end

  def login
  end

  def admin
    redirect_to :root if !current_user.is_admin
  end

end
