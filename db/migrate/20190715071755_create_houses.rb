class CreateHouses < ActiveRecord::Migration[5.2]
  def change
    create_table :houses, id: false do |t|
      t.string :name, null: false
      t.integer :house_points

      t.timestamps
    end

    execute "ALTER TABLE houses ADD PRIMARY KEY (name);"
  end
end
