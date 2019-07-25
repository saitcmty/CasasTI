class Student < ApplicationRecord
  belongs_to :house
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

    Student.all.first_or_initialize.tap do |student|
      student.provider = auth.provider
      student.uid = auth.uid
      student.f_name = auth.extra.id_info.given_name
      student.l_name = auth.extra.id_info.family_name
      student.tec_id = ApplicationController.helpers.assign_tec_id(auth.extra.id_info.email)
      student.profile_img_url = auth.extra.id_info.picture
      student.email = auth.extra.id_info.email
      student.is_admin = false
      student.house_id = house_id
      student.save!
    end

  end

end
