class SessionsController < ApplicationController

    def select_cuervo
        session[:house_selected] = 'Cuervos'
        redirect_to :google_login
    end

    def select_gallina
        session[:house_selected] = 'Gallinas de Guinea'
        redirect_to :google_login
    end

    def select_pato
        session[:house_selected] = 'Patos'
        redirect_to :google_login
    end

    def select_pavo_real
        session[:house_selected] = 'Pavo Reales'
        redirect_to :google_login
    end

    def select_venado
        session[:house_selected] = 'Venados'
        redirect_to :google_login
    end
  
    def create
        @student = Student.from_omniauth(request.env["omniauth.auth"], session[:house_selected])
        session[:user_id] = @student.tec_id
        redirect_to :root
    end
  
    def destroy
        session[:user_id] = nil
        redirect_to root_path
        @current_user = nil
    end
  
  end