class CreateEvidences < ActiveRecord::Migration[5.2]
  def change
    create_table :evidences do |t|
      t.integer :points, null: false
      t.string :title, null: false
      t.string :img_url
      t.datetime :deadline, null: false

      t.timestamps
    end
  end
end
