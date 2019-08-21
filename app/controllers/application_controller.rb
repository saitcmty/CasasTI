class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  def authenticate
  	redirect_to :login unless user_signed_in?
  end

  def current_user
    student = Student.where(tec_id: cookies[:user_id])

    if (student.length > 0)
      @current_user = student.first
    else
      @current_user = nil
    end
  end

  def current_events
  end

  def user_signed_in?
  	# converts current_user to a boolean by negating the negation
  	!!current_user
  end
end
