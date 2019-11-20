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
      @puntos += r.points if r.approved
    end
    @puntos
  end

  def self.create_from_omniauth(auth, house_id)
    student = Student.create(
      provider: auth.provider,
      uid: auth.uid,
      f_name: auth.info.first_name,
      l_name: auth.info.last_name,
      tec_id: ApplicationController.helpers.assign_tec_id(auth.info.email),
      profile_img_url: auth.info.image,
      email: auth.info.email,
      admin: false,
      house_id: house_id
    )
  end

end
