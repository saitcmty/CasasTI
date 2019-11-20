class RemoveColumnConstraintEvidences < ActiveRecord::Migration[5.2]
  def change
    change_column :evidences, :points, :integer, null: true
  end
end
