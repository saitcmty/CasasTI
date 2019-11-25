class RemoveUniquenessFromIndexStudentEvent < ActiveRecord::Migration[5.2]
  def change
    remove_index :registrations, [:student_id, :evidence_id]
    add_index :registrations, [:student_id, :evidence_id]
  end
end
