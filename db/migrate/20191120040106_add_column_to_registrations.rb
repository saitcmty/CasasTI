class AddColumnToRegistrations < ActiveRecord::Migration[5.2]
  def change
    add_column :registrations, :assigned_points, :integer
  end
end
