class EvidencesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_evidence, only: [:show, :edit, :update, :destroy]

  # GET /evidences
  # GET /evidences.json
  def index
    redirect_to :root unless current_user.admin?
    @evidences = Evidence.all
  end

  # GET /evidences/new
  def new
    redirect_to :root unless current_user.admin?
    @evidence = Evidence.new
  end

  # GET /evidences/1/edit
  def edit
  end

  # POST /evidences
  # POST /evidences.json
  def create
    redirect_to :root unless current_user.admin?
    @evidence = Evidence.new(evidence_params)

    if @evidence.save
      render json: { msg: "Evidencia creada satisfactoriamente", status: :created, location: @evidence }
    else
      render json: { error: @evidence.errors, status: :unprocessable_entity }
    end
  end

  # PATCH/PUT /evidences/1
  # PATCH/PUT /evidences/1.json
  def update
    redirect_to :root unless current_user.admin?
    if @evidence.update(evidence_params)
      render json: { msg: "Evidencia actualizada satisfactoriamente", status: :created, location: @evidence }
    else
      render json: { error: @evidence.errors, status: :unprocessable_entity }
    end
  end

  # DELETE /evidences/1
  # DELETE /evidences/1.json
  def destroy
    if @evidence.destroy
      render json: { msg: "Evidencia removida satisfactoriamente" }
    else
      render json: { error: @evidence.errors, status: :unprocessable_entity }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_evidence
      @evidence = Evidence.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def evidence_params
      params.permit(:points, :title, :img_url, :deadline)
    end
end
