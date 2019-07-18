class Student < ApplicationRecord
  belongs_to :house
  has_many :events, through: :assistances
  has_many :evidences, through: :registrations

  def name
    f_name + " " + l_name
  end

  def self.from_omniauth(auth, house_id)

    # Creates a new student only if it doesn't exist
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |student|
      student.provider = auth.provider
			student.uid = auth.uid
      student.f_name = auth.extra.id_info.given_name
      student.l_name = auth.extra.id_info.family_name
      student.tec_id = ApplicationController.helpers.assign_tec_id(auth.extra.id_info.email)
      student.profile_img_url = auth.extra.id_info.picture
      student.email = auth.extra.id_info.email
      student.house_id = house_id
			student.save!
    end
  end

end
