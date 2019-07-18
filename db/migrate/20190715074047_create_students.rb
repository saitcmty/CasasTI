class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students, id: false do |t|
      t.string :tec_id, null: false
      t.string :f_name, null: false
      t.string :l_name, null: false
      t.string :email, null: false
      t.string :profile_img_url

      t.timestamps
    end

    execute "ALTER TABLE students ADD PRIMARY KEY (tec_id);"

    add_column :students,:house_id,:string, index: true
    add_foreign_key :students, :houses, column: :house_id, primary_key: "name"
  end
end
