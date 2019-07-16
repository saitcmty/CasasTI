class SessionsController < ApplicationController
  
    def create
        @student = Student.from_omniauth(request.env["omniauth.auth"], session[:house_selected])
        session[:user_id] = @student.tec_id
        redirect_to :me
    end
  
    def destroy
        session[:user_id] = nil
        redirect_to root_path
    end
  
  end