class AssistancesController < ApplicationController
  before_action :set_assistance, only: [:show, :edit, :update, :destroy]

  # POST /assistances
  # POST /assistances.json
  def create
    @assistance = Assistance.new
    @assistance.student_id = current_user.tec_id
    @assistance.event_id = session[:selected_event]

    respond_to do |format|
      if @assistance.save
        format.html { redirect_to Event.find(session[:selected_event]) }
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
