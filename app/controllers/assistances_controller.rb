require 'google/apis/calendar_v3'

class AssistancesController < ApplicationController
  before_action :set_assistance, only: [:show, :edit, :update, :destroy]

  # POST /assistances
  # POST /assistances.json
  def create
    selected_event = Event.find(session[:selected_event])

    @assistance = Assistance.new
    @assistance.student_id = current_user.tec_id
    @assistance.event_id = selected_event.id

    g_calendar = Google::Apis::CalendarV3::CalendarService.new
    g_calendar.authorization = google_secret.to_authorization
    g_event = Google::Apis::CalendarV3::Event.new({
      summary: selected_event.title,
      location: selected_event.place,
      start: Google::Apis::CalendarV3::EventDateTime.new(date_time: selected_event.start.to_datetime),
      end: Google::Apis::CalendarV3::EventDateTime.new(date_time: selected_event.finish.to_datetime),
      description: selected_event.description,
      color_id: "9",
      locked: true
    })
    # The calendar id will be the user email
    g_calendar.insert_event(current_user.email, g_event)
    @assistance.g_event_id = g_calendar.list_events('primary', page_token: nil).items.last.id

    respond_to do |format|
      if @assistance.save
        format.html { redirect_to selected_event }
        format.json { render :show, status: :created, location: @assistance }
      else
        format.html { render :new }
        format.json { render json: @assistance.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /assistances/1
  # DELETE /assistances/1.json
  def destroy
    g_calendar = Google::Apis::CalendarV3::CalendarService.new
    g_calendar.authorization = google_secret.to_authorization
    g_calendar.delete_event(current_user.email, @assistance.g_event_id)
    
    @assistance.destroy
    respond_to do |format|
      format.html { redirect_to Event.find(session[:selected_event]) }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_assistance
      @assistance = Assistance.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def assistance_params
      params.require(:assistance).permit(:student_id, :event_id)
    end
end
