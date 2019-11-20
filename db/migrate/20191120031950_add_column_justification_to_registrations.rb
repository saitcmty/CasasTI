class AddColumnJustificationToRegistrations < ActiveRecord::Migration[5.2]
  def change
    add_column :registrations, :justification, :text
  end
end
