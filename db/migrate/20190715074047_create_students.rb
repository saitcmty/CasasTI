class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students, id: false do |t|
      t.string :tec_id, null: false
      t.string :name, null: false
      t.string :email, null: false

      t.timestamps
    end

    execute "ALTER TABLE students ADD PRIMARY KEY (tec_id);"

    add_column :students,:house_id,:string, index: true
    add_foreign_key :students, :houses, column: :house_id, primary_key: "name"
  end
end
