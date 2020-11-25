class RegistrationsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_registration, only: [:show, :edit, :update, :destroy, :approve]

  # GET /registrations
  # GET /registrations.json
  def index
    redirect_to :root unless current_user.admin?
    @registrations = Registration.all.sort_by(&:date)
    @evidences = []
    @file_proofs = []
    @registrations.each do |r|
      @evidences.append(r.evidence)
      if r.file_proof.attached?
        @file_proofs.append(url_for(r.file_proof))
      else
        @file_proofs.append(nil)
      end
    end
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
    @registration.date = DateTime.current

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

  # POST /registrations/1/approve
  # For admins to approve students' registrations
  def approve
    assigned_points = params[:assigned_points]
    @registration.update(assigned_points: assigned_points) unless assigned_points.nil?
    if @registration.update(approved: true)
      render json: { msg: "Registro aprovado satisfactoriamente" }
    else
      render json: { error: @registration.errors, status: :unprocessable_entity }
    end
  end

  # DELETE /registrations/1
  # DELETE /registrations/1.json
  def destroy
    if @registration.destroy
      render json: { msg: "Registro removido satisfactoriamente" }
    else
      render json: { error: @registration.errors, status: :unprocessable_entity }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_registration
      @registration = Registration.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def registration_params
      params.permit(:student_id, :evidence_id, :proof, :approved, :date, :justification, :assigned_points, :file_proof)
    end
end
