require 'google/apis/drive_v2'

class HomeController < ApplicationController
  def index
    unless (current_user && current_user.google_refresh_token)
      @students = Student.all
      redirect_to(:login) and return
    end

    google_secret.to_authorization.refresh!
    
    # Eventos a mostrar en el Próximos Eventos Panel
    @events = []

    # Eventos cercanos* a los que el alumno está inscrito nos indican si mostrar
    # el panel de registro de código a Evento
    @current_events = []
    Event.all.order(:start).each do |e|
      # Muestra eventos dentro de los próximos 15 días
      @events.push(e) if (e.finish || e.start+90.minutes).between?(Time.current, Time.current + 15.days)

      # Lógica para mostrar o no el popup

      next if e.assistances.where(student_id: current_user.tec_id).empty?

      @redirect = e.redirects.first
      next if @redirect.nil?

      next unless current_user.registrations.where(evidence_id: @redirect.evidence.id).empty?

      if e.finish.nil?
        # Mostrar evento durante una hora si no tiene fecha de cierre
        @current_events.push(e) if Time.current.between?(e.start, e.start + 90.minutes)
      else
        @current_events.push(e) if Time.current.between?(e.start, e.finish)
      end
    end
  end

  def login
  end

  def sign_up
  end

  def admin
    redirect_to :root unless current_user && current_user.admin?
  end

  def validate_input
    @input_code = params[:registration_code]
    redirect_to(:root) and return unless @input_code

    @redirect = Redirect.find_by code: @input_code
    redirect_to(:root) and return unless @redirect

    @event = @redirect.event
    if (@event.finish && Time.current > @event.finish)
      redirect_to(:root) and return
    elsif (!@event.finish && Time.current > @event.start + 90.minutes)
      redirect_to(:root) and return
    end

    session[:matching_evidence] = @redirect.evidence_id
    redirect_to(:register_with_code) and return
  end

end
