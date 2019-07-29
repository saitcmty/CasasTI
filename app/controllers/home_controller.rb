class HomeController < ApplicationController
  def index
    redirect_to :login unless current_user
    
    # TODO: Hacer que los eventos sean después de la fecha de hoy
    @events = Event.all
  end

  def login
  end

  def sign_up
  end

  def admin
    redirect_to :root unless current_user.is_admin
  end

end
