class InternshipsController < ApplicationController
    def index
        @internship = Internship.all
    end
    def new
    end
    def create
        #render plain: params[:internship].inspect
        @internship = Internship.new(internship_params)
        
        if(@internship.save)
            redirect_to @internship
        else
            render 'new'
        end
    end
    private def internship_params
        params.require(:internship).permit(:title,:body)
    end
    def show
        @internship = Internship.find(params[:id])
    end
    def edit
        @internship = Internship.find(params[:id])
    end
    def update
        @internship = Internship.find(params[:id])
        if(@internship.update(internship_params))
            redirect_to @internship
        else
            render 'edit'
        end
    end
    
    def destroy
        @internship = Internship.find(params[:id])
        @internship.destroy
        redirect_to '/internships'
    end

end