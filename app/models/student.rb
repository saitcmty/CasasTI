class Student < ApplicationRecord
  belongs_to :house
  has_many :assistances
  has_many :events, through: :assistances
  has_many :registrations
  has_many :evidences, through: :registrations

  def name
    f_name + " " + l_name
  end

  # Function that sums all points from evidence of each student
  def points
    @puntos = 0
    registrations.each do |r| 
      @puntos += r.evidence.points if r.approved
    end
    @puntos
  end

  def self.create_from_omniauth(auth, house_id)
    student = Student.new
    student.provider = auth.provider
    student.google_token = auth.credentials.token
    student.google_refresh_token = auth.credentials.refresh_token
    student.uid = auth.uid
    student.f_name = auth.info.first_name
    student.l_name = auth.info.last_name
    student.tec_id = ApplicationController.helpers.assign_tec_id(auth.info.email)
    student.profile_img_url = auth.info.image
    student.email = auth.info.email
    student.admin = false
    student.house_id = house_id
    student.save!
    student
  end

end
