class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.date :start_date, null: false
      t.time :start_time, null: false
      t.date :end_date, null: false
      t.time :end_time, null: false
      t.text :description
      t.string :img_url
      t.string :link

      t.timestamps
    end
  end
end
