class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :place, null: false
      t.datetime :start, null: false
      t.datetime :end
      t.text :description
      t.string :img_url
      t.string :link

      t.timestamps
    end
  end
end
