class EventsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  def register_assistance
  end

  def remove_assistance
  end

  # GET /events
  # GET /events.json
  def index
    @events = Event.all
  end

  # GET /events/1
  # GET /events/1.json
  def show
    @assistance = Assistance.all.where(student_id: current_user.tec_id, event_id: @event.id).first
    session[:selected_event] = @event.id
  end

  # GET /events/new
  def new
    redirect_to :root unless current_user.admin?
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
    redirect_to :root unless current_user.admin?
  end

  # POST /events
  # POST /events.json
  def create
    redirect_to :root unless current_user.admin?
    @event = Event.new(event_params)

    if @event.save
      render json: { msg: "Evento creado satisfactoriamente", status: :created, location: @event }
    else
      render json: { error: @event.errors, status: :unprocessable_entity }
    end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    redirect_to :root unless current_user.admin?
    @event.portrait.attach(params[:portrait])
    respond_to do |format|
      if @event.update(event_params)
        format.html { redirect_to @event, notice: 'Event was successfully updated.' }
        format.json { render :show, status: :ok, location: @event }
      else
        format.html { render :edit }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    redirect_to :root unless current_user.admin?
    @event.destroy
    respond_to do |format|
      format.html { redirect_to events_url, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.permit(:title, :place, :start, :finish, :description, :img_url, :link, :portrait)
    end
end
