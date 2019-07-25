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
        auth = request.env["omniauth.auth"]

        matricula = assign_tec_id(auth.extra.id_info.email)
        estudiante = Student.where(tec_id: matricula).first
        house_selected = session[:house_selected]

        if estudiante
            @student = estudiante
            session[:user_id] = @student.tec_id
            redirect_to :root
        elsif !house_selected
            redirect_to :signup
        else
            @student = Student.create_from_omniauth(auth, session[:house_selected])
            session[:house_selected] = nil
            session[:user_id] = @student.tec_id
            redirect_to :root
        end
    end
  
    def destroy
        session[:user_id] = nil
        redirect_to root_path
        @current_user = nil
    end

    def assign_tec_id(email)
        if (email.split(/@/).second != 'itesm.mx' and email.split(/@/).second != 'tec.mx')
        raise "Correo debe ser de dominio @tec.mx o @itesm.mx"
        end
        email.split(/@/).first.upcase
    end
  
  end