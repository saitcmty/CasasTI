class EvidencesController < ApplicationController
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
    @evidence = Evidence.new(evidence_params)

    respond_to do |format|
      if @evidence.save
        format.html { redirect_to '/evidences', notice: 'Evidence was successfully created.' }
        format.json { render :index, status: :created }
      else
        format.html { render :new }
        format.json { render json: @evidence.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /evidences/1
  # PATCH/PUT /evidences/1.json
  def update
    respond_to do |format|
      if @evidence.update(evidence_params)
        unless @evidence.points
          @evidence.registrations.each do |r|
            r.update(approved: false) unless r.assigned_points
          end
        end
        format.html { redirect_to @evidence, notice: 'Evidence was successfully updated.' }
        format.json { render :show, status: :ok, location: @evidence }
      else
        format.html { render :edit }
        format.json { render json: @evidence.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /evidences/1
  # DELETE /evidences/1.json
  def destroy
    @evidence.destroy
    respond_to do |format|
      format.html { redirect_to evidences_url, notice: 'Evidence was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_evidence
      @evidence = Evidence.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def evidence_params
      params.require(:evidence).permit(:points, :title, :img_url, :deadline)
    end
end
