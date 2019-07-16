class Student < ApplicationRecord
  belongs_to :house
  has_many :events, through: :assistances
  has_many :evidences, through: :registrations

  def self.from_omniauth(auth, house_id)

    # Creates a new student only if it doesn't exist
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |student|
      student.provider = auth.provider
			student.uid = auth.uid
      student.name = auth.info.name
      student.tec_id = auth.info.email
      student.email = auth.info.email
      student.house_id = 'Venados'
			student.save!
    end
  end

end
