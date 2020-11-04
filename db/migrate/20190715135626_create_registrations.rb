class CreateRegistrations < ActiveRecord::Migration[5.2]
  def change
    create_table :registrations do |t|
      t.string :student_id, null: false
      t.bigint :evidence_id, null: false
      t.string :proof
      t.boolean :approved, null: false
      t.datetime :date, null: false

      t.timestamps
    end

    add_foreign_key :registrations, :students, column: :student_id, primary_key: "tec_id"
    add_foreign_key :registrations, :evidences, column: :evidence_id

    add_index :registrations, [:student_id, :evidence_id], :unique => true
  end
end
