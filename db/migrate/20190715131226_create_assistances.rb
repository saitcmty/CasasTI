class CreateAssistances < ActiveRecord::Migration[5.2]
  def change
    create_table :assistances do |t|
      t.string :student_id, null: false
      t.bigint :event_id, null: false

      t.timestamps
    end

    add_index :assistances, [:student_id, :event_id], :unique => true
    
    add_foreign_key :assistances, :students, column: :student_id, primary_key: "tec_id"
    add_foreign_key :assistances, :events, column: :event_id
  end
end
