class AssistancesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_assistance, only: [:destroy]

  # POST /assistances
  # POST /assistances.json
  def create
    @assistance = Assistance.new
    @assistance.student_id = current_user.tec_id
    @assistance.event_id = session[:selected_event]

    if @assistance.save
      render json: { msg: "Asistencia registrada satisfactoriamente", status: :created, location: @event }
    else
      render json: { error: @assistance.errors, status: :unprocessable_entity }
    end
  end

  # DELETE /assistances/1
  # DELETE /assistances/1.json
  def destroy
    if @assistance.destroy
      render json: { msg: "Asistencia removida satisfactoriamente" }
    else
      render json: { error: @assistance.errors, status: :unprocessable_entity }
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
