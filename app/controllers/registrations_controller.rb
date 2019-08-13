class RegistrationsController < ApplicationController
  before_action :set_registration, only: [:show, :edit, :update, :destroy]

  # GET /registrations
  # GET /registrations.json
  def index
    redirect_to :root unless current_user.admin?
    @registrations = Registration.all.where(approved: false)
  end

  # GET /registrations/new
  def new
    @registration = Registration.new
  end

  # GET /registrations/1/edit
  def edit
  end

  # Registrations pantalla para usuario
  def completed
  end

  # POST /registrations
  # POST /registrations.json
  def create
    @registration = Registration.new(registration_params)
    @registration.student_id = current_user.tec_id
    @registration.approved = false
    @registration.date = DateTime.now

    respond_to do |format|
      if @registration.save
        format.html { redirect_to completed_registration_path(@registration.id), notice: 'Registration was successfully created.' }
        format.json { render :completed, status: :created, location: @registration }
      else
        format.html { render :new }
        format.json { render json: @registration.errors, status: :unprocessable_entity }
      end
    end
  end

  # POST /registrations
  # POST /registrations.json
  def create_with_code
    @registration = Registration.new
    @registration.student_id = current_user.tec_id
    @registration.approved = true
    @registration.evidence_id = session[:matching_evidence]
    @registration.date = DateTime.now

    respond_to do |format|
      if @registration.save
        format.html { redirect_to completed_registration_path(@registration.id), notice: 'Registration was successfully created.' }
        format.json { render :completed, status: :created, location: @registration }
      else
        format.html { render :new }
        format.json { render json: @registration.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /registrations/1
  # PATCH/PUT /registrations/1.json
  def update
    respond_to do |format|
      if @registration.update(registration_params)
        format.html { redirect_to @registration, notice: 'Registration was successfully updated.' }
        format.json { render :show, status: :ok, location: @registration }
      else
        format.html { render :edit }
        format.json { render json: @registration.errors, status: :unprocessable_entity }
      end
    end
  end

  # For admins to approve students' registrations
  def approve
    @registration = Registration.find(params[:id])
    @registration.approved = true
    @registration.save!
    redirect_to :registrations
  end

  # DELETE /registrations/1
  # DELETE /registrations/1.json
  def destroy
    @registration.destroy
    respond_to do |format|
      format.html { redirect_to registrations_url, notice: 'Registration was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_registration
      @registration = Registration.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def registration_params
      params.require(:registration).permit(:student_id, :evidence_id, :proof, :approved, :date)
    end
end
