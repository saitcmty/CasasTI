class ChangeColumnName < ActiveRecord::Migration[5.2]
  def up
    rename_column :events, :end, :finish
  end
  def down
    rename_column :events, :finish, :end
  end
end
