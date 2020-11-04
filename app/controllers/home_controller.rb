class HomeController < ApplicationController
  def index
    unless current_user
      redirect_to(:login) and return
    end
    
    # Eventos a mostrar en el Próximos Eventos Panel
    @events = []
    Event.all.order(:start).each do |e|
      @events.push(e) if (e.finish || e.start+90.minutes).between?(Time.current, Time.current + 15.days)
    end
  end

  def login
  end

  def sign_up
  end

  def admin
    redirect_to :root unless current_user && current_user.admin?
  end

end
