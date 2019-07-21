class CreateRedirects < ActiveRecord::Migration[5.2]
  def change
    create_table :redirects do |t|
      t.string :code
      t.belongs_to :event, index: true
      t.belongs_to :evidence, index: true

      t.timestamps
    end
  end
end
